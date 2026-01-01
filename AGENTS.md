# Digiskjema – AI Agent Rules (Tender + Agent OS)

Read this file before planning or coding.
If anything is unclear, create “Questions to unblock” and stop.

## 1) Source of truth (mandatory)
Tender documents (immutable originals):
- documentation/tender/00-source/

Readable extracts:
- documentation/tender/01-extracted/

Normalized requirements (single operational source of truth):
- documentation/tender/02-requirements/requirements.yaml
- documentation/tender/02-requirements/requirements-index.md

Traceability (must be kept up to date):
- documentation/tender/03-traceability/traceability-matrix.md

Tender traceability standard (must follow):
- agent-os/standards/global/10-tender-traceability.md

Norway baseline standards (must follow):
- agent-os/standards/global/00-norway-baseline.md
- agent-os/standards/global/10-security.md
- agent-os/standards/global/20-privacy.md
- agent-os/standards/global/30-observability-slo.md
- agent-os/standards/global/40-form-lifecycle.md
- agent-os/standards/frontend/00-accessibility.md
- agent-os/standards/frontend/10-component-contract.md
- agent-os/standards/backend/10-identity-integrations.md
- agent-os/standards/backend/20-archiving.md
- agent-os/standards/testing/00-testing.md
- agent-os/standards/testing/10-a11y-testing.md

## 2) Hard tender rules (non-negotiable)
- Every spec MUST reference at least one REQ-* from requirements.yaml.
- Every task MUST reference at least one REQ-*.
- No implementation is allowed unless the change is mapped to REQ-*.
- If a change cannot be mapped to a REQ-*, move it to a separate “nice-to-have/backlog” item and exclude it from tender scope.

V / AV requirements:
- Must produce a written supplier response (not only code).
- Store supplier responses under:
  - documentation/tender/04-supplier-responses/
- Specs must include “Supplier response reference” for each V/AV requirement.

## 3) Required workflow (always)
Use Agent OS workflow for all work:
1) shape-spec
2) write-spec
3) create-tasks
4) implement-tasks

Do not start implementation until a spec and task list exist.

Store all specs under:
- agent-os/specs/<feature>/

## 4) Feature spec requirements (mandatory sections)
Every feature spec MUST include:

- Scope
- Out of scope
- Roles + permissions (RBAC/ABAC)
- Requirement coverage section named:

## Kravdekning

This section MUST include a table:

| REQ-ID | Type (A/V/AV) | Interpretation | Solution approach | Acceptance criteria | Validation/Test | Supplier response reference |
|---|---|---|---|---|---|---|

Also include:
- Data model impact + classification (PII/sensitive/children/large-scale)
- Accessibility checklist (WCAG 2.1 AA)
- Security checklist (ASVS L2 target)
- Privacy checklist (minimization, retention, DPIA trigger)
- Identity/Integration impact (ID-porten/Maskinporten, OpenAPI, idempotency)
- Archiving requirements (archive-ready submission object, exports)
- Observability (logs, audit events, metrics, tracing, alerts)
- Test plan (unit/integration/e2e/a11y)
- Questions to unblock (if any ambiguity)

Stop rule:
- If any required section cannot be completed due to missing info, add Questions to unblock and stop.

## 5) Implementation rules (architecture + quality)
Architecture:
- Keep layering clean: UI -> hooks -> services -> repositories -> DB/clients.
- No direct DB/client calls from UI components.
- No business logic inside UI components.

TypeScript and quality:
- Strict typing. No `any`.
- Keep changes incremental: implement one task at a time.
- Keep the system runnable after each task.
- Avoid duplication; use shared components and helpers.

Internationalization:
- No hardcoded user-facing strings. Use i18n consistently.

Error handling:
- User-safe messages in UI.
- Technical detail only in server logs.
- Never expose stack traces to client.

Logging:
- Do not log personal data.
- All sensitive admin actions must produce audit logs.

## 6) Definition of Done (DoD)
A task is NOT done unless:
- Tender traceability updated (REQ → spec → task → PR/commit placeholder).
- Accessibility checks:
  - automated a11y checks where available
  - manual keyboard + focus spot-check for affected flows
- Security checks:
  - authz verified server-side
  - input validated server-side
  - safe error handling
  - secrets handled correctly
- Privacy checks:
  - minimization + retention reviewed when data flow changes
  - DPIA trigger evaluated when applicable
- Tests updated/added at correct level.
- type-check + lint pass (and tests where relevant).

## 7) Traceability update rules (mandatory)
Update documentation/tender/03-traceability/traceability-matrix.md:
- When spec is created: add spec path per REQ.
- When tasks are generated: add task identifiers per REQ.
- When code is merged: add PR/commit + validation per REQ.
- Never mark “done” without validation recorded.

## 8) Default commands to run (after meaningful changes)
- npm run type-check
- npm run lint
- npm test

For UI flows:
- run relevant e2e tests when available
- run a11y checks when available

## 9) Output expectations
When implementing:
- Provide a short plan first.
- Implement exactly one task at a time.
- Summarize what changed.
- List which checks/tests were executed.
