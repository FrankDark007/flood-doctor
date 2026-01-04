// scripts/generate-content-indexes.ts
// Generates index.ts files for all city content folders

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CITIES_DIR = path.join(__dirname, '../src/content/cities');

function getExportName(filePath: string): string | null {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/export const (\w+Content|\w+)/);
  return match ? match[1] : null;
}

function generateServiceIndex(cityDir: string): void {
  const servicesDir = path.join(cityDir, 'services');
  if (!fs.existsSync(servicesDir)) return;

  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  const exports: string[] = [];

  for (const file of files) {
    const exportName = getExportName(path.join(servicesDir, file));
    if (exportName) {
      const moduleName = file.replace('.ts', '');
      exports.push(`export { ${exportName} } from './${moduleName}';`);
    }
  }

  if (exports.length > 0) {
    const indexContent = `// Auto-generated index file\n${exports.join('\n')}\n`;
    fs.writeFileSync(path.join(servicesDir, 'index.ts'), indexContent);
    console.log(`Generated: ${path.join(servicesDir, 'index.ts')}`);
  }
}

function generateNeighborhoodIndex(cityDir: string): void {
  const neighborhoodsDir = path.join(cityDir, 'neighborhoods');
  if (!fs.existsSync(neighborhoodsDir)) return;

  const files = fs.readdirSync(neighborhoodsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  const exports: string[] = [];

  for (const file of files) {
    const exportName = getExportName(path.join(neighborhoodsDir, file));
    if (exportName) {
      const moduleName = file.replace('.ts', '');
      exports.push(`export { ${exportName} } from './${moduleName}';`);
    }
  }

  if (exports.length > 0) {
    const indexContent = `// Auto-generated index file\n${exports.join('\n')}\n`;
    fs.writeFileSync(path.join(neighborhoodsDir, 'index.ts'), indexContent);
    console.log(`Generated: ${path.join(neighborhoodsDir, 'index.ts')}`);
  }
}

function generateCityIndex(cityDir: string, cityName: string): void {
  const parts: string[] = ['// Auto-generated index file'];

  // Check for homepage
  if (fs.existsSync(path.join(cityDir, 'homepage.ts'))) {
    const exportName = getExportName(path.join(cityDir, 'homepage.ts'));
    if (exportName) {
      parts.push(`export { ${exportName} } from './homepage';`);
    }
  }

  // Check for services
  if (fs.existsSync(path.join(cityDir, 'services/index.ts'))) {
    parts.push(`export * from './services';`);
  }

  // Check for neighborhoods
  if (fs.existsSync(path.join(cityDir, 'neighborhoods/index.ts'))) {
    parts.push(`export * from './neighborhoods';`);
  }

  if (parts.length > 1) {
    fs.writeFileSync(path.join(cityDir, 'index.ts'), parts.join('\n') + '\n');
    console.log(`Generated: ${path.join(cityDir, 'index.ts')}`);
  }
}

// Main execution
const cities = fs.readdirSync(CITIES_DIR).filter(f =>
  fs.statSync(path.join(CITIES_DIR, f)).isDirectory()
);

console.log('Generating content index files...\n');

for (const city of cities) {
  const cityDir = path.join(CITIES_DIR, city);
  console.log(`Processing ${city}...`);
  generateServiceIndex(cityDir);
  generateNeighborhoodIndex(cityDir);
  generateCityIndex(cityDir, city);
}

// Generate root index
const rootExports = cities.map(city => `export * from './${city}';`);
const rootIndex = `// Auto-generated root index\n// All city content exports\n\n${rootExports.join('\n')}\n`;
fs.writeFileSync(path.join(CITIES_DIR, 'index.ts'), rootIndex);
console.log(`\nGenerated: ${path.join(CITIES_DIR, 'index.ts')}`);

console.log('\nDone!');
