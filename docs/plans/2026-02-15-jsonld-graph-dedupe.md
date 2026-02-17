# JSON-LD @graph Wrapper & Entity Deduplication — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix PageMeta to emit valid JSON-LD with @graph wrapping and entity deduplication instead of bare arrays.

**Architecture:** When `schema`/`structuredData` is an array, wrap in `{"@context":"https://schema.org","@graph":[...]}` with deduplication by `@id`, then by exact object match. Single objects pass through unchanged. All logic stays in PageMeta.tsx.

**Tech Stack:** React, TypeScript

---

## Background

Two patterns exist for passing schemas to PageMeta:

1. **`combineSchemas()` from utils/schema.ts** — already produces correct `@graph` output. Used by guides, ServicesHub. These pages are fine.
2. **Raw array** — `schema={[faqSchema, localBusinessSchema]}` — PageMeta serializes as bare `[{...},{...}]`, which is invalid. ~22 pages use this pattern (blog posts, location pages).

The fix is in PageMeta only. Pages using `combineSchemas()` will also benefit from deduplication (e.g., if a combined schema accidentally includes duplicate LocalBusiness).

---

### Task 1: Add schema normalization helper inside PageMeta.tsx

**Files:**
- Modify: `components/ui/PageMeta.tsx:94-104`

**Step 1: Add the `normalizeSchema` function above the component**

Insert after line 5 (imports), before the interface:

```typescript
/**
 * Normalize schema input for JSON-LD output:
 * - Single object: ensure @context present, return as-is
 * - Array: wrap in @graph, deduplicate entities
 * - Already has @graph: deduplicate entities within it
 */
function normalizeSchema(input: Record<string, any> | Record<string, any>[]): Record<string, any> {
  // Single object that already has @graph — dedupe its graph entries
  if (!Array.isArray(input) && input['@graph'] && Array.isArray(input['@graph'])) {
    return {
      '@context': 'https://schema.org',
      '@graph': dedupeEntities(input['@graph']),
    };
  }

  // Single object without @graph — pass through with @context
  if (!Array.isArray(input)) {
    if (!input['@context']) {
      return { '@context': 'https://schema.org', ...input };
    }
    return input;
  }

  // Array — strip per-item @context, wrap in @graph, dedupe
  const entities = input.map(item => {
    const { '@context': _, ...rest } = item;
    return rest;
  });

  return {
    '@context': 'https://schema.org',
    '@graph': dedupeEntities(entities),
  };
}

/**
 * Deduplicate JSON-LD entities:
 * 1. By @id — keep first occurrence
 * 2. By @type + exact match — keep first occurrence
 */
function dedupeEntities(entities: Record<string, any>[]): Record<string, any>[] {
  const seenIds = new Set<string>();
  const seenHashes = new Set<string>();
  const result: Record<string, any>[] = [];

  for (const entity of entities) {
    // Dedupe by @id
    if (entity['@id']) {
      if (seenIds.has(entity['@id'])) continue;
      seenIds.add(entity['@id']);
    }

    // Dedupe exact duplicates (same serialized content)
    const hash = JSON.stringify(entity);
    if (seenHashes.has(hash)) continue;
    seenHashes.add(hash);

    result.push(entity);
  }

  return result;
}
```

**Step 2: Replace the JSON-LD injection block (lines 95-104)**

Replace:
```typescript
    if (finalSchema) {
      let script = document.getElementById('json-ld-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(finalSchema);
    }
```

With:
```typescript
    if (finalSchema) {
      let script = document.getElementById('json-ld-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(normalizeSchema(finalSchema));
    }
```

The only change is `JSON.stringify(finalSchema)` → `JSON.stringify(normalizeSchema(finalSchema))`.

**Step 3: Update the type for schema prop to accept arrays**

Replace line 13:
```typescript
  schema?: Record<string, any>; // Support for JSON-LD
```
With:
```typescript
  schema?: Record<string, any> | Record<string, any>[]; // Support for JSON-LD (single or array)
```

Replace line 14:
```typescript
  structuredData?: Record<string, any>; // Alias for schema
```
With:
```typescript
  structuredData?: Record<string, any> | Record<string, any>[]; // Alias for schema
```

---

### Task 2: Build verification

**Step 1: Run build**

Run: `cd /Users/ghost/flood-doctor/fd-google-redesign && npm run build`
Expected: Clean build, no TypeScript errors.

**Step 2: Run prerender**

Run: `npm run prerender`
Expected: All 188 pages prerender successfully.

---

### Task 3: Spot-check prerendered output

**Step 1: Check a blog page that passes an array**

Run: `grep -c 'application/ld+json' dist/blog/kitchen-water-damage-guide/index.html`
Expected: `1` (single script tag)

Run: `grep -o '@graph' dist/blog/kitchen-water-damage-guide/index.html`
Expected: `@graph` present

**Step 2: Check a location page that previously duplicated LocalBusiness**

Run: `grep -c 'application/ld+json' dist/locations/arlington-water-damage/index.html`
Expected: `1`

Run: `python3 -c "import json,sys; html=open('dist/locations/arlington-water-damage/index.html').read(); start=html.index('{\"@context'); end=html.index('</script>',start); data=json.loads(html[start:end]); types=[e.get('@type') for e in data.get('@graph',[data])]; print('LocalBusiness count:', types.count('LocalBusiness'))"`
Expected: `LocalBusiness count: 1`

**Step 3: Check a landing page (single schema, no array)**

Run: `grep -c 'application/ld+json' dist/emergency/index.html`
Expected: `1`

Run: `grep -o '@context' dist/emergency/index.html | head -1`
Expected: `@context` present (single object, no @graph needed)

---

### Task 4: Commit

**Step 1: Verify branch**

Run: `git branch --show-current`
Expected: `main`

**Step 2: Stage and commit**

```bash
git add components/ui/PageMeta.tsx
git commit -m "$(cat <<'EOF'
fix(schema): emit @graph and dedupe JSON-LD entities

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```

**Step 3: Verify commit**

Run: `git log --oneline -1`
Expected: Shows the commit message on main.
