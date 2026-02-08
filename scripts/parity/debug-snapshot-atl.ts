import { chromium } from 'playwright';

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  // Check ATL Light
  const atlLight = await page.$('section.ion-animated-text-list--fill-light');
  if (atlLight) {
    const box = await atlLight.boundingBox();
    console.log('ATL Light (snapshot):');
    console.log('  Section height:', box?.height, 'px');

    const structure = await atlLight.evaluateHandle(section => {
      const el = section as HTMLElement;
      const children = Array.from(el.children).map(child => {
        const c = child as HTMLElement;
        const box = c.getBoundingClientRect();
        return {
          tag: c.tagName.toLowerCase(),
          class: c.className.split(' ').slice(0, 2).join(' '),
          height: Math.round(box.height),
        };
      });

      // Find media element
      const media = el.querySelector('[class*=media], [class*=image], img, video');
      const mediaBox = media ? (media as HTMLElement).getBoundingClientRect() : null;

      return {
        children,
        mediaWidth: mediaBox ? Math.round(mediaBox.width) : 0,
        mediaHeight: mediaBox ? Math.round(mediaBox.height) : 0,
      };
    });

    console.log('  Structure:', await structure.jsonValue());
  }

  // Check ATL Dark
  const atlDark = await page.$('section.ion-animated-text-list--fill-dark');
  if (atlDark) {
    const box = await atlDark.boundingBox();
    console.log('\nATL Dark (snapshot):');
    console.log('  Section height:', box?.height, 'px');

    const structure = await atlDark.evaluateHandle(section => {
      const el = section as HTMLElement;
      const children = Array.from(el.children).map(child => {
        const c = child as HTMLElement;
        const box = c.getBoundingClientRect();
        return {
          tag: c.tagName.toLowerCase(),
          class: c.className.split(' ').slice(0, 2).join(' '),
          height: Math.round(box.height),
        };
      });

      // Find media element
      const media = el.querySelector('[class*=media], [class*=image], img, video');
      const mediaBox = media ? (media as HTMLElement).getBoundingClientRect() : null;

      return {
        children,
        mediaWidth: mediaBox ? Math.round(mediaBox.width) : 0,
        mediaHeight: mediaBox ? Math.round(mediaBox.height) : 0,
      };
    });

    console.log('  Structure:', await structure.jsonValue());
  }

  await browser.close();
}

debug().catch(console.error);
