# Norway baseline for Digiskjema (mandatory)

These rules apply to every feature, every screen, every API, every form type.
If anything is unknown, add “Questions to unblock” and stop.

## Accessibility baseline
- WCAG 2.1 AA is minimum.
- EN 301 549 is the procurement baseline (web, documents, software).
- Digdir Designsystem is a baseline library, not a compliance guarantee.
- Product-level accessibility must be implemented (focus, keyboard, screen reader flow).

## Security baseline
- Follow NSM “grunnprinsipper” as the baseline for governance + technical controls.
- Target OWASP ASVS Level 2 for the entire product.
- Secure-by-default: least privilege, tenant isolation, safe defaults on new forms.
- Audit logging must be tamper-resistant (append-only / protected integrity).

## Identity and integrations baseline
- Citizens: ID-porten via OIDC.
- System-to-system: Maskinporten via OAuth2 scopes.
- All APIs must be described by OpenAPI.
- Versioning, idempotency, and traceability per submission are mandatory.

## Privacy baseline
- Data minimization per form type.
- Retention policy per form type + automatic deletion/archiving.
- DPIA trigger evaluation required for:
  - large volumes of personal data
  - children
  - health / social / welfare
  - sensitive categories
  - profiling or systematic monitoring

## Archiving and documentation baseline
- Every submission must be “archive-ready”:
  - metadata
  - attachments
  - receipt
  - immutable reference to “what was sent”
- Must support export/transfer to sak/arkiv and relevant fagsystem.

## Quality and operations baseline
- Define SLOs from day one (uptime, latency, error rate, recovery).
- Observability: structured logs, metrics, tracing, alerts tied to user experience.
- Release control: feature flags, canary for risky changes, safe rollback.

## Definition of Done baseline
Every task is not done unless:
- Accessibility: automated checks + manual keyboard/focus spot-check
- Security: authz verified, input validated, safe errors, secrets handled properly
- Privacy: minimization + retention reviewed if data flow changes
- Tests: updated/added at the correct level
- type-check + lint pass
