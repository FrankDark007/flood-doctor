/**
 * Multi-City FTP Deployment Script
 *
 * Deploys 13 city subdomain sites to GoDaddy
 * Each city gets its own subdomain folder
 *
 * Usage: npx tsx scripts/deploy-cities.ts
 */

import * as ftp from 'basic-ftp';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FTP Configuration
const FTP_CONFIG = {
  host: '132.148.253.156',
  user: 'Deploy@flood.doctor',
  password: process.env.FTP_PASSWORD || '',
  secure: false
};

const CITIES = [
  'mclean', 'arlington', 'alexandria', 'fairfax', 'vienna',
  'tysons', 'reston', 'herndon', 'ashburn', 'springfield',
  'fallschurch', 'greatfalls', 'lorton'
];

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_CITIES_DIR = path.join(PROJECT_ROOT, 'dist-cities');

async function deployCity(client: ftp.Client, cityId: string): Promise<void> {
  const cityDir = path.join(DIST_CITIES_DIR, cityId);
  const remoteDir = `/${cityId}`;

  if (!fs.existsSync(cityDir)) {
    console.log(`  ⚠️  Skipping ${cityId} - local directory not found`);
    return;
  }

  // Create remote directory if it doesn't exist
  try {
    await client.ensureDir(remoteDir);
    await client.cd('/');
  } catch (error) {
    console.log(`  📁 Creating ${remoteDir}...`);
  }

  // Upload all files from city directory
  console.log(`  📤 Uploading ${cityId} files...`);
  await client.uploadFromDir(cityDir, remoteDir);
  console.log(`  ✅ ${cityId}.flood.doctor deployed`);
}

async function main(): Promise<void> {
  console.log('\\n🚀 FLOOD DOCTOR CITY DEPLOYMENT');
  console.log('================================\\n');

  if (!FTP_CONFIG.password) {
    console.error('❌ Error: FTP_PASSWORD environment variable not set');
    console.log('\\nUsage: FTP_PASSWORD=yourpassword npx tsx scripts/deploy-cities.ts');
    process.exit(1);
  }

  // Verify dist-cities exists
  if (!fs.existsSync(DIST_CITIES_DIR)) {
    console.error('❌ Error: dist-cities directory not found');
    console.log('Run `npx tsx scripts/build-cities.ts` first');
    process.exit(1);
  }

  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    console.log('📡 Connecting to GoDaddy FTP...');
    await client.access(FTP_CONFIG);
    console.log('✅ Connected\\n');

    console.log(`📍 Deploying ${CITIES.length} city sites...\\n`);

    for (const cityId of CITIES) {
      await deployCity(client, cityId);
    }

    console.log('\\n================================');
    console.log('✅ DEPLOYMENT COMPLETE\\n');
    console.log('City sites deployed:');
    CITIES.forEach(city => {
      console.log(`  - https://${city}.flood.doctor`);
    });

  } catch (error) {
    console.error('\\n❌ Deployment failed:', error);
    process.exit(1);
  } finally {
    client.close();
  }
}

main();
