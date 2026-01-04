import fs from "fs";
import path from "path";

const ROOT = process.cwd();
// Check multiple source directories
const SRC_DIRS = [
  path.join(ROOT, "src"),
  path.join(ROOT, "pages"),
  path.join(ROOT, "components"),
  path.join(ROOT, "hooks"),
  path.join(ROOT, "utils")
];
const exts = new Set([".ts", ".tsx", ".js", ".jsx"]);
const importRe = /from\s+["']([^"']+)["']|import\s*\(\s*["']([^"']+)["']\s*\)/g;

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (exts.has(path.extname(p))) out.push(p);
  }
  return out;
}

function resolveImport(fromFile, spec) {
  if (!spec.startsWith(".")) return { ok: true };
  const base = path.resolve(path.dirname(fromFile), spec);
  const candidates = [
    base, `${base}.ts`, `${base}.tsx`, `${base}.js`, `${base}.jsx`, `${base}.json`,
    `${base}/index.ts`, `${base}/index.tsx`, `${base}/index.js`, `${base}/index.jsx`
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return { ok: true };
  }
  return { ok: false, fromFile, spec };
}

const files = [];
for (const srcDir of SRC_DIRS) {
  walk(srcDir, files);
}
const failures = [];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  let m;
  importRe.lastIndex = 0;
  while ((m = importRe.exec(text))) {
    const spec = m[1] || m[2];
    if (spec) {
      const r = resolveImport(file, spec);
      if (!r.ok) failures.push(r);
    }
  }
}

if (failures.length) {
  console.error("❌ Import audit failed:\n");
  failures.forEach(f => console.error(`- ${path.relative(ROOT, f.fromFile)} -> "${f.spec}"`));
  process.exit(1);
}
console.log(`✅ Import audit passed. (${files.length} files checked)`);
