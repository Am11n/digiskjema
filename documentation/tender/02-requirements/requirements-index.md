# Requirements Index (Tender)

Denne mappen er “single source of truth” for normaliserte krav som Agent OS skal bruke i specs og tasks.

## Kilder
Originale dokumenter ligger under:
- `documentation/tender/00-source/`

Primær kravkilde:
- Bilag 1 (Kundens kravspesifikasjon)

Besvarelsesformat:
- Bilag 2 (Leverandørens beskrivelse av tjenesten)

## ID-konvensjon
Vi bruker stabile interne krav-IDer:

- `REQ-B1-0001`, `REQ-B1-0002`, … for krav fra Bilag 1
- Alle specs/tasks MÅ referere til minst én REQ-ID.

## Normalisert kravfil
Krav lagres i maskinlesbar form (anbefalt):

- `documentation/tender/02-requirements/requirements.yaml`

Minimum felter per krav:
- `id` (REQ-*)
- `source` (bilag + kapittel + side/rad)
- `type` (A/V/AV)
- `text` (kundens behov/krav)
- `response_requirement` (krav til besvarelse)
- `acceptance_criteria` (konkrete, testbare kriterier)
- `tests` (unit/integration/e2e/a11y)
- `status` (todo/in-progress/done)
- `tags` (auth, uu, security, privacy, archive, logging, integration, …)

## Regler for Agent OS (må følges)
Når Agent OS lager spec eller tasks:

- Specs må ha seksjon “Kravdekning” med tabell:
  - REQ-ID → løsning → akseptansekriterier → test/validering
- Tasks må arve REQ-ID i hver oppgave.
- Ingen implementasjon før kravet er mappet.
- Uklarheter skal samles i “Questions to unblock” og stoppe videre implementasjon.

## Hurtiglinker
- Ekstrahert råutdrag (lesbart): `documentation/tender/01-extracted/bilag-1-krav.md`
- Sporbarhet (krav→spec→tasks→PR): `documentation/tender/03-traceability/traceability-matrix.md`
