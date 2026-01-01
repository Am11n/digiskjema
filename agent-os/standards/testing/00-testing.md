# Testing standard

## Minimum test strategy
- Unit tests:
  - validation logic
  - pure utilities
  - permission checks where possible
- Integration tests:
  - service + repository behavior
  - API contract behavior
  - authorization enforcement
- E2E tests:
  - critical user journeys:
    - authenticate
    - fill form
    - validate errors
    - submit
    - receipt
    - status/insight view
  - include negative cases (forbidden access, invalid input)

## Accessibility testing
- Automated a11y checks for key screens (at least smoke-level).
- Manual keyboard/focus checks required per DoD.

## Security testing expectations
- Tests for authorization boundaries where feasible.
- Negative tests for forbidden operations.
- Input validation tests for critical endpoints.

## Test quality rules
- Tests must be deterministic.
- Avoid time-dependent flakiness.
- Prefer stable selectors for E2E.
