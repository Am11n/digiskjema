# Form lifecycle standard (versioned and auditable)

## Lifecycle states
- Draft
- Test
- Published
- Deprecated
- Unpublished/Archived

## Rules
- Publishing creates an immutable version snapshot.
- Editing a published form creates a new version.
- Submissions must always reference the exact form version used.
- A form version must remain readable for archive, complaint handling, and audits.

## Migration and compatibility
- Draft migration rules must be defined when schema changes.
- Existing submissions must remain viewable even if the form changes later.

## Audit requirements
Audit events must be created for:
- create draft
- publish
- unpublish
- permission changes
- retention changes
- integration mapping changes
