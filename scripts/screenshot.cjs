#!/usr/bin/env node
/**
 * Screenshot utility for visual comparison
 * Usage: node scripts/screenshot.cjs <url> <output-path> [--width=1440] [--height=900] [--full-page]
 */

const puppeteer = require('puppeteer');

async function takeScreenshot(options) {
  const {
    url,
    outputPath,
    width = 1440,
    height = 900,
    fullPage = true,
    waitFor = 2000
  } = options;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  try {
    const page = await browser.newPage();

    // Capture console logs and errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('PAGE ERROR:', msg.text());
      }
    });
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

    await page.setViewport({ width, height });

    console.log(`Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait for React to render - look for main content
    try {
      await page.waitForSelector('main', { timeout: 10000 });
      console.log('Found main element');
    } catch (e) {
      console.log('Warning: main element not found, trying body...');
    }

    // Scroll through the page to trigger IntersectionObserver animations
    console.log('Scrolling through page to trigger animations...');
    await page.evaluate(async () => {
      const scrollStep = 500;
      const scrollDelay = 100;
      const maxScroll = document.body.scrollHeight;

      for (let pos = 0; pos < maxScroll; pos += scrollStep) {
        window.scrollTo(0, pos);
        await new Promise(r => setTimeout(r, scrollDelay));
      }
      // Scroll back to top
      window.scrollTo(0, 0);
    });

    // Additional wait for any animations/images
    await new Promise(resolve => setTimeout(resolve, waitFor));

    // Check if page has content
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(`Body content length: ${bodyHTML.length} chars`);

    if (bodyHTML.length < 100) {
      console.log('Warning: Page appears to have minimal content');
      console.log('Body preview:', bodyHTML.substring(0, 500));
    }

    console.log(`Taking screenshot: ${outputPath}`);
    await page.screenshot({
      path: outputPath,
      fullPage
    });

    console.log('Screenshot saved successfully!');
    return outputPath;
  } finally {
    await browser.close();
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log(`
Screenshot Utility
==================
Usage: node scripts/screenshot.cjs <url> <output-path> [options]

Options:
  --width=<pixels>     Viewport width (default: 1440)
  --height=<pixels>    Viewport height (default: 900)
  --full-page          Capture full page (default: true)
  --no-full-page       Capture viewport only
  --wait=<ms>          Wait time after load (default: 2000)

Examples:
  node scripts/screenshot.cjs http://localhost:5173/services/residential/ ./screenshots/desktop.png
  node scripts/screenshot.cjs http://localhost:5173/services/residential/ ./screenshots/mobile.png --width=390 --height=844
`);
    process.exit(1);
  }

  const url = args[0];
  const outputPath = args[1];

  const options = {
    url,
    outputPath,
    width: 1440,
    height: 900,
    fullPage: true,
    waitFor: 2000
  };

  // Parse optional arguments
  args.slice(2).forEach(arg => {
    if (arg.startsWith('--width=')) {
      options.width = parseInt(arg.split('=')[1], 10);
    } else if (arg.startsWith('--height=')) {
      options.height = parseInt(arg.split('=')[1], 10);
    } else if (arg === '--no-full-page') {
      options.fullPage = false;
    } else if (arg.startsWith('--wait=')) {
      options.waitFor = parseInt(arg.split('=')[1], 10);
    }
  });

  takeScreenshot(options)
    .then(() => process.exit(0))
    .catch(err => {
      console.error('Error:', err.message);
      process.exit(1);
    });
}

module.exports = { takeScreenshot };
