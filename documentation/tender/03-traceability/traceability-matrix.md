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
| REQ-B1-0001 | Bilag 1 / tabell 1 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.1 |  | Supplier response (Bilag 2) | todo | Business flexibility requirement - Modular architecture |
| REQ-B1-0002 | Bilag 1 / tabell 2 / rad 1 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | Supplier response (Bilag 2) | todo | Regulatory update strategy - Risk assessment |
| REQ-B1-0003 | Bilag 1 / tabell 4 / rad 1 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#6.1 | FEAT-UI-CUSTOM-001, PR-1 | a11y testing + Supplier response + Component implementation | done | User interface customization - Accessibility |
| REQ-B1-0004 | Bilag 1 / tabell 4 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#6.1 |  | e2e testing + cross-browser | todo | Responsive design - WCAG compliance |
| REQ-B1-0005 | Bilag 1 / tabell 4 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#3.2 |  | usability testing + Supplier response | todo | Error prevention and guidance - Validation engine |
| REQ-B1-0006 | Bilag 1 / tabell 4 / rad 4 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#6.1 | FEAT-I18N-001, PR-2 | linguistic review + Component implementation | done | Norwegian language requirement - Localization |
| REQ-B1-0007 | Bilag 1 / tabell 4 / rad 5 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#6.1 | FEAT-A11Y-001, PR-3 | WCAG audit + automated testing + Component implementation | done | Universal design compliance - Accessibility |
| REQ-B1-0008 | Bilag 1 / tabell 4 / rad 6 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#6.1 | FEAT-I18N-002, PR-4 | translation workflow testing + Component implementation | done | Multilingual form support - Translation |
| REQ-B1-0009 | Bilag 1 / tabell 5 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.2 |  | security testing + access review | todo | Role management system - Authorization |
| REQ-B1-0010 | Bilag 1 / tabell 6 / rad 1 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.1 | FEAT-MULTITENANT-001, PR-5 | integration testing + Supplier response + Component implementation | done | Single/multi-municipality forms - Multi-tenant |
| REQ-B1-0011 | Bilag 1 / tabell 6 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.2 |  | access control testing | todo | Cross-municipality editing - Permissions |
| REQ-B1-0012 | Bilag 1 / tabell 6 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.2 |  | functional testing | todo | Correct municipality routing - Integration |
| REQ-B1-0013 | Bilag 1 / tabell 6 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.2 |  | integration testing | todo | Per-municipality endpoints - Archive |
| REQ-B1-0014 | Bilag 1 / tabell 6 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.1 | FEAT-BRANDING-001 | visual testing | in-progress | Branding and layout customization - Templates |
| REQ-B1-0015 | Bilag 1 / tabell 6 / rad 6 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.2 | FEAT-COMPONENTS-001 | component testing | in-progress | Shared/restricted components - Libraries |
| REQ-B1-0016 | Bilag 1 / tabell 6 / rad 7 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.1 | FEAT-TEMPLATES-002 | library validation | in-progress | Multi-tenant form library - Templates |
| REQ-B1-0017 | Bilag 1 / tabell 7 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.1 |  | integration testing | todo | Website embedding - Integration |
| REQ-B1-0018 | Bilag 1 / tabell 7 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.1 |  | integration testing | todo | MinSide integration - Integration |
| REQ-B1-0019 | Bilag 1 / tabell 7 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.1 |  | authentication testing | todo | D-number/DUF authentication - Identity |
| REQ-B1-0020 | Bilag 1 / tabell 7 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.2 |  | functional testing | todo | Power of attorney support - Authorization |
| REQ-B1-0021 | Bilag 1 / tabell 7 / rad 5 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.3 |  | eSignature integration testing | todo | Digital signing support - Integration |
| REQ-B1-0022 | Bilag 1 / tabell 7 / rad 6 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.2 |  | integration testing | todo | Altinn authorization integration - Authorization |
| REQ-B1-0023 | Bilag 1 / tabell 7 / rad 7 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#3.1 |  | functional testing | todo | Draft saving and retrieval - Submission |
| REQ-B1-0024 | Bilag 1 / tabell 7 / rad 8 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#3.1 |  | configuration testing | todo | Deletion policy configuration - Submission |
| REQ-B1-0025 | Bilag 1 / tabell 7 / rad 9 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#3.1 |  | functional testing | todo | Form copying functionality - Submission |
| REQ-B1-0026 | Bilag 1 / tabell 7 / rad 10 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#3.1 |  | functional testing | todo | Edit pre-filled fields - Submission |
| REQ-B1-0027 | Bilag 1 / tabell 7 / rad 11 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#3.1 |  | functional testing | todo | Submission confirmation - Submission |
| REQ-B1-0028 | Bilag 1 / tabell 7 / rad 12 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#3.1 |  | file upload testing | todo | Attachment handling - Submission |
| REQ-B1-0029 | Bilag 1 / tabell 7 / rad 13 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 | FEAT-FEEDBACK-001, PR-14 | functional testing + Component implementation | done | User feedback collection - Admin |
| REQ-B1-0030 | Bilag 1 / tabell 7 / rad 14 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#6.1 | FEAT-FORMAT-001 | functional testing | in-progress | Alternative form formats - Accessibility |
| REQ-B1-0031 | Bilag 1 / tabell 7 / rad 15 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 |  | data migration testing | todo | Form import/export - Admin |
| REQ-B1-0032 | Bilag 1 / tabell 7 / rad 16 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.1 | FEAT-FIELDTYPES-001, PR-6 | functional testing + Component implementation | done | Field types and configuration - Form Engine |
| REQ-B1-0033 | Bilag 1 / tabell 7 / rad 17 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.2 | FEAT-VALIDATION-001, PR-7 | validation testing + Component implementation | done | Data validation rules - Form Logic |
| REQ-B1-0034 | Bilag 1 / tabell 7 / rad 18 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.2 | FEAT-CONDITIONAL-001, PR-8 | logic testing + Component implementation | done | Conditional field display - Form Logic |
| REQ-B1-0035 | Bilag 1 / tabell 7 / rad 19 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.1 | FEAT-TEMPLATES-001, PR-9 | template management testing + Component implementation | done | Form template management - Form Engine |
| REQ-B1-0036 | Bilag 1 / tabell 7 / rad 20 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.1 | FEAT-PERFORMANCE-001 | load testing | in-progress | Large scale form handling - Form Engine |
| REQ-B1-0037 | Bilag 1 / tabell 7 / rad 21 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.1 | FEAT-PREVIEW-001, PR-10 | functional testing + Component implementation | done | Form preview capability - Form Engine |
| REQ-B1-0038 | Bilag 1 / tabell 7 / rad 22 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 |  | search functionality testing | todo | Form categorization and search - Admin |
| REQ-B1-0039 | Bilag 1 / tabell 7 / rad 23 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 |  | distribution testing | todo | User list management - Admin |
| REQ-B1-0040 | Bilag 1 / tabell 7 / rad 24 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.1 | FEAT-LAYOUT-001, PR-11 | visual testing + Component implementation | done | Custom form layout - Form Engine |
| REQ-B1-0041 | Bilag 1 / tabell 7 / rad 25 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.2 | FEAT-SCRIPTING-001, PR-12 | script validation testing + Component implementation | done | Custom scripting support - Form Logic |
| REQ-B1-0042 | Bilag 1 / tabell 7 / rad 26 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 |  | export format testing | todo | Data export to file systems - Admin |
| REQ-B1-0043 | Bilag 1 / tabell 7 / rad 27 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.2 |  | integration testing | todo | File system delivery - Integration |
| REQ-B1-0044 | Bilag 1 / tabell 7 / rad 28 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.2 |  | data source testing | todo | Internal data sources - Form Logic |
| REQ-B1-0045 | Bilag 1 / tabell 7 / rad 29 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#2.2 | FEAT-COMPONENTS-002, PR-13 | component reuse testing + Component implementation | done | Field group reuse - Form Logic |
| REQ-B1-0046 | Bilag 1 / tabell 7 / rad 30 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 |  | categorization testing | todo | Form categorization - Admin |
| REQ-B1-0047 | Bilag 1 / tabell 8 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#3.1 |  | functional testing | todo | Internal form support - Submission |
| REQ-B1-0048 | Bilag 1 / tabell 8 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.1 |  | remote access testing | todo | Remote employee access - Identity |
| REQ-B1-0049 | Bilag 1 / tabell 9 / rad 1 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.1 |  | map integration testing | todo | Map service integration - Integration |
| REQ-B1-0050 | Bilag 1 / tabell 10 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 | FEAT-ANALYTICS-001, PR-15 | reporting testing + Component implementation | done | Form usage statistics - Admin |
| REQ-B1-0051 | Bilag 1 / tabell 10 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 | FEAT-EXPORT-001, PR-16 | export testing + Component implementation | done | Statistics export - Admin |
| REQ-B1-0052 | Bilag 1 / tabell 10 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 | FEAT-ADMIN-001, PR-17 | admin interface testing + Component implementation | done | Admin reporting environment - Admin |
| REQ-B1-0053 | Bilag 1 / tabell 10 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.2 |  | API testing | todo | Statistics API - API Layer |
| REQ-B1-0054 | Bilag 1 / tabell 13 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | compliance documentation | todo | Information security management - Security |
| REQ-B1-0055 | Bilag 1 / tabell 13 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | policy documentation | todo | Security goals and strategies - Security |
| REQ-B1-0056 | Bilag 1 / tabell 13 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | risk assessment documentation | todo | Risk assessment process - Security |
| REQ-B1-0057 | Bilag 1 / tabell 13 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | certification documentation | todo | Relevant certifications - Security |
| REQ-B1-0058 | Bilag 1 / tabell 13 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | audit documentation | todo | Audit report provision - Security |
| REQ-B1-0059 | Bilag 1 / tabell 13 / rad 6 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | audit process documentation | todo | Internal revision process - Security |
| REQ-B1-0060 | Bilag 1 / tabell 13 / rad 7 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | subcontractor management | todo | Subcontractor security follow-up - Security |
| REQ-B1-0061 | Bilag 1 / tabell 14 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.1 |  | authentication testing | todo | Federated authentication - Identity |
| REQ-B1-0062 | Bilag 1 / tabell 14 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.2 |  | register functionality testing | todo | Authorization register - Authorization |
| REQ-B1-0063 | Bilag 1 / tabell 14 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#1.2 |  | security testing | todo | Register protection - Authorization |
| REQ-B1-0064 | Bilag 1 / tabell 14 / rad 4 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | security procedure documentation | todo | Remote access security - Security |
| REQ-B1-0065 | Bilag 1 / tabell 14 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | facility documentation | todo | Physical security measures - Security |
| REQ-B1-0066 | Bilag 1 / tabell 14 / rad 6 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | architectural review | todo | Customer data separation - Security |
| REQ-B1-0067 | Bilag 1 / tabell 15 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | logging infrastructure testing | todo | Unauthorized use logging - Security |
| REQ-B1-0068 | Bilag 1 / tabell 15 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | logging functionality testing | todo | Authorized use logging - Security |
| REQ-B1-0069 | Bilag 1 / tabell 15 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | analysis tool integration | todo | Log analysis capabilities - Security |
| REQ-B1-0070 | Bilag 1 / tabell 15 / rad 4 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | security testing | todo | Log integrity protection - Security |
| REQ-B1-0071 | Bilag 1 / tabell 16 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | security architecture review | todo | Data protection mechanisms - Security |
| REQ-B1-0072 | Bilag 1 / tabell 16 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | key management documentation | todo | Cryptographic key handling - Security |
| REQ-B1-0073 | Bilag 1 / tabell 17 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | asset management documentation | todo | Equipment and software oversight - Security |
| REQ-B1-0074 | Bilag 1 / tabell 17 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | change management process | todo | Configuration change process - Security |
| REQ-B1-0075 | Bilag 1 / tabell 17 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | architectural documentation | todo | Technical architecture documentation - Security |
| REQ-B1-0076 | Bilag 1 / tabell 18 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | backup procedure documentation | todo | Regular backups - Security |
| REQ-B1-0077 | Bilag 1 / tabell 18 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | backup security documentation | todo | Backup security measures - Security |
| REQ-B1-0078 | Bilag 1 / tabell 18 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | restore testing documentation | todo | Backup restoration testing - Security |
| REQ-B1-0079 | Bilag 1 / tabell 19 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | threat protection documentation | todo | Security threat protection - Security |
| REQ-B1-0080 | Bilag 1 / tabell 20 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | test data handling documentation | todo | Production data in testing - Security |
| REQ-B1-0081 | Bilag 1 / tabell 21 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | system documentation | todo | Critical system documentation - Operations |
| REQ-B1-0082 | Bilag 1 / tabell 21 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | disaster recovery documentation | todo | Emergency procedures - Operations |
| REQ-B1-0083 | Bilag 1 / tabell 22 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | privacy compliance documentation | todo | GDPR compliance enablement - Privacy |
| REQ-B1-0084 | Bilag 1 / tabell 22 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | privacy principle implementation | todo | Privacy principle adherence - Privacy |
| REQ-B1-0085 | Bilag 1 / tabell 22 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | privacy by design implementation | todo | Built-in privacy - Privacy |
| REQ-B1-0086 | Bilag 1 / tabell 22 / rad 4 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | user rights implementation | todo | Registered person rights - Privacy |
| REQ-B1-0087 | Bilag 1 / tabell 22 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | consent management testing | todo | Privacy statement acceptance - Privacy |
| REQ-B1-0088 | Bilag 1 / tabell 23 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.1 |  | integration testing | todo | National registry integration - Integration |
| REQ-B1-0089 | Bilag 1 / tabell 23 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.2 |  | integration testing | todo | Archive system integration - Integration |
| REQ-B1-0090 | Bilag 1 / tabell 23 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.1 |  | integration testing | todo | External API integration - Integration |
| REQ-B1-0091 | Bilag 1 / tabell 23 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.2 |  | API testing | todo | Internal API framework - API Layer |
| REQ-B1-0092 | Bilag 1 / tabell 23 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.3 |  | payment integration testing | todo | Payment solution support - Integration |
| REQ-B1-0093 | Bilag 1 / tabell 23 / rad 6 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.2 |  | security testing | todo | Secure municipal transfer - Integration |
| REQ-B1-0094 | Bilag 1 / tabell 23 / rad 7 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#4.1 |  | methodology documentation | todo | Integration development methodology - Integration |
| REQ-B1-0095 | Bilag 1 / tabell 24 / rad 1 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | facility documentation | todo | Operational facilities - Operations |
| REQ-B1-0096 | Bilag 1 / tabell 24 / rad 2 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | change notification process | todo | Facility change notification - Operations |
| REQ-B1-0097 | Bilag 1 / tabell 24 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | sustainability documentation | todo | Energy-saving cooling - Operations |
| REQ-B1-0098 | Bilag 1 / tabell 24 / rad 4 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | environmental compliance | todo | Low GWP cooling agents - Operations |
| REQ-B1-0099 | Bilag 1 / tabell 24 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | sustainability metrics | todo | Waste heat reuse - Operations |
| REQ-B1-0100 | Bilag 1 / tabell 24 / rad 6 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | renewable energy metrics | todo | Renewable energy usage - Operations |
| REQ-B1-0101 | Bilag 1 / tabell 25 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 |  | support capability documentation | todo | Competent support team - Admin |
| REQ-B1-0102 | Bilag 1 / tabell 25 / rad 2 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#5.1 | FEAT-I18N-003, PR-18 | language capability confirmation + Component implementation | done | Norwegian support - Admin |
| REQ-B1-0103 | Bilag 1 / tabell 26 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | issue management process | todo | Error handling routines - Operations |
| REQ-B1-0104 | Bilag 1 / tabell 26 / rad 2 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | diagnostic capability confirmation | todo | Diagnostic initiation - Operations |
| REQ-B1-0105 | Bilag 1 / tabell 26 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | communication process | todo | Known issues communication - Operations |
| REQ-B1-0106 | Bilag 1 / tabell 26 / rad 4 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | temporary solution policy | todo | Temporary solutions acceptance - Operations |
| REQ-B1-0107 | Bilag 1 / tabell 27 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | SLA documentation | todo | High availability guarantee - Operations |
| REQ-B1-0108 | Bilag 1 / tabell 27 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | compensation calculation | todo | Availability breach compensation - Operations |
| REQ-B1-0109 | Bilag 1 / tabell 27 / rad 3 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | notification process | todo | Planned downtime notification - Operations |
| REQ-B1-0110 | Bilag 1 / tabell 28 / rad 1 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | version inclusion confirmation | todo | New versions included - Operations |
| REQ-B1-0111 | Bilag 1 / tabell 28 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | upgrade compatibility testing | todo | Custom code preservation - Operations |
| REQ-B1-0112 | Bilag 1 / tabell 28 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#8.1 |  | development methodology | todo | Internal development and testing - Testing |
| REQ-B1-0113 | Bilag 1 / tabell 28 / rad 4 | A | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | compatibility confirmation | todo | Third-party compatibility - Operations |
| REQ-B1-0114 | Bilag 1 / tabell 28 / rad 5 | AV | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | change notification process | todo | Infrastructure change notification - Operations |
| REQ-B1-0115 | Bilag 1 / tabell 28 / rad 6 | V | |  |  |  | blocked | No response requirement specified |
| REQ-B1-0116 | Bilag 1 / tabell 28 / rad 7 | V | agent-os/specs/tender-baseline-plan/spec.md | agent-os/specs/tender-baseline-plan/tasks.md#7.1 |  | maintenance process documentation | todo | Database structure maintenance - Operations |

## Oppdateringsrutine
1. Når du lager spec: fyll inn REQ-IDer og spec-path.
2. Når du kjører create-tasks: fyll inn tasks per REQ.
3. Etter implementering: legg inn PR/commit + tester.
4. Før levering: alle REQ må være `done` eller `blocked` med eksplisitt begrunnelse.

## Kvalitetskrav
- Ikke la “Status” stå tom.
- Ikke godkjenn “done” uten test/validering-felt.
- Hvis et krav kun besvares tekstlig (V/AV): referer til riktig dokument (Bilag 2 / spesifikk besvarelse) i kolonnen “Tester/Validering” eller “Notater”.
