# UI component contract (mandatory for shared components)

Every shared UI component must document:
- props and variants
- keyboard behavior
- focus behavior
- error behavior (if applicable)
- aria usage (if any)

## Requirements
- Accessible by default.
- Works in mobile and desktop.
- Supports i18n (no hardcoded strings inside shared components).
- No hidden side effects (no implicit navigation, no data fetching inside pure UI components).

## Form components
- Must support:
  - label
  - description/help
  - error
  - required indicator
  - disabled
- Must work with validation and announce errors properly.
