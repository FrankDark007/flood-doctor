# CI/CD Pipeline Documentation

## Overview

Multi-stage pipeline optimized for performance, quality gates, and automated deployment.

## Workflows

### 1. **ci.yml** - Continuous Integration
- **Triggers**: Push to main/develop, PRs
- **Stages**:
  - TypeScript type checking (parallel)
  - ESLint + Prettier (parallel)
  - Build with artifact caching
  - Lighthouse performance audit (desktop preset, 3 runs)
  - Security scan (npm audit + TruffleHog)
- **Critical Path**: typecheck → build → lighthouse
- **Optimization**: Job parallelization, npm cache, artifact reuse

### 2. **deploy-production.yml** - Production Deployment
- **Triggers**: Push to main, manual dispatch
- **Platform**: Vercel (primary), Netlify (backup config)
- **Steps**:
  - Vercel environment pull
  - Production build
  - Deployment with URL capture
  - Post-deploy Lighthouse validation
- **Environment**: production (protected)

### 3. **preview.yml** - PR Preview Deployments
- **Triggers**: PR open/sync/reopen
- **Features**:
  - Automatic preview URL generation
  - Multi-page Lighthouse checks (home, services, emergency)
  - PR comment with deployment links
  - Concurrent builds cancelled on new push
- **Performance Thresholds**: Relaxed vs production (75% vs 80%)

### 4. **codeql.yml** - Security Analysis
- **Triggers**: Push, PR, weekly schedule (Mon 6am UTC)
- **Scans**: JavaScript/TypeScript security patterns
- **Queries**: security-and-quality

## Required Secrets

**Vercel:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

**Application:**
- `GEMINI_API_KEY`

**Auto-configured:**
- `GITHUB_TOKEN` (Lighthouse CI, CodeQL)

## Performance Thresholds

### Production
- Performance: 80%
- Accessibility: 90%
- Best Practices: 80%
- SEO: 90%
- LCP: 2500ms
- CLS: 0.1

### Preview
- Performance: 75%
- Accessibility: 85%
- Best Practices: 75%
- SEO: 85%

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Link project
vercel link

# Get project IDs (save as secrets)
vercel project ls
```

### 3. Set GitHub Secrets
Navigate to: `Settings → Secrets and variables → Actions`

Add all required secrets from list above.

### 4. Enable Workflows
Push workflows to main branch:
```bash
git add .github/workflows
git commit -m "Add CI/CD pipeline"
git push origin main
```

## Caching Strategy

- **npm dependencies**: GitHub Actions cache (~2min savings)
- **Build artifacts**: Upload/download between jobs (dist/)
- **Lighthouse reports**: Retained 7 days for comparison

## Deployment Flow

```
Push to main
  → CI checks (typecheck + lint + build)
  → Production deploy (Vercel)
  → Post-deploy Lighthouse
  → Success notification
```

```
Open PR
  → CI checks
  → Preview deploy (Vercel)
  → Multi-page Lighthouse
  → PR comment with links
```

## Optimization Notes

1. **Parallel execution**: typecheck + lint run simultaneously
2. **Artifact reuse**: Build once, use in Lighthouse job
3. **Concurrency groups**: Auto-cancel outdated preview builds
4. **Image caching**: Vercel handles asset optimization
5. **Desktop preset**: Lighthouse configured for typical usage

## Monitoring

- **Build size reports**: Auto-posted to job summaries
- **Lighthouse scores**: Uploaded to temporary storage with shareable links
- **Security alerts**: CodeQL findings in Security tab

## Alternative: Netlify

Configuration provided in `netlify.toml`. To switch:

1. Remove Vercel workflows
2. Connect Netlify via UI (auto-detects netlify.toml)
3. Set `GEMINI_API_KEY` in Netlify environment variables

## Troubleshooting

**Lighthouse fails intermittently:**
- Increase sleep time before LHCI run
- Adjust performance thresholds
- Check network throttling settings

**Build size warnings:**
- Review bundle analyzer output in job summary
- Consider code splitting
- Optimize images/assets

**TypeScript errors in CI but not local:**
- Ensure matching TypeScript versions
- Run `npm ci` locally to match lockfile
