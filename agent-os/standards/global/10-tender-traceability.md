# Tender traceability standard (mandatory)

This standard is non-negotiable for this project.
It applies to every feature, spec, task, PR, and delivery document.

## Source of truth
Tender sources in this repo:
- `documentation/tender/00-source/` (original files, immutable)
- `documentation/tender/01-extracted/` (readable extracts)
- `documentation/tender/02-requirements/requirements.yaml` (normalized requirements)
- `documentation/tender/03-traceability/traceability-matrix.md` (REQ → spec → tasks → PR/commit)

The normalized YAML file is the single operational source of truth for requirements.

## Requirement ID rules (hard)
- Every spec MUST reference at least one `REQ-*`.
- Every task MUST reference at least one `REQ-*`.
- No code changes are allowed unless the change is mapped to `REQ-*`.
- If a change cannot be mapped to a requirement, it must be moved to a separate “nice-to-have/backlog” item and excluded from tender scope.

## Spec requirements (mandatory structure)
Every feature spec MUST include a section named:

## Kravdekning

This section MUST contain a table:

| REQ-ID | Type (A/V/AV) | Interpretation (what it means) | Solution approach | Acceptance criteria | Validation/Test | Supplier response reference |
|---|---|---|---|---|---|---|

Rules:
- **REQ-ID** must match `documentation/tender/02-requirements/requirements.yaml`
- **Type** must be A / V / AV (do not invent new types)
- **Acceptance criteria** must be testable and measurable
- **Validation/Test** must be one or more of: unit / integration / e2e / a11y / manual verification / documentation
- **Supplier response reference** must point to the planned/actual tender answer location (Bilag 2)

## Task requirements (mandatory)
Every generated task MUST contain:
- `REQ-*` references (one or more)
- done criteria matching the spec acceptance criteria
- the test/validation type to be executed
- files/modules expected to change

A task without REQ references is invalid.

## V / AV requirements (tender answer is mandatory)
For requirement types **V** and **AV**:
- A written supplier response MUST be produced (not only code).
- The response must be stored as a tender artifact, and referenced from the spec table.

Minimum:
- Create/maintain supplier response notes under:
  - `documentation/tender/04-supplier-responses/`
- Each V/AV requirement must have a “Supplier response reference” pointing to that file/section.
- The response must be consistent with Bilag 2’s structure (requirement-by-requirement answers).

## Traceability matrix updates (mandatory)
When work progresses:
- Spec created → update `traceability-matrix.md` with REQ → spec path
- Tasks created → update with task identifiers
- PR/commit merged → update with PR link/commit hash + validation
- Mark REQ status as: todo / in-progress / done / blocked

No “done” without validation recorded.

## Stop rules (must stop)
Stop and produce “Questions to unblock” if:
- the tender requirement is ambiguous
- requirement text conflicts with another requirement
- required input for a requirement is missing (integration details, legal basis, retention period, etc.)
- implementation would violate Norway baseline standards (UU/security/privacy/identity/archiving/observability)

## Minimum Definition of Done (tender scope)
A requirement is only considered delivered when:
- Spec includes it in “Kravdekning”
- Implementation exists (if applicable)
- Supplier response exists for V/AV (text)
- Validation/tests are executed and recorded
- Traceability matrix row is complete
