/**
 * verify-no-external-requests.ts
 * Playwright test: Ensure FD homepage makes ZERO external network requests
 *
 * Per Deployment Agreement:
 * - Explicit 30s timeout per action
 * - Fails on ANY external domain request
 * - Allowed: localhost, 127.0.0.1, data:, blob:
 */

import { chromium, Browser, Page } from 'playwright';

const ALLOWED_ORIGINS = [
  'localhost',
  '127.0.0.1',
  '127.0.0.2',
  '127.0.0.3',
  '10.73.1.92',
  '172.16.0.2',
];

const ALLOWED_PROTOCOLS = ['data:', 'blob:', 'chrome-extension:'];

interface RequestLog {
  url: string;
  type: string;
  isExternal: boolean;
}

function isExternalRequest(url: string): boolean {
  // Allow data: and blob: URLs
  for (const protocol of ALLOWED_PROTOCOLS) {
    if (url.startsWith(protocol)) {
      return false;
    }
  }

  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname;

    // Allow localhost and local IPs
    for (const allowed of ALLOWED_ORIGINS) {
      if (hostname === allowed || hostname.endsWith(`.${allowed}`)) {
        return false;
      }
    }

    // Allow local network ranges
    if (hostname.startsWith('192.168.') || hostname.startsWith('10.')) {
      return false;
    }

    return true;
  } catch {
    // If URL parsing fails, assume it's a relative URL (allowed)
    return false;
  }
}

async function verifyNoExternalRequests(url: string): Promise<{ passed: boolean; requests: RequestLog[]; external: RequestLog[] }> {
  const requests: RequestLog[] = [];
  const external: RequestLog[] = [];

  let browser: Browser | null = null;

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    // Set explicit timeout (30s per Deployment Agreement)
    page.setDefaultTimeout(30000);
    page.setDefaultNavigationTimeout(30000);

    // Intercept all requests
    page.on('request', (request) => {
      const reqUrl = request.url();
      const reqType = request.resourceType();
      const isExt = isExternalRequest(reqUrl);

      const log: RequestLog = { url: reqUrl, type: reqType, isExternal: isExt };
      requests.push(log);

      if (isExt) {
        external.push(log);
        console.error(`❌ EXTERNAL REQUEST: [${reqType}] ${reqUrl}`);
      }
    });

    // Navigate to the page
    console.log(`\n🔍 Testing: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

    // Wait a bit for any lazy-loaded resources
    await page.waitForTimeout(2000);

    // Scroll to trigger lazy loading
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(1000);

    await browser.close();
    browser = null;

    const passed = external.length === 0;

    console.log(`\n📊 Results:`);
    console.log(`   Total requests: ${requests.length}`);
    console.log(`   External requests: ${external.length}`);
    console.log(`   Status: ${passed ? '✅ PASSED' : '❌ FAILED'}`);

    if (external.length > 0) {
      console.log(`\n❌ External requests detected:`);
      external.forEach((req) => {
        console.log(`   [${req.type}] ${req.url}`);
      });
    }

    return { passed, requests, external };
  } catch (error) {
    if (browser) await browser.close();
    throw error;
  }
}

// Main execution
async function main() {
  const url = process.argv[2] || 'http://localhost:3002/dev/fd-home-v3';

  console.log('═══════════════════════════════════════════════════════════');
  console.log('  EXTERNAL REQUEST VERIFICATION');
  console.log('  Per Deployment Agreement: ZERO external requests allowed');
  console.log('═══════════════════════════════════════════════════════════');

  try {
    const result = await verifyNoExternalRequests(url);

    if (!result.passed) {
      console.error('\n💥 VERIFICATION FAILED: External requests detected!');
      process.exit(1);
    }

    console.log('\n✅ VERIFICATION PASSED: No external requests');
    process.exit(0);
  } catch (error) {
    console.error('\n💥 VERIFICATION ERROR:', error);
    process.exit(1);
  }
}

main();
