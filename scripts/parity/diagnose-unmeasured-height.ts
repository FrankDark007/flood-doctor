/**
 * diagnose-unmeasured-height.ts
 * Find unmeasured height contributors in MAIN delta
 */

import { chromium, Page } from 'playwright';

interface WrapperMetrics {
  selector: string;
  found: boolean;
  height: number;
  paddingTop: string;
  paddingBottom: string;
  marginTop: string;
  marginBottom: string;
  rowGap: string;
  gap: string;
}

interface ChildInfo {
  index: number;
  tag: string;
  className: string;
  id: string;
  dataParity: string;
  height: number;
}

interface ViewportDiagnosis {
  viewport: string;
  snapshot: {
    mainWrapper: WrapperMetrics;
    pageWrapper: WrapperMetrics;
    children: ChildInfo[];
    childrenSum: number;
    wrapperHeight: number;
    gapDelta: number;
  };
  rebuild: {
    mainWrapper: WrapperMetrics;
    pageWrapper: WrapperMetrics;
    children: ChildInfo[];
    childrenSum: number;
    wrapperHeight: number;
    gapDelta: number;
  };
}

async function getWrapperMetrics(page: Page, selector: string): Promise<WrapperMetrics> {
  const el = await page.$(selector);
  if (!el) {
    return {
      selector,
      found: false,
      height: 0,
      paddingTop: 'N/A',
      paddingBottom: 'N/A',
      marginTop: 'N/A',
      marginBottom: 'N/A',
      rowGap: 'N/A',
      gap: 'N/A',
    };
  }

  const metrics = await el.evaluate((e: Element) => {
    const cs = window.getComputedStyle(e);
    const box = e.getBoundingClientRect();
    return {
      height: Math.round(box.height),
      paddingTop: cs.paddingTop,
      paddingBottom: cs.paddingBottom,
      marginTop: cs.marginTop,
      marginBottom: cs.marginBottom,
      rowGap: cs.rowGap,
      gap: cs.gap,
    };
  });

  return {
    selector,
    found: true,
    ...metrics,
  };
}

async function getDirectChildren(page: Page, selector: string): Promise<ChildInfo[]> {
  const el = await page.$(selector);
  if (!el) return [];

  return await el.evaluate((e: Element) => {
    const children = Array.from(e.children);
    return children.map((child, index) => {
      const box = child.getBoundingClientRect();
      return {
        index,
        tag: child.tagName.toLowerCase(),
        className: child.className || '',
        id: child.id || '',
        dataParity: child.getAttribute('data-parity') || '',
        height: Math.round(box.height),
      };
    });
  });
}

async function diagnoseViewport(
  viewport: { name: string; width: number; height: number }
): Promise<ViewportDiagnosis> {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setViewportSize({ width: viewport.width, height: viewport.height });

  // SNAPSHOT
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', {
    waitUntil: 'networkidle',
    timeout: 30000,
  });
  await page.waitForTimeout(500);

  const snapshotMainWrapper = await getWrapperMetrics(page, '.modules-lib__page');
  // The snapshot doesn't have a separate page wrapper - modules-lib__page IS the page wrapper
  const snapshotPageWrapper = await getWrapperMetrics(page, '.modules-lib__page');
  const snapshotChildren = await getDirectChildren(page, '.modules-lib__page');
  const snapshotChildrenSum = snapshotChildren.reduce((sum, c) => sum + c.height, 0);

  // REBUILD
  await page.goto('http://localhost:3002/dev/fd-home-v3?__content=ref&__freeze=1', {
    waitUntil: 'networkidle',
    timeout: 30000,
  });
  await page.waitForTimeout(500);

  const rebuildMainWrapper = await getWrapperMetrics(page, '[data-parity="main"]');
  const rebuildPageWrapper = await getWrapperMetrics(page, '.fd-gbp-body-v3__page');
  // If fd-gbp-body-v3__page doesn't exist, fall back to main
  const rebuildPageWrapperFinal = rebuildPageWrapper.found
    ? rebuildPageWrapper
    : await getWrapperMetrics(page, '[data-parity="main"]');
  const rebuildChildren = await getDirectChildren(
    page,
    rebuildPageWrapper.found ? '.fd-gbp-body-v3__page' : '[data-parity="main"]'
  );
  const rebuildChildrenSum = rebuildChildren.reduce((sum, c) => sum + c.height, 0);

  await browser.close();

  return {
    viewport: `${viewport.width}×${viewport.height}`,
    snapshot: {
      mainWrapper: snapshotMainWrapper,
      pageWrapper: snapshotPageWrapper,
      children: snapshotChildren,
      childrenSum: snapshotChildrenSum,
      wrapperHeight: snapshotPageWrapper.height,
      gapDelta: snapshotPageWrapper.height - snapshotChildrenSum,
    },
    rebuild: {
      mainWrapper: rebuildMainWrapper,
      pageWrapper: rebuildPageWrapperFinal,
      children: rebuildChildren,
      childrenSum: rebuildChildrenSum,
      wrapperHeight: rebuildMainWrapper.height,
      gapDelta: rebuildMainWrapper.height - rebuildChildrenSum,
    },
  };
}

function printWrapperTable(label: string, snapshot: WrapperMetrics, rebuild: WrapperMetrics) {
  console.log(`\n### ${label}`);
  console.log('| Property       | Snapshot          | Rebuild           | Delta    |');
  console.log('|----------------|-------------------|-------------------|----------|');

  const heightDelta = rebuild.height - snapshot.height;
  console.log(`| height         | ${String(snapshot.height).padEnd(17)} | ${String(rebuild.height).padEnd(17)} | ${heightDelta >= 0 ? '+' : ''}${heightDelta}px`.padEnd(60) + '|');
  console.log(`| padding-top    | ${snapshot.paddingTop.padEnd(17)} | ${rebuild.paddingTop.padEnd(17)} |          |`);
  console.log(`| padding-bottom | ${snapshot.paddingBottom.padEnd(17)} | ${rebuild.paddingBottom.padEnd(17)} |          |`);
  console.log(`| margin-top     | ${snapshot.marginTop.padEnd(17)} | ${rebuild.marginTop.padEnd(17)} |          |`);
  console.log(`| margin-bottom  | ${snapshot.marginBottom.padEnd(17)} | ${rebuild.marginBottom.padEnd(17)} |          |`);
  console.log(`| row-gap        | ${snapshot.rowGap.padEnd(17)} | ${rebuild.rowGap.padEnd(17)} |          |`);
  console.log(`| gap            | ${snapshot.gap.padEnd(17)} | ${rebuild.gap.padEnd(17)} |          |`);
}

function printChildrenList(label: string, children: ChildInfo[]) {
  console.log(`\n### ${label} (${children.length} children)`);
  console.log('| # | Tag     | Class/ID/data-parity                              | Height |');
  console.log('|---|---------|---------------------------------------------------|--------|');

  for (const child of children) {
    const identifier = child.dataParity
      ? `[data-parity="${child.dataParity}"]`
      : child.id
        ? `#${child.id}`
        : child.className.split(' ')[0] || '(none)';
    console.log(`| ${String(child.index).padEnd(1)} | ${child.tag.padEnd(7)} | ${identifier.slice(0, 49).padEnd(49)} | ${String(child.height).padEnd(6)} |`);
  }
}

function findUnmeasuredContributors(
  snapshotChildren: ChildInfo[],
  rebuildChildren: ChildInfo[]
): { element: string; height: number; source: string; cause: string }[] {
  const tracked = new Set([
    'hero', 'tiles', 'animated-text-list', 'scrolling-cards',
    'twoup', 'case-studies', 'cta-header', 'steps', 'faq'
  ]);

  const contributors: { element: string; height: number; source: string; cause: string }[] = [];

  // Check rebuild children for unmeasured elements
  for (const child of rebuildChildren) {
    const parity = child.dataParity;
    if (!parity || !tracked.has(parity.split('[')[0])) {
      // This child is not tracked
      const snapshotMatch = snapshotChildren.find(s => {
        // Try to match by class pattern
        if (child.id && s.id === child.id) return true;
        if (child.className && s.className.includes(child.className.split(' ')[0])) return true;
        return false;
      });

      if (child.height > 0) {
        contributors.push({
          element: child.dataParity || child.id || child.className.split(' ')[0] || child.tag,
          height: child.height,
          source: snapshotMatch ? 'BOTH' : 'REBUILD ONLY',
          cause: snapshotMatch
            ? `Delta: ${child.height - (snapshotMatch?.height || 0)}px`
            : 'Extra element in rebuild',
        });
      }
    }
  }

  // Check for elements in snapshot but not in rebuild measurements
  for (const child of snapshotChildren) {
    const matchInRebuild = rebuildChildren.find(r => {
      if (child.id && r.id === child.id) return true;
      if (child.className && r.className.includes(child.className.split(' ')[0])) return true;
      return false;
    });

    if (!matchInRebuild && child.height > 0) {
      contributors.push({
        element: child.id || child.className.split(' ')[0] || child.tag,
        height: child.height,
        source: 'SNAPSHOT ONLY',
        cause: 'Missing from rebuild',
      });
    }
  }

  // Sort by height contribution (absolute value)
  return contributors.sort((a, b) => Math.abs(b.height) - Math.abs(a.height)).slice(0, 5);
}

async function main() {
  const viewports = [
    { name: 'desktop', width: 1280, height: 900 },
    { name: 'mobile', width: 375, height: 812 },
  ];

  for (const viewport of viewports) {
    console.log('\n' + '═'.repeat(100));
    console.log(`VIEWPORT: ${viewport.width}×${viewport.height} (${viewport.name})`);
    console.log('═'.repeat(100));

    const diagnosis = await diagnoseViewport(viewport);

    // 1) Wrapper measurements
    console.log('\n## 1) WRAPPER LAYER MEASUREMENTS');
    printWrapperTable('MAIN WRAPPER', diagnosis.snapshot.mainWrapper, diagnosis.rebuild.mainWrapper);

    // 2) Direct children
    console.log('\n## 2) DIRECT CHILDREN OF PAGE WRAPPER');
    printChildrenList('SNAPSHOT Children', diagnosis.snapshot.children);
    printChildrenList('REBUILD Children', diagnosis.rebuild.children);

    // 3) Sum-of-children check
    console.log('\n## 3) SUM-OF-CHILDREN CHECK');
    console.log('| Metric                    | Snapshot        | Rebuild         | Delta    |');
    console.log('|---------------------------|-----------------|-----------------|----------|');
    console.log(`| Child count               | ${String(diagnosis.snapshot.children.length).padEnd(15)} | ${String(diagnosis.rebuild.children.length).padEnd(15)} | ${diagnosis.rebuild.children.length - diagnosis.snapshot.children.length}        |`);
    console.log(`| Sum of child heights      | ${String(diagnosis.snapshot.childrenSum).padEnd(15)} | ${String(diagnosis.rebuild.childrenSum).padEnd(15)} | ${diagnosis.rebuild.childrenSum - diagnosis.snapshot.childrenSum >= 0 ? '+' : ''}${diagnosis.rebuild.childrenSum - diagnosis.snapshot.childrenSum}px    |`);
    console.log(`| Wrapper height            | ${String(diagnosis.snapshot.wrapperHeight).padEnd(15)} | ${String(diagnosis.rebuild.wrapperHeight).padEnd(15)} | ${diagnosis.rebuild.wrapperHeight - diagnosis.snapshot.wrapperHeight >= 0 ? '+' : ''}${diagnosis.rebuild.wrapperHeight - diagnosis.snapshot.wrapperHeight}px    |`);
    console.log(`| Gap (wrapper - children)  | ${String(diagnosis.snapshot.gapDelta).padEnd(15)} | ${String(diagnosis.rebuild.gapDelta).padEnd(15)} | ${diagnosis.rebuild.gapDelta - diagnosis.snapshot.gapDelta >= 0 ? '+' : ''}${diagnosis.rebuild.gapDelta - diagnosis.snapshot.gapDelta}px    |`);

    // 4) Top unmeasured contributors
    console.log('\n## 4) UNMEASURED CONTRIBUTORS');
    const contributors = findUnmeasuredContributors(diagnosis.snapshot.children, diagnosis.rebuild.children);

    if (contributors.length === 0) {
      console.log('No unmeasured contributors found - all children are tracked sections.');
    } else {
      console.log('| Element                                  | Height | Source       | Cause                    |');
      console.log('|------------------------------------------|--------|--------------|--------------------------|');
      for (const c of contributors) {
        console.log(`| ${c.element.slice(0, 40).padEnd(40)} | ${String(c.height).padEnd(6)} | ${c.source.padEnd(12)} | ${c.cause.slice(0, 24).padEnd(24)} |`);
      }
    }
  }
}

main().catch(console.error);
