# Identity and integrations standard (national-first)

## Identity
Citizens
- Use ID-porten via OIDC.
- Claims mapping and session model must be documented.
- Logout and session expiry behavior must be explicit.

System-to-system
- Use Maskinporten via OAuth2 scopes.
- Scope-based authorization must be enforced server-side.

## API contracts
- Every API must have an OpenAPI specification.
- Versioning rules:
  - breaking changes require version bump
  - non-breaking changes documented
- Idempotency required for endpoints that create submissions or trigger side effects.
- Traceability:
  - every submission must have a stable submission-id
  - every integration call must carry correlation id

## Integration patterns
- Use explicit contracts for:
  - archive export
  - sak/arkiv
  - fagsystem connectors
- Integration failures must be observable:
  - logs + metrics
  - retry strategy where applicable
  - dead-letter / manual recovery strategy if async

## Data access safety
- Tenant isolation must be enforced in all integration exports.
- Never export more than the contract requires.
