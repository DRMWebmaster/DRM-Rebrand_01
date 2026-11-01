# Functional website draft — design review

The 52 active public pages now use a shared design, with the existing Blueberry, Water, Oatmeal, DRM Red and restrained Banana palette. The archive and internal design standards page are retained as references.

## What changed

- A photo-led homepage with selectable text, working calls to action and a focused program preview.
- Consistent page introductions, breadcrumbs, typography, reading widths, spacing and responsive layouts.
- A shared desktop/mobile header with separate destination links and accessible submenu controls. Keyboard focus and Escape behavior are supported.
- Local site search across all 52 pages, including loading, empty-result, retry and keyboard-close behavior.
- Section navigation on longer pages, with a desktop sidebar and a compact mobile directory.
- Native expandable answers for FAQs, contact topics and eligibility details. Links to a section open any containing accordion.
- Staff portrait cards, optional personal reflections, financial report cards organized by year, impact statistics, partner logo grids and a readable history timeline.
- A shared footer with real navigation and a real newsletter signup destination.
- All supporting source images are stored locally, with provenance and checksums in `assets/content/sources.json`.

## Content and integrations

The verified source content and GitHub’s five-strategy framework remain the basis of the draft. Added introductions and navigation copy help readers find their next step; they do not introduce new eligibility rules or service promises. Get Help retains the plain-language service structure and its important access guidance.

All 24 requested blocks remain labeled **Formstack Form Here**. They do not submit information. Donation processing, newsletter signup, employer matching, grant widgets and other live services use their real external destinations. Embedded videos require their original video services.

The content gaps and source caveats documented in `CONTENT-REVIEW.md` still apply, including unavailable live internships pages. The PLRS definition is now resolved using its official website; see `PLRS-REVIEW.md`. The draft routes internship navigation to the local page rather than the known missing live URL.

## Maintenance

The draft is static HTML with no package installation or build requirement. Shared styling is in `assets/draft.css`; progressive behavior is in `assets/draft.js`. Shared navigation is in `assets/navigation.js` and `assets/navigation.css`.

After editing page content, run `python3 scripts/build-search-index.py` to refresh `assets/search-index.json`. The generator uses Python’s standard library. Source content is readable without JavaScript; search and the enhanced layouts require JavaScript and an HTTP server.

## Review status

Prepared locally on branch `1.1`. This design batch is included in the combined review-draft deployment on `1.1`. See the repository commit and Pages workflow for publication status.

## Validation completed

- All 52 pages passed browser checks at 1440px and 390px, with no JavaScript errors, missing main headings or horizontal overflow.
- Fifteen additional layouts passed at 320px, 768px and 1024px.
- Interaction checks passed for search results and no-results states, dialog closing, mobile menus, submenus, FAQs, contact accordions, Formstack visibility, report cards, section links and Get Help eligibility details.
- Audited 2,709 local file/link references, 343 body-image references and all 24 Formstack placeholders, with no missing local destinations. Verified that direct source-page text and the five strategy explanations survived the structural cleanup.
- Confirmed that source content remains readable without JavaScript and that generating the search index is repeatable.
- `node --check` and `git diff --check` passed.

## Source background restoration

The source-page background review restores corresponding section colors and photos while retaining this design system. See `BACKGROUND-REVIEW.md` for placements, image provenance and the source-aligned homepage sections.
