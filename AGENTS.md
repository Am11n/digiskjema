# Digiskjema – AI Agent Rules

This file is mandatory. Read it before planning or coding.
If a requirement conflicts with these rules, stop and ask.

## 1) Source of truth
Follow these standards in this repo:
- agent-os/standards/global/00-norway-baseline.md
- agent-os/standards/global/10-security.md
- agent-os/standards/global/20-privacy.md
- agent-os/standards/global/30-observability-slo.md
- agent-os/standards/frontend/00-accessibility.md
- agent-os/standards/backend/10-identity-integrations.md
- agent-os/standards/backend/20-archiving.md
- agent-os/standards/testing/00-testing.md

Never ignore these standards.

## 2) Workflow (always)
Use Agent OS workflow for all work:
1. shape-spec
2. write-spec
3. create-tasks
4. implement-tasks

Artifacts must be stored under:
- agent-os/specs/<feature>/

Do not start implementing until a spec and task list exist.

## 3) Non-negotiables (Norwegian public sector baseline)
Accessibility:
- WCAG 2.1 AA minimum.
- EN 301 549 as procurement baseline.
- Keyboard navigation, focus management, screen reader flow, correct labels, error announcement.
- Digdir Designsystem is a baseline, but product-level accessibility must be implemented.

Security:
- NSM principles baseline.
- OWASP ASVS Level 2 target.
- Secure-by-default, least privilege, tenant isolation, tamper-resistant audit logging.
- Validate input server-side, safe error handling, secrets only via env.

Identity and integrations:
- ID-porten (OIDC) for citizens.
- Maskinporten (OAuth2 scopes) for system-to-system.
- OpenAPI for all APIs, versioning, idempotency, traceability per submission.

Privacy:
- Data minimization per form type.
- Retention policy per form type + automatic deletion/archiving.
- DPIA triggers must be evaluated for new forms handling sensitive/high-volume data.

Archiving:
- Build an “archive-ready submission object” with metadata, attachments, receipt, and immutable reference of what was sent.
- Export/transfer patterns must be supported for sak/arkiv/fagsystem.

Quality and operations:
- SLOs from day one (uptime, latency, error rate, recovery time).
- Observability: structured logs, metrics, tracing, alerts tied to user experience.
- Release control: feature flags, canary for risky changes, safe rollback plan.

## 4) Feature spec template requirements
Every feature spec MUST include these sections:
- Scope + Out of scope
- User roles + permissions (RBAC/ABAC)
- Data model changes + classification (PII/sensitive)
- Accessibility checklist (WCAG 2.1 AA)
- Security checklist (ASVS L2)
- Privacy checklist (data minimization, retention, DPIA trigger)
- Identity/Integration impact (ID-porten/Maskinporten, OpenAPI)
- Archiving requirements (submission object, export)
- Observability (events, audit logs, metrics, alerts)
- Test plan (unit/integration/e2e/a11y)

If any section is unknown, add “Questions to unblock” and stop.

## 5) Coding rules
Architecture:
- Keep layering clean (UI -> hooks -> services -> repositories -> DB client).
- No direct DB calls in UI.
- No business logic inside UI components.

TypeScript and quality:
- Strict typing. No `any`.
- Avoid duplication. Use shared components and helpers.
- Keep changes incremental: one task at a time, keep app runnable.

Internationalization:
- No hardcoded user-facing strings. Use i18n.

Error handling:
- No swallowed errors.
- User-safe messages in UI. Technical detail only in logs.

Logging:
- Do not log personal data.
- All sensitive admin actions must produce audit logs.

## 6) Definition of Done (DoD)
A task is NOT done unless:
- Accessibility checks: automated + manual spot-check (keyboard + focus).
- Security check: authz verified, input validated, safe errors, no secrets.
- Privacy check: data minimization + retention considered where data changes.
- Tests updated/added as required.
- type-check + lint pass.

## 7) Commands to run
After meaningful changes:
- npm run type-check
- npm run lint
- npm test

For UI flows:
- run relevant e2e tests when available
- run a11y checks when available

## 8) Output expectations
When asked to implement:
- Provide a short plan first.
- Implement exactly one task at a time.
- Summarize what changed and which checks were run.
