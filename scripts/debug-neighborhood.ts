import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { chromium } from 'playwright';

const cityId = process.argv[2] || 'fallschurch';
const route = process.argv[3] || '/';
const WAIT_SECONDS = parseInt(process.argv[4] || '20', 10);

const cityDistDir = path.resolve(process.cwd(), `dist-cities/${cityId}`);
const shellPath = path.join(cityDistDir, '.spa-shell.html');
const spaShellHtml = fs.existsSync(shellPath)
  ? fs.readFileSync(shellPath, 'utf-8')
  : fs.readFileSync(path.join(cityDistDir, 'index.html'), 'utf-8');

const server = http.createServer((req, res) => {
  const urlPath = req.url?.split('?')[0] || '/';
  const filePath = path.join(cityDistDir, urlPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes: Record<string, string> = {
      '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
      '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon', '.woff2': 'font/woff2',
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
    return;
  }
  const dirIndex = path.join(filePath, 'index.html');
  if (fs.existsSync(dirIndex) && fs.statSync(dirIndex).isFile()) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(dirIndex).pipe(res);
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(spaShellHtml);
});

server.listen(4199, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      console.log(`[${msg.type()}]`, msg.text());
    }
  });
  page.on('pageerror', err => console.log('[PAGE ERROR]', err.message, '\n', err.stack?.substring(0, 500)));
  
  console.log(`Navigating to ${route} for city ${cityId}...`);
  await page.goto(`http://localhost:4199${route}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(WAIT_SECONDS * 1000);
  
  const ready = await page.evaluate(() => (window as any).__PRERENDER_READY__);
  console.log('__PRERENDER_READY__:', ready);
  const title = await page.title();
  console.log('Page title:', title);
  
  // Check if content registry found the neighborhood
  const debugInfo = await page.evaluate(() => {
    return {
      city: (window as any).__FLOOD_DOCTOR_CITY__,
      url: window.location.href,
      rootHtml: document.getElementById('root')?.innerHTML?.substring(0, 200) || '(empty)',
    };
  });
  console.log('Debug info:', JSON.stringify(debugInfo, null, 2));
  
  await browser.close();
  server.close();
});
