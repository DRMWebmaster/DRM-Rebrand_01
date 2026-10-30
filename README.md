# DRM Rebranding Phase One

Design prototypes for Denver Rescue Mission. This is a **concept site**, not a production CMS build.

## Structure

- `index.html`: homepage (the only page with the Vernon hero image and vision statement)
- `what-we-do.html`: What We Do overview
- `strategies/`: five strategy pages
- `our-programs.html` and `programs/`: program overview and eight program pages
- `get-help.html`: help landing page
- `archive/what-we-do-v1.html`: superseded earlier design retained for reference

The prototype pages link to one another using **relative HTML links**. The collapsible “Explore all prototype pages” directory provides a simple cross-page index without altering the main modeled WordPress header. External links intentionally point to the live Mission site where no prototype page exists.

## GitHub Pages

1. Create a public repository called `drm-rebranding-phase-one` under the desired GitHub account or organization.
2. Upload the contents of this directory to the **root of the default `main` branch**, including `.nojekyll` (or push via Git).
3. In **Settings > Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then save.
4. View the published site at `https://OWNER.github.io/drm-rebranding-phase-one/` (replace `OWNER` with actual repository owner).

GitHub Pages is public when configured on a public repository; **do not upload private donor information, credentials, unpublished client stories, or API keys**.

## Current limitations

- Header and footer are design approximations/screenshots, not live WordPress elements.
- The homepage hero and the sitewide footer are embedded as image data for portability; screen-shot text/links cannot be independently edited or clicked.
- Newsletter form is a visual concept; it does not submit to a subscriber list.
- Some placeholder images use placehold.co and therefore require internet connectivity; styled fallbacks may be visible if blocked.
- Program and strategy content may be illustrative and requires editorial/program review before publication.
- Archived v1 overview is for reference only.

## Editing

Each HTML page is self-contained (styles and image data are embedded). Commit future changes to the relevant HTML pages. Avoid editing a second copy of the page outside the repository after publication.

## Version 1.1 — brand color refresh

Branch: `1.1` (kept independent from the published `main` v1.0 baseline).

- All 18 active prototype pages now link `assets/site-overrides.css` using correct relative paths.
- The shared stylesheet defines named standard, medium, and light tokens for Blueberry, Water, Banana, Pumpkin, Bell Pepper, Apple, and Oatmeal. DRM Red is defined as a single standard color.
- Blueberry is dominant, all five core strategies use Blueberry, and strong green/orange strategy coding is avoided.
- Light Oatmeal introduces warm neutral sections; Banana adds a restrained contrast accent with Blueberry text.
- Default CTAs are Water with white lettering and Blueberry hover states; DRM Red remains available for selective use.
- Homepage-only hero and vision, Stay Connected signup visual, and screenshot footer remain unchanged.

The project is a visual concept. Before promoting `1.1` in GitHub Pages, review responsive layouts, text contrast, and the appearance of individual sections. On this repository, Settings → Pages → Deploy from a branch → `1.1` / `(root)` switches the public preview.
