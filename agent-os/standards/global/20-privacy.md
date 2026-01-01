# Privacy standard (GDPR-by-design)

## Data minimization (mandatory)
- Every form type must define exactly which fields are collected and why.
- Do not store “just in case” data.
- Do not repurpose data for new use cases without a new legal basis and design review.

## Data classification
Each feature must classify data:
- no personal data
- personal data (PII)
- sensitive personal data (health, social, etc.)
- children
- large-scale processing
Store classification in the feature spec.

## Retention policy (mandatory)
- Every form type must define retention:
  - store duration
  - auto-deletion or archiving behavior
  - legal/policy reason
- Retention must be implemented as code (jobs, policies), not a document only.

## DPIA triggers (mandatory evaluation)
If any of these apply, the spec must include “DPIA required?” and a decision:
- sensitive categories
- children
- large volume
- systematic monitoring
- profiling
- cross-system linking
- new integrations with broad access

## Access control and transparency
- RBAC/ABAC must prevent unauthorized access across tenants and roles.
- All admin changes to permissions, retention settings, or form publication must be auditable.

## Logging and analytics
- Do not log personal data.
- Use pseudonymous identifiers for analytics.
- Any tracking must be documented and configurable.

## Data subject rights support
Design must allow:
- access/insight (what is stored about the user/submission)
- correction
- deletion/anonymization where applicable
- restriction of processing
- portability/export when required
Implementation must not leak data across tenants during exports.

## Attachments
- Treat attachments as potentially sensitive by default.
- Apply retention and access rules to attachments equally.
- Prefer storing only what is required, for the required time.
