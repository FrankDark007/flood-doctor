import fs from 'fs';
import path from 'path';

const citiesDir = 'src/content/cities';
const cities = fs.readdirSync(citiesDir).filter(f => fs.statSync(path.join(citiesDir, f)).isDirectory());

// Collect unique service keywords from H1s (strip city)
const serviceKeywords = new Set();
for (const city of cities) {
  const servicesDir = path.join(citiesDir, city, 'services');
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  for (const file of files) {
    const content = fs.readFileSync(path.join(servicesDir, file), 'utf8');
    const h1Match = content.match(/^\s+h1:\s*"([^"]+)"/m);
    if (h1Match) {
      const m = h1Match[1].match(/^(.+?)\s+in\s+/);
      if (m) serviceKeywords.add(m[1]);
    }
  }
}

const sorted = [...serviceKeywords].sort();
console.log('=== H1-derived service keywords tested against Falls Church (longest city) ===');
console.log('');
sorted.forEach(k => {
  const title = k + ' in Falls Church, VA | Flood Doctor';
  const status = title.length > 60 ? 'OVER' : ' OK ';
  console.log(title.length.toString().padStart(3), status, title);
});

// Now test shortened versions
console.log('');
console.log('=== SHORTENED SERVICE NAMES ===');

const shortenMap = {
  'Burst Pipe Repair & Cleanup': 'Burst Pipe Repair',
  'Burst Pipe Repair & Water Cleanup': 'Burst Pipe Repair',
  'Burst Pipe Repair & Water Damage Cleanup': 'Burst Pipe Repair',
  'Burst Pipe Repair & Water Damage Restoration': 'Burst Pipe Repair',
  'Burst Pipe Water Damage Restoration': 'Burst Pipe Repair',
  'Sewage Cleanup & Remediation': 'Sewage Cleanup',
  'Sewage Cleanup & Backup Remediation': 'Sewage Cleanup',
  'Sewage Cleanup & Biohazard Restoration': 'Sewage Cleanup',
  'Sewage Cleanup & Septic Backup Services': 'Sewage Cleanup',
  'Mold Remediation & Removal': 'Mold Remediation',
  'Mold Remediation Services': 'Mold Remediation',
  'Flood Cleanup Services': 'Flood Cleanup',
  'Flood Cleanup & Restoration': 'Flood Cleanup',
  'Basement Flooding Repair': 'Basement Flooding Repair',
  'Basement Flooding Cleanup': 'Basement Flooding Repair',
  'Basement Flooding Restoration': 'Basement Flooding Repair',
  'Fire Damage Restoration & Smoke Cleanup': 'Fire Damage Restoration',
  'Storm Damage Restoration & Emergency Response': 'Storm Damage Restoration',
  'Emergency Sewage Cleanup': 'Sewage Cleanup',
  'Emergency Water Removal Services': 'Emergency Water Removal',
};

sorted.forEach(k => {
  const shortened = shortenMap[k] || k;
  const title = shortened + ' in Falls Church, VA | Flood Doctor';
  const status = title.length > 60 ? 'OVER' : ' OK ';
  if (shortened !== k) {
    console.log(title.length.toString().padStart(3), status, `"${k}" → "${shortened}" → ${title}`);
  }
});
