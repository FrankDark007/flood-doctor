import { chromium } from 'playwright';

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3002/dev/fd-home-v3?__content=ref&__freeze=1', { waitUntil: 'networkidle' });

  // Check ATL sections
  const atls = await page.$$('[data-parity="animated-text-list"]');
  console.log('ATL sections found:', atls.length);

  for (let i = 0; i < atls.length; i++) {
    const box = await atls[i].boundingBox();
    const sectionId = await atls[i].getAttribute('data-section-id');
    console.log(`ATL ${i + 1} - sectionId: ${sectionId}, height: ${box?.height}px`);
  }

  // Check scrolling-cards
  const cards = await page.$('[data-parity="scrolling-cards"]');
  if (cards) {
    const box = await cards.boundingBox();
    console.log('\nscrolling-cards section height:', box?.height, 'px');

    // Check cards list
    const cardsList = await page.$('.fd-gbp-body-v3__cards-list');
    if (cardsList) {
      const listBox = await cardsList.boundingBox();
      const style = await cardsList.$eval('.', el => {
        const cs = window.getComputedStyle(el);
        return {
          display: cs.display,
          flexDirection: cs.flexDirection,
          overflowX: cs.overflowX,
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
        };
      });
      console.log('cards-list height:', listBox?.height, 'px');
      console.log('cards-list style:', style);
    }

    // Count cards
    const cardCount = await page.$$eval('.fd-gbp-body-v3__card', els => els.length);
    console.log('Card count:', cardCount);

    // Check first card
    const firstCard = await page.$('.fd-gbp-body-v3__card');
    if (firstCard) {
      const cardBox = await firstCard.boundingBox();
      console.log('First card size:', cardBox?.width, 'x', cardBox?.height);
    }
  }

  await browser.close();
}

debug().catch(console.error);
