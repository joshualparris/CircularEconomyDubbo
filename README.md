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
