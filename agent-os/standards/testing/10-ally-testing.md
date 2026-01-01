# Accessibility testing playbook (minimum)

## Automated
- Run a11y checks on:
  - form builder core screens
  - form runtime screens (fill + submit)
  - receipt/status screens

## Manual (required spot-check)
- Keyboard-only navigation for:
  - open form, fill fields, navigate steps, submit
  - error states and correction
  - dialogs/drawers focus trap and focus return
- Screen reader smoke-test for the primary flow:
  - headings structure
  - field labels
  - error announcement
  - status messages
