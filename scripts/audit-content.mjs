import fs from "fs";
import path from "path";

const ROOT = process.cwd();
// Check multiple possible content locations
const CONTENT_DIRS = [
  path.join(ROOT, "src", "content"),
  path.join(ROOT, "content"),
  path.join(ROOT, "pages")
];

function checkContent() {
  const failures = [];

  for (const CONTENT of CONTENT_DIRS) {
    if (!fs.existsSync(CONTENT)) continue;

    function walk(dir) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(p);
        else if (p.endsWith(".ts") || p.endsWith(".tsx")) {
          const text = fs.readFileSync(p, "utf8");
          // Check for legacy schema patterns that indicate migration issues
          if (text.includes("heroSection:") && !text.includes("processSection:")) {
            failures.push({ file: p, reason: "Legacy schema detected (heroSection without processSection)" });
          }
        }
      }
    }
    walk(CONTENT);
  }

  return failures;
}

const errors = checkContent();
if (errors.length) {
  console.error("❌ Content audit failed:\n");
  errors.forEach(e => console.error(`- ${path.relative(ROOT, e.file)}: ${e.reason}`));
  process.exit(1);
}
console.log("✅ Content audit passed.");
