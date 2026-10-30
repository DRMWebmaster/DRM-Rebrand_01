# DRM Rebrand v1.1 — Implementation Tracker

Status: In progress. Branch: `1.1`. No deployment requested. This file tracks implementation, not approval to publish.

## Core editorial rules
- Five strategies are **Dignity, Readiness, Recovery, Housing, Prevention**. They are interconnected throughout the organization, not mutually exclusive classifications for programs.
- The previous four strategies were Emergency Services, Rehabilitation, Transitional Programs, Community Outreach. Replace current framework references, not archived historical evidence.
- Programs are presented by what services they provide. On each program page, explain the relevant strategies in the participant's journey without forcing a fixed five-part structure.
- Housing strategy: DRM currently helps people attain and maintain housing. Do not assert a DRM-owned permanent-housing portfolio.
- Prevention is both a strategy and a named program: distinguish the two.
- Get Help: prioritize visitor needs, not internal strategy names. Use plain-language headlines followed by accurate program labels, eligibility and intake directions.
- Preserve actual existing live DRM text and image source URLs where appropriate. Mark unverified or illustrative text before publishing.

## Build stages
### Stage A — Existing architecture (in progress)
- [x] Add content architecture rules to `website-design-standards.html`.
- [x] Implement first-pass needs-first entry cards in `get-help.html` (six visitor needs and existing prototype links).\n- [ ] Validate all Get Help destinations, hours, locations, and eligibility against current approved operational information before release.
- [ ] Refine `what-we-do.html` to show strategies working together.
- [ ] Review `index.html` for former four-strategy language and update the five-strategy introduction.
- [ ] Review `our-programs.html`: program directory should not assign exclusive strategy buckets.
- [ ] Update each `strategies/*.html` to explain the strategy across multiple programs.
- [ ] Update each `programs/*.html` with contextual 'How We Help You Move Forward' sections where accurately supported.

### Stage B — Who We Are / About (planned)
- [ ] About Us
- [ ] Mission & Vision — preserve official mission, vision and statement-of-faith wording
- [ ] History
- [ ] Leadership
- [ ] Financial Accountability
- [ ] Locations
- [ ] FAQ
- [ ] Contact

### Stage C — Get Involved (planned)
- [ ] Get Involved landing
- [ ] Volunteer
- [ ] Corporate Engagement
- [ ] Young Professionals
- [ ] Church Partnerships
- [ ] Internships
- [ ] Careers — preserve benefits, testimonials, job-opening destination

### Stage D — Ways to Give (planned)
- [ ] Ways to Give landing
- [ ] Monthly Giving / Pathways of Hope
- [ ] Donate Items
- [ ] Vehicle Donations
- [ ] Legacy Giving
- [ ] Other Ways to Give
- [ ] Workplace Giving

### Stage E — What We Do support pages (planned)
- [ ] How We Help
- [ ] Our Impact
- [ ] Confirm current top-level and first-sublevel live navigation, then reconcile the list and any page aliases.

## Review gates
- Source content and official program terminology checked against live DenverRescueMission.org.
- Responsive layout and keyboard navigation checked; legible 20px body and responsive heading scales.
- Real image URLs used when available, sized placeholders otherwise.
- All prototype links work; external forms remain external rather than mocked as functional.
- No new branch, no automatic deployment. Publishing and visual approval remain separate.
