# Tender Intake (Digiskjema)

You are running a tender intake. Your job is to create a requirements-driven delivery plan and keep traceability.

Read these files first:
- documentation/tender/02-requirements/requirements.yaml
- documentation/tender/02-requirements/requirements-index.md
- documentation/tender/03-traceability/traceability-matrix.md
- agent-os/standards/global/10-tender-traceability.md
- agent-os/standards/global/00-norway-baseline.md

Output files to create/update:
1) documentation/tender/03-traceability/traceability-matrix.md (update: add REQ rows if missing, and fill “Spec/Tasks/Status” placeholders)
2) documentation/tender/02-requirements/requirements-clusters.md (new)
3) agent-os/specs/tender-baseline-plan/shape.md (new)
4) agent-os/specs/tender-baseline-plan/spec.md (new)

What to produce:

A) Requirements clustering
Create documentation/tender/02-requirements/requirements-clusters.md with:
- Cluster name
- Included REQ-IDs
- Why they belong together
- Delivery risk (low/med/high)
- Dependencies (ID-porten, Maskinporten, archive export, etc.)

Use these default clusters if relevant:
- Identity (ID-porten, Maskinporten)
- Authorization & roles
- Form lifecycle (draft/test/publish/versioning)
- Submission pipeline (validate, store, receipt)
- Archiving & exports (sak/arkiv, metadata, immutable snapshot)
- Accessibility (WCAG 2.1 AA, EN 301 549)
- Security (NSM baseline, ASVS L2)
- Privacy (minimization, retention, DPIA triggers)
- Observability & ops (SLO, logging, alerts)
- SLA / service management (if referenced)

B) Integration overview
In agent-os/specs/tender-baseline-plan/spec.md include an “Integrasjonsoversikt” section:
- External systems mentioned in requirements
- Data exchanged
- Auth method (ID-porten/Maskinporten/other)
- Contract (OpenAPI, versioning, idempotency)
- Traceability keys (submission-id, correlation-id)

C) V/AV handling
For each V/AV requirement:
- Mark it explicitly
- Require a written supplier response reference path under documentation/tender/04-supplier-responses/

D) Epic proposal
Propose epics in delivery order:
- Must-have first (MÅ)
- Then should-have
- Then nice-to-have (only if explicitly allowed by tender)

Stop rules:
- If any requirement is ambiguous: create a “Questions to unblock” section and do not invent answers.
