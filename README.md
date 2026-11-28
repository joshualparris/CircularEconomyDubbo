# Dubbo Circular Economy

- [NSW recycling programme licence exemption and fee relief — 28 Nov 2026](https://github.com/joshualparris/DubboEwaste/blob/main/docs/NSW-RECYCLING-PROGRAMME-LICENCE-EXEMPTION-2026-11-28.md) — 2020 RIS confirms deliberate expansion beyond councils; 2021 sale/transfer exclusion and historical hardship relief; current 2026 exact text and project applicability remain unverified. Includes activity matrix, comparator evidence, draft charter and Fair Trading enquiry; existing launch HOLD unchanged.
- [Recycling-program exemption second pass: 2026 cl 33 wording — 28 Nov 2026](https://github.com/joshualparris/DubboEwaste/blob/main/docs/RECYCLING-PROGRAM-EXEMPTION-RESEARCH-2026-11-28.md) — current NSW exemption text (Regulation 2026 cl 33), history 1998–2026, activity matrix, ranked lowest-cost lawful models, draft Fair Trading enquiry (not sent). [PDF](https://github.com/joshualparris/DubboEwaste/blob/main/reports/RECYCLING-PROGRAM-EXEMPTION-2026-11-28.pdf)

- [DubboEwaste pinned corpus audit and gap reconciliation — 28 Nov 2026](https://github.com/joshualparris/DubboEwaste/blob/main/docs/CORPUS-AUDIT-AND-GAP-RECONCILIATION-2026-11-28.md) — 76 branch trees, 1,107 unique document versions, 17 evidence reconciliation items and explicit remaining verification limits.


- **[DubboEwaste master gap research v2 — every open question (28 Nov 2026)](https://github.com/joshualparris/DubboEwaste/blob/main/docs/MASTER-GAP-RESEARCH-V2-RESULTS-2026-11-28.md)** — sweep of 1,458 open-gap lines across the research repos, consolidated into 69 questions; 16 desk answers with sources (Sircel administration, NSW battery scheme live, e-micromobility resale rule, electrical resale and licensing, home-business exemption, device banks, grants) and a contact/pilot/decision pack. [Prompt](https://github.com/joshualparris/DubboEwaste/blob/main/docs/MASTER-GAP-RESEARCH-V2-PROMPT-2026-11-28.md).

- **[Master gap-closing research — 28 November 2026](https://github.com/joshualparris/DubboEwaste/blob/main/docs/MASTER-GAP-RESEARCH-RESULTS-2026-11-28.md)** — [120-question prompt](https://github.com/joshualparris/DubboEwaste/blob/main/docs/MASTER-GAP-RESEARCH-PROMPT-2026-11-28.md), [machine-readable answer register](https://github.com/joshualparris/DubboEwaste/blob/main/docs/data/master-gap-questions-2026-11-28.csv). 4 bounded public answers, 39 partial, 41 external-blocked, 36 pilot/test-dependent. Existing launch gates remain unchanged; no field approvals or partnerships claimed. Includes regional infrastructure consultation (closes 30 Nov 2026), procurement and NSW Device Bank updates.

- **[EcoBatt / EcoCycle — Dubbo electronics supply-chain investigation (28 Nov 2026)](https://github.com/joshualparris/DubboEwaste/blob/main/docs/ECOBATT-ECOCYCLE-DUBBO-RESEARCH-2026-11-28.md)** — 46 source links, named retailer streams, WA regulator-confirmed battery-device pathway, expired Council contract, 100-device reuse pilot and cost scenarios. Dubbo-specific downstream route and corporate ITAD contracts remain unverified.

- **[EcoCycle / EcoBatt Dubbo — second-pass verification (28 Nov 2026)](https://github.com/joshualparris/DubboEwaste/blob/main/docs/ECOCYCLE-ECOBATT-DUBBO-SUPPLY-CHAIN-RESEARCH-2026-11-28.md)** — where Dubbo phones, computers and batteries go; why the reuse window closes at the retail bin; MobileMuster and Officeworks reuse routes; Whylandra embedded-battery trial; ranked partnership models and [PDF](https://github.com/joshualparris/DubboEwaste/blob/main/reports/ECOCYCLE-ECOBATT-DUBBO-SUPPLY-CHAIN-2026-11-28.pdf).

Standalone public website and volunteer/staff workspace for circular-economy activity in Dubbo, NSW.

## Audience split

**Public site**
- simple resident guidance;
- Repair Café Dubbo concept;
- proposed Library of Things;
- what to do before recycling;
- links to authoritative disposal/recycling guidance.

**Volunteer & staff workspace**
- detailed research and evidence;
- Repair Café planning and safety;
- Library of Things feasibility;
- e-waste chain research;
- partner/venue planning;
- field-validation work.

The existing DubboEwaste website is a separate project and is not modified by this repository.

## Access control

Private routes under `/internal/*` use a server-validated, signed HttpOnly session cookie. Access codes and the signing secret are deployment environment variables and are never committed to the repository.

Required production environment variables:

- `SESSION_SECRET`
- `VOLUNTEER_ACCESS_CODE`
- `STAFF_ACCESS_CODE`
- `ADMIN_ACCESS_CODE`

## Evidence discipline

The site separates:
- verified Dubbo facts;
- comparator evidence;
- partial findings;
- genuinely unknown facts requiring interviews, records or pilots.

It must never turn a statewide comparator into a fabricated Dubbo statistic.


## Repair First Dubbo research

- **[Deep repair-behaviour research](research/REPAIR-FIRST-DUBBO-DEEP-RESEARCH.md)** — evidence on repair cost, uncertainty, warranties, Repair Cafés, subsidies, repairability information, current Dubbo repair capacity, local funding routes and a ranked intervention stack.
- **[8 October 2026 evidence update](research/REPAIR-FIRST-DUBBO-2026-EVIDENCE-UPDATE.md)** — newer behavioural evidence plus Australian repair research, current Austria/France repair-bonus evidence, trust/convenience research, NSW comparators and Dubbo funding/policy context.\n- **[Implementation plan](research/REPAIR-FIRST-DUBBO-IMPLEMENTATION-PLAN.md)** — Repair Check, local repair directory, incentives, Repair Café, referrals, capacity and measurement.\n- **[12-week pilot playbook](research/REPAIR-FIRST-DUBBO-PILOT-PLAYBOOK.md)** — baseline first, then a bounded instant-incentive test with guardrails and evaluation.\n- **[Field kit](research/REPAIR-FIRST-DUBBO-FIELD-KIT.md)** — repairer interviews, participant intake, outcomes, follow-up and dashboard metrics.
- Core behaviour target: **Before you replace it, get one repair check.**
- Recommended system: transparent Repair Check + local repair directory + quote/warranty standard + small instant repair bonus + Repair Café + donor parts/loaners where useful.

The research treats repair as a system-design problem, not just an environmental-awareness campaign.


### Internal Repair First routes

- `/internal/repair-first` — workspace hub and full deep research
- `/internal/repair-first/evidence` — 2026 evidence update
- `/internal/repair-first/implementation` — implementation plan
- `/internal/repair-first/playbook` — 12-week pilot playbook
- `/internal/repair-first/field-kit` — operational research forms and metrics

## Shared volunteer learning hub

- The canonical LMS lives within the DubboEwaste operational Next.js app at `https://dubbo-ewaste-app.vercel.app/learn`.
- All three programmes can explore its catalogue; enrolments and lesson completions are per-authenticated-user in Supabase.
- The research workspace now supports a short-lived, one-time POST hand-off from an authenticated volunteer account on AssetFlow. The existing access-code login remains as a legacy fallback; it is not required for volunteers using the hand-off.
- The Library of Things programme membership and separate signup code must be configured in the volunteer account backend before library-only onboarding is available.
- Research and feasibility pages continue to live here; training/course state belongs in the canonical learning hub.

## Internal public referrals directory

- Protected route: `/internal/public-options` (uses the existing signed staff/volunteer session).
- Quick decision aid for an item's condition, plus searchable, filterable repair/reuse/recycling/borrowing links.
- Entries live in `lib/public-resource-directory.js`; review against official providers before referring people. Checked 8 October 2026.
- This is an **internal referral tool**, not a new public page or a promise that proposed services are operating. Existing public homepage and resident pages are deliberately unchanged.


## Volunteer research sign-in
- Open https://dubbo-ewaste-app.vercel.app/circular-access (or the button at /login).
- Sign in with the common community programme account. Submit the one-time secure POST hand-off to app/auth/bridge/route.js.
- The hand-off is redeemed with a Supabase publishable key using public.redeem_circular_handoff and creates a signed eight-hour research session.
- Required Vercel environment variables are SHARED_SUPABASE_URL, SHARED_SUPABASE_PUBLISHABLE_KEY and the pre-existing SESSION_SECRET.
- No service role key or permanent token crosses sites. Invalid/replayed/expired hand-off codes are rejected. Internal source routes remain gated by the signed session.
