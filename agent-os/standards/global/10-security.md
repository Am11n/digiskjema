# Security standard (NSM baseline + OWASP ASVS L2 target)

## Core principles
- Least privilege everywhere (users, services, database).
- Tenant isolation must be enforced server-side on every data access path.
- Defense in depth: validate at boundaries, safe defaults, secure headers.

## Authentication and sessions
- Use OIDC/OAuth2 correctly. No homegrown auth.
- Session lifetime must be defined and enforced.
- Logout must invalidate tokens/sessions server-side where applicable.
- If cookies are used: CSRF protection is mandatory.
- Multi-factor support must not reduce accessibility.

## Authorization
- All authorization must be server-enforced.
- UI “hiding” is not authorization.
- RBAC/ABAC rules must be explicit and testable.
- Admin operations must require elevated permissions and produce audit logs.

## Input validation and output safety
- Validate inputs server-side for every API.
- Use allow-lists for enums and constrained fields.
- Output encoding must prevent XSS in any rendered content.
- File uploads must be validated:
  - allowed types
  - max size
  - virus/malware scanning strategy (if in scope)
  - storage isolation per tenant

## Error handling
- Never expose stack traces or internal details to clients.
- Use safe, user-friendly error messages in UI.
- Log technical details server-side using structured logging.
- Do not log personal data.

## Secrets and configuration
- Secrets only via environment/secret manager.
- Never commit secrets to repo.
- Rotate keys and credentials via operational procedure.

## API and transport security
- Enforce TLS everywhere.
- CORS must be restrictive and explicit.
- Rate limiting and abuse prevention are required for public endpoints.
- Idempotency required for submission APIs and other side-effect endpoints.

## Audit logging (mandatory for sensitive operations)
Audit events must include:
- who (subject, role, tenant)
- what (action, target type/id)
- when (timestamp)
- where (request id, correlation id, ip if allowed)
- outcome (success/failure)
- change summary (before/after references where appropriate)

Audit log integrity
- Must be append-only or otherwise protected against tampering.
- Must be queryable for compliance and incident response.

## Security testing expectations
- Add tests for authorization rules where feasible.
- Add negative tests for forbidden actions.
- Threat model changes for high-risk features (auth, submission, attachments, admin).
