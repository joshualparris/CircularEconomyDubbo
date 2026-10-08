# Dubbo Circular Economy

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
- The Circular Economy research-code login is still a **separate session**; a research-code session does not automatically authenticate the LMS. Never pretend these are single sign-on until an actual unified identity flow exists.
- The Library of Things programme membership and separate signup code must be configured in the volunteer account backend before library-only onboarding is available.
- Research and feasibility pages continue to live here; training/course state belongs in the canonical learning hub.


## Shared volunteer sign-in (October 2026)
The canonical sign-in for volunteers from DubboEwaste, Repair Café and Library of Things is at https://dubbo-ewaste-app.vercel.app/circular-access.
After normal Supabase authentication in the operations/learning app, the user submits a one-time signed-in **POST** to app/auth/bridge/route.js. The bridge consumes an expiring, single-use, random ticket using the public RPC redeem_circular_handoff with only a Supabase publishable key (never a service-role key), and issues an eight-hour local research session. No passwords or long-lived credentials cross sites. The legacy access code remains available to existing coordinators under an expandable section until everyone has migrated.

Vercel environment variables needed: SHARED_SUPABASE_URL (the existing DubboEwaste Supabase URL), SHARED_SUPABASE_PUBLISHABLE_KEY (public publishable key), SESSION_SECRET (already used for the existing signed session cookie). Never commit the SESSION_SECRET. Only the volunteer app may issue hand-off tickets after verifying active programme membership.
