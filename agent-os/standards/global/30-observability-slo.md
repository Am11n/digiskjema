# SLO and observability standard

## SLOs (must be defined early)
Every core capability must define targets for:
- availability (uptime)
- latency (p95 / p99 for key endpoints)
- error rate
- time to recovery (MTTR-style target)

Start with simple, measurable targets and evolve.

## Observability (mandatory)
Logs
- structured logging (JSON)
- include request id + correlation id
- do not log personal data
- log security-relevant events (auth failures, forbidden actions, admin changes)

Metrics
- request rates, latency, error rate per endpoint
- submission pipeline metrics (received, validated, stored, archived, failed)
- queue/job metrics if async processing exists

Tracing
- distributed tracing for submission flow and integration calls
- include correlation id across services

Alerts
- tie alerts to user impact:
  - elevated error rates on submit
  - degraded latency on critical APIs
  - spikes in auth failures
  - integration failures (archive export, id-porten, etc.)

## Release control
- Feature flags required for risky features (new form runtime, new integrations).
- Canary strategy recommended for core runtime changes.
- Safe rollback plan required for any breaking migration or new pipeline step.

## Incident readiness
- Runbooks for:
  - submission failures
  - integration outage
  - auth outage
  - data access incident
- Audit log must support investigation.
