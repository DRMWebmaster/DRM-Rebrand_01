# Source column-layout review

Matching source rows use CSS Grid containers and items while retaining the draft’s content, backgrounds and five-strategy framework.

## Source matching

- 292 matching source rows mapped across 35 draft pages.
- Source proportions, column counts, gaps, alignment and visual ordering are recorded for desktop (1440px), tablet (900px) and mobile (390px).
- Existing nested rows remain nested. Wider/narrower splits use fractional tracks instead of fixed widths or the source page-builder code.
- Grid behavior changes at the source row-layout breakpoints, 1024px and 767px. The fundraiser’s source col-md-8 / col-md-4 structure uses a 960px breakpoint.
- Background photos, section colors, published facts and all 24 Formstack placeholders are preserved.
- Synthesized pages and the authoritative five-strategy descriptions retain appropriate layouts rather than restoring the obsolete four-strategy taxonomy.

## Custom components and adaptations

- Mission & Vision: four approach columns, the vision’s text/photo split, and the creed’s right-hand offset follow their source row profiles.
- Get Help and Bridge: the two income requirements are shown in their matching source columns, retaining the plain-language structure and all qualifications.
- Program directories follow the source homepage’s four-column desktop, two-column tablet and single-column mobile row.
- Homepage stories use a single-story, image/copy layout with native horizontal scrolling and accessible Previous/Next controls. All four authentic stories remain available.
- Homepage news follows the source markup’s one featured article followed by a three-article row, with responsive stacking.
- The stories page restores the source category sidebar. The fundraiser restores the source narrative/action split.
- Video links use a responsive card gallery. Current third-party source assets returned upstream 503 errors, so the verified titles and links from the saved rendered source are retained with styled play tiles; unavailable thumbnails are not shown as broken images.
- Custom-widget proportions that could not be remeasured reliably are adapted from source markup and the available rendered captures, rather than claimed as pixel-exact.
- Inactive/hidden source notices and form-confirmation rows that were intentionally excluded from the content migration are not reintroduced.

## Page inventory

| Draft page | Matching source rows |
| --- | --- |
| [get-help.html](get-help.html) | 1 |
| [get-involved.html](get-involved.html) | 4 |
| [get-involved/careers.html](get-involved/careers.html) | 15 |
| [get-involved/church-partnerships.html](get-involved/church-partnerships.html) | 13 |
| [get-involved/corporate-engagement.html](get-involved/corporate-engagement.html) | 26 |
| [get-involved/internships.html](get-involved/internships.html) | 0 |
| [get-involved/volunteer.html](get-involved/volunteer.html) | 13 |
| [get-involved/young-professionals.html](get-involved/young-professionals.html) | 13 |
| [index.html](index.html) | 3 |
| [our-programs.html](our-programs.html) | 1 |
| [programs/bridge-family-shelter.html](programs/bridge-family-shelter.html) | 1 |
| [programs/caps.html](programs/caps.html) | 0 |
| [programs/daytime-services.html](programs/daytime-services.html) | 0 |
| [programs/food-pantry-household-items.html](programs/food-pantry-household-items.html) | 0 |
| [programs/new-life-program.html](programs/new-life-program.html) | 0 |
| [programs/overnight-shelter.html](programs/overnight-shelter.html) | 0 |
| [programs/plrs-connection.html](programs/plrs-connection.html) | 0 |
| [programs/prevention.html](programs/prevention.html) | 0 |
| [stories-of-changed-lives.html](stories-of-changed-lives.html) | 0 |
| [strategies/dignity.html](strategies/dignity.html) | 0 |
| [strategies/housing.html](strategies/housing.html) | 0 |
| [strategies/prevention.html](strategies/prevention.html) | 0 |
| [strategies/readiness.html](strategies/readiness.html) | 0 |
| [strategies/recovery.html](strategies/recovery.html) | 0 |
| [videos.html](videos.html) | 0 |
| [ways-to-give.html](ways-to-give.html) | 9 |
| [ways-to-give/cryptocurrency.html](ways-to-give/cryptocurrency.html) | 2 |
| [ways-to-give/donate-items.html](ways-to-give/donate-items.html) | 16 |
| [ways-to-give/donate-stock.html](ways-to-give/donate-stock.html) | 26 |
| [ways-to-give/donor-advised-funds.html](ways-to-give/donor-advised-funds.html) | 18 |
| [ways-to-give/fundraise.html](ways-to-give/fundraise.html) | 0 |
| [ways-to-give/ira-gifts.html](ways-to-give/ira-gifts.html) | 11 |
| [ways-to-give/legacy-giving.html](ways-to-give/legacy-giving.html) | 21 |
| [ways-to-give/monthly-giving.html](ways-to-give/monthly-giving.html) | 11 |
| [ways-to-give/other-ways-to-give.html](ways-to-give/other-ways-to-give.html) | 9 |
| [ways-to-give/tax-credit-programs.html](ways-to-give/tax-credit-programs.html) | 10 |
| [ways-to-give/vehicles.html](ways-to-give/vehicles.html) | 9 |
| [ways-to-give/workplace-giving.html](ways-to-give/workplace-giving.html) | 7 |
| [what-we-do.html](what-we-do.html) | 1 |
| [what-we-do/homelessness-in-denver.html](what-we-do/homelessness-in-denver.html) | 8 |
| [what-we-do/how-we-help.html](what-we-do/how-we-help.html) | 1 |
| [what-we-do/impact.html](what-we-do/impact.html) | 5 |
| [who-we-are.html](who-we-are.html) | 0 |
| [who-we-are/contact.html](who-we-are/contact.html) | 9 |
| [who-we-are/development-team.html](who-we-are/development-team.html) | 2 |
| [who-we-are/faq.html](who-we-are/faq.html) | 1 |
| [who-we-are/faqs-and-facts.html](who-we-are/faqs-and-facts.html) | 1 |
| [who-we-are/financial-accountability.html](who-we-are/financial-accountability.html) | 5 |
| [who-we-are/history.html](who-we-are/history.html) | 4 |
| [who-we-are/leadership.html](who-we-are/leadership.html) | 9 |
| [who-we-are/locations.html](who-we-are/locations.html) | 4 |
| [who-we-are/mission-vision.html](who-we-are/mission-vision.html) | 3 |

## Maintenance

`assets/source-columns.css` provides the shared grid rules. Per-row custom properties store each breakpoint’s tracks, gaps and ordering; `assets/source-column-layouts.json` records the matching source keys and profiles.

## Publication

Prepared locally on `1.1` with the earlier design/background draft. This batch is included in the combined review-draft deployment on `1.1`. See the repository commit and Pages workflow for publication status.

## Validation

- 876 source-grid comparisons passed at desktop, tablet and mobile widths, checking column counts and proportional widths.
- All 52 active pages passed desktop/mobile checks with no JavaScript errors or horizontal overflow.
- Twenty-four additional representative layouts passed at 320px, 390px, 900px and 1440px.
- Story navigation, the featured-plus-three news arrangement, fundraiser split, category sidebar and all ten existing video destinations passed interaction/structure checks.
- Audited 2,844 file/link references, 351 body-image references and all 24 Formstack placeholders with no missing local targets. Direct-source copy and the five strategy descriptions remain intact.
- Search-index generation, JavaScript syntax checks and `git diff --check` passed.
