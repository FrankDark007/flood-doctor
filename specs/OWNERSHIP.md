DESIGN-BUILD owns:
- specs/reference/**
- specs/tokens/**
- src/**

SEO-CONTENT owns:
- specs/seo/**
- content/**

Rules:
- Design/Build never edits content/**.
- SEO never edits src/**. If SEO needs an ingestion hook, write /specs/seo-requests.md.
- qa/issues.md is append-only.
