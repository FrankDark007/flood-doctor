═══════════════════════════════════════
PROJECT BOOTSTRAP — Service Request Form Redesign
═══════════════════════════════════════

ARCHITECTURE:
- Project: fd-google-redesign (React/Vite/TypeScript/Tailwind)
- Path: ~/flood-doctor/fd-google-redesign/
- Hosting: GoDaddy shared hosting via SFTP, Cloudflare CDN
- Site: flood.doctor (water damage restoration, Northern Virginia)
- The form appears on the main site and all 13 city subdomains

CURRENT FORM:
- The service request form currently exists in the React codebase
- It is the primary lead generation mechanism for the business
- It collects: name, email, phone, address, service type, description

TARGET DESIGN (from screenshot reference):
- Clean, modern card-style layout with subtle shadow
- Light gray background (#f8f9fa or similar)
- Two-column grid layout for field pairs:
  Row 1: First Name | Last Name
  Row 2: Email Address | Phone Number (with US flag +1 prefix)
  Row 3: Address Line 1 | Address Line 2
  Row 4: City | State (dropdown) | Zip Code (3-column)
- Each field has:
  - Bold uppercase label above (dark navy/slate color)
  - Red asterisk (*) for required fields
  - Icon inside field (left-aligned, gray)
  - Light border, rounded corners
  - Gray placeholder text
- Red "Proceed →" button at bottom left
- No visible form title in the card (just fields)
- Professional, corporate feel — not flashy

HARD CONSTRAINTS:
- Must remain a React component (TypeScript)
- Must use Tailwind CSS (project standard)
- Must be responsive (mobile-first)
- Must preserve all existing form field data and submission logic
- Must not break any existing functionality
- Icons should use existing icon library or add minimal dependency
- Phone field with country code prefix (+1 with US flag) is new UX addition
- State should be a dropdown/select, not free text

KNOWN CONTEXT:
- The form component is likely in src/components/ or similar
- Form submission currently goes to an API endpoint or email
- The form is embedded in multiple pages across the site
- CityLift project manages city-specific content

YOUR ROLE:
You are the planning partner for this UI redesign. Your job:
1. Review the current form implementation
2. Draft a phased implementation plan
3. Ensure the new design matches the screenshot exactly
4. Include responsive breakpoints and mobile layout
5. Preserve all existing functionality

PROMPT STYLE:
Follow the FD-CITYLIFT-EXEC prompt format:
- Structured with clear section headers
- Numbered steps with validation gates
- Deterministic rules (no ambiguity)
- Explicit "do NOT" boundaries
═══════════════════════════════════════
