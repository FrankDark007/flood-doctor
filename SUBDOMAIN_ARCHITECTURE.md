# Claude Code Execution Prompt: Flood Doctor City Subdomain Architecture V3

**Version:** 3.0  
**Last Updated:** January 2025  
**Purpose:** Build a data-driven React/Vite subdomain system for Flood Doctor LLC

---

## Project Overview

Build a data-driven React/Vite subdomain system for Flood Doctor LLC where:

- Each `[city].flood.doctor` renders as a unique "Digital Franchise"
- `www.flood.doctor` and `flood.doctor` act as the **Global HQ**
- SAB-compliant schema (no street addresses exposed)
- Local content hooks for SEO differentiation
- Unified service request form with city tagging
- Local project gallery system

**Tech Stack:** React 18, Vite, TypeScript, React Router, React Hook Form, Tailwind CSS

---

## PHASE 1: Data Layer Foundation

### Task 1.1: Create Master Franchise Configuration

**Create file:** `src/data/franchises.ts`
