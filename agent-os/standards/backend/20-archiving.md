# Archiving and submission object standard

## Archive-ready submission object (mandatory)
A submission must be representable as a single archive-ready object containing:
- submission-id (stable)
- tenant-id and org context
- form-id + form-version (immutable reference)
- timestamp(s)
- submitter identity reference (minimized)
- field payload snapshot (immutable reference)
- attachments metadata + immutable references
- receipt content and receipt id
- status history (submitted, validated, exported, failed, etc.)

## Immutability rules
- “What was sent” must be immutable once submitted.
- Any later updates must be recorded as separate events, not overwriting the original payload.

## Export requirements
- Support a standard export format suitable for sak/arkiv or fagsystem.
- Exports must include:
  - metadata
  - receipt
  - references to attachments
  - form version reference
- Export must not leak cross-tenant data.

## Failure handling
- Export failures must:
  - be visible to operators
  - have retry strategy
  - support manual recovery
- All attempts must be auditable.
