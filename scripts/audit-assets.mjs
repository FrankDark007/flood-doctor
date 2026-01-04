import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SRC_DIRS = [
  path.join(ROOT, "src"),
  path.join(ROOT, "pages"),
  path.join(ROOT, "components")
];
const PUBLIC = path.join(ROOT, "public");
const assetRe = /["'](\/|\.\/)[^"']+\.(png|jpg|jpeg|svg|webp|ico|gif)["']/g;

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (p.match(/\.(ts|tsx|js|jsx|css|scss)$/)) out.push(p);
  }
  return out;
}

const files = [];
for (const srcDir of SRC_DIRS) {
  walk(srcDir, files);
}
const failures = [];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  let m;
  assetRe.lastIndex = 0;
  while ((m = assetRe.exec(text))) {
    const rawPath = m[0].slice(1, -1);
    let diskPath;
    if (rawPath.startsWith("/")) {
      diskPath = path.join(PUBLIC, rawPath);
    } else {
      diskPath = path.resolve(path.dirname(file), rawPath);
    }
    if (!fs.existsSync(diskPath)) {
      failures.push({ file, asset: rawPath });
    }
  }
}

if (failures.length) {
  console.error("❌ Asset audit failed (referenced files missing):\n");
  failures.forEach(f => console.error(`- ${path.relative(ROOT, f.file)} references missing "${f.asset}"`));
  process.exit(1);
}
console.log(`✅ Asset audit passed. (${files.length} files checked)`);
