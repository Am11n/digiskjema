# Accessibility standard (WCAG 2.1 AA minimum)

## Non-negotiables
- Everything must be usable with keyboard only.
- Focus must be visible and predictable.
- Screen reader flow must be coherent for the primary user journey.
- Errors must be understandable and announced.

## Keyboard and focus
- No “div as button”. Use proper elements or accessible components.
- Dialogs/modals/drawers must:
  - trap focus while open
  - restore focus to the triggering element when closed
  - close with Escape where appropriate
- Wizards/step flows must manage focus on step change.

## Labels and form semantics
- Every input must have:
  - a visible label, properly associated, or
  - an accessible name via correct component contract
- Required fields must be indicated in more than color alone.
- Error messages must be linked to the field and announced.

## ARIA
- Use ARIA only when needed.
- No random aria-labels to hide poor semantics.
- Prefer native elements + Digdir design system patterns.

## Content and interaction
- Do not rely on color alone for meaning.
- Ensure adequate contrast.
- Provide clear status messages for submit, save, validation, upload.

## States
Every view that loads remote data must have:
- loading state
- empty state
- error state
All states must be accessible and keyboard navigable.

## Acceptance checks (manual spot-check)
- Navigate entire flow with Tab/Shift+Tab and Enter/Space.
- Verify focus order and no focus loss.
- Use a screen reader for key flows (at least smoke-level).
