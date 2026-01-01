# Traceability Matrix (Tender → Spec → Tasks → PR/Commit)

Dette dokumentet binder tenderkrav til faktisk leveranse i Digiskjema.

Regel:
- Hver implementert funksjon skal kunne spores til ett eller flere krav (REQ-ID).
- Hver REQ-ID skal ha sporbarhet til spec, tasks og kodeendringer.

## Kolonner
- **REQ-ID**: f.eks. `REQ-B1-0001`
- **Kilde**: bilag/kapittel/side eller tabellrad
- **Type**: A / V / AV
- **Spec**: path til spec under `agent-os/specs/...`
- **Tasks**: task-id eller task-filnavn
- **PR/Commit**: PR-lenke eller commit hash
- **Tester/Validering**: unit/integration/e2e/a11y + hva som dekker kravet
- **Status**: todo / in-progress / done / blocked
- **Notater**: avklaringer, avvik, forbehold

## Matrix
| REQ-ID | Kilde | Type | Spec | Tasks | PR/Commit | Tester/Validering | Status | Notater |
|---|---|---|---|---|---|---|---|---|
| REQ-B1-0001 | Bilag 1 tabell ? rad ? | AV | agent-os/specs/... | TASK-... | abc123 / PR# | e2e + doc | todo |  |

## Oppdateringsrutine
1. Når du lager spec: fyll inn REQ-IDer og spec-path.
2. Når du kjører create-tasks: fyll inn tasks per REQ.
3. Etter implementering: legg inn PR/commit + tester.
4. Før levering: alle REQ må være `done` eller `blocked` med eksplisitt begrunnelse.

## Kvalitetskrav
- Ikke la “Status” stå tom.
- Ikke godkjenn “done” uten test/validering-felt.
- Hvis et krav kun besvares tekstlig (V/AV): referer til riktig dokument (Bilag 2 / spesifikk besvarelse) i kolonnen “Tester/Validering” eller “Notater”.
