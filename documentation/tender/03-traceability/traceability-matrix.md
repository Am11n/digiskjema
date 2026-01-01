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
| REQ-B1-0001 | Bilag 1 / tabell 1 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | PLAN-TASK-001 |  | Supplier response (Bilag 2) | todo | Business flexibility requirement |
| REQ-B1-0002 | Bilag 1 / tabell 2 / rad 1 | V | agent-os/specs/tender-baseline-plan/spec.md | PLAN-TASK-002 |  | Supplier response (Bilag 2) | todo | Regulatory update strategy |
| REQ-B1-0003 | Bilag 1 / tabell 4 / rad 1 | V | agent-os/specs/tender-baseline-plan/spec.md | UX-TASK-001 |  | a11y testing + Supplier response | todo | User interface customization |
| REQ-B1-0004 | Bilag 1 / tabell 4 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | FEAT-TASK-001 |  | e2e testing + cross-browser | todo | Responsive design |
| REQ-B1-0005 | Bilag 1 / tabell 4 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | UX-TASK-002 |  | usability testing + Supplier response | todo | Error prevention and guidance |
| REQ-B1-0006 | Bilag 1 / tabell 4 / rad 4 | A | agent-os/specs/tender-baseline-plan/spec.md | I18N-TASK-001 |  | linguistic review | todo | Norwegian language requirement |
| REQ-B1-0007 | Bilag 1 / tabell 4 / rad 5 | AV | agent-os/specs/tender-baseline-plan/spec.md | A11Y-TASK-001 |  | WCAG audit + automated testing | todo | Universal design compliance |
| REQ-B1-0008 | Bilag 1 / tabell 4 / rad 6 | AV | agent-os/specs/tender-baseline-plan/spec.md | I18N-TASK-002 |  | translation workflow testing | todo | Multilingual form support |
| REQ-B1-0009 | Bilag 1 / tabell 5 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | AUTH-TASK-001 |  | security testing + access review | todo | Role management system |
| REQ-B1-0010 | Bilag 1 / tabell 6 / rad 1 | V | agent-os/specs/tender-baseline-plan/spec.md | MULTI-TENANT-TASK-001 |  | integration testing + Supplier response | todo | Single/multi-municipality forms |
| REQ-B1-0011 | Bilag 1 / tabell 6 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | ACCESS-TASK-001 |  | access control testing | todo | Cross-municipality editing |
| REQ-B1-0012 | Bilag 1 / tabell 6 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | ROUTING-TASK-001 |  | functional testing | todo | Correct municipality routing |
| REQ-B1-0013 | Bilag 1 / tabell 6 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | ARCHIVE-TASK-001 |  | integration testing | todo | Per-municipality endpoints |
| REQ-B1-0014 | Bilag 1 / tabell 6 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | CUSTOMIZATION-TASK-001 |  | visual testing | todo | Branding and layout customization |
| REQ-B1-0015 | Bilag 1 / tabell 6 / rad 6 | V | agent-os/specs/tender-baseline-plan/spec.md | COMPONENT-TASK-001 |  | component testing | todo | Shared/restricted components |
| REQ-B1-0016 | Bilag 1 / tabell 6 / rad 7 | V | agent-os/specs/tender-baseline-plan/spec.md | LIBRARY-TASK-001 |  | library validation | todo | Multi-tenant form library |
| REQ-B1-0017 | Bilag 1 / tabell 7 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | INTEGRATION-TASK-001 |  | integration testing | todo | Website embedding |
| REQ-B1-0018 | Bilag 1 / tabell 7 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | INTEGRATION-TASK-002 |  | integration testing | todo | MinSide integration |
| REQ-B1-0019 | Bilag 1 / tabell 7 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | IDENTITY-TASK-001 |  | authentication testing | todo | D-number/DUF authentication |
| REQ-B1-0020 | Bilag 1 / tabell 7 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | POWER-TASK-001 |  | functional testing | todo | Power of attorney support |
| REQ-B1-0021 | Bilag 1 / tabell 7 / rad 5 | AV | agent-os/specs/tender-baseline-plan/spec.md | SIGNATURE-TASK-001 |  | eSignature integration testing | todo | Digital signing support |
| REQ-B1-0022 | Bilag 1 / tabell 7 / rad 6 | V | agent-os/specs/tender-baseline-plan/spec.md | ALTINN-TASK-001 |  | integration testing | todo | Altinn authorization integration |
| REQ-B1-0023 | Bilag 1 / tabell 7 / rad 7 | AV | agent-os/specs/tender-baseline-plan/spec.md | DRAFT-TASK-001 |  | functional testing | todo | Draft saving and retrieval |
| REQ-B1-0024 | Bilag 1 / tabell 7 / rad 8 | V | agent-os/specs/tender-baseline-plan/spec.md | RETENTION-TASK-001 |  | configuration testing | todo | Deletion policy configuration |
| REQ-B1-0025 | Bilag 1 / tabell 7 / rad 9 | AV | agent-os/specs/tender-baseline-plan/spec.md | COPY-TASK-001 |  | functional testing | todo | Form copying functionality |
| REQ-B1-0026 | Bilag 1 / tabell 7 / rad 10 | V | agent-os/specs/tender-baseline-plan/spec.md | EDIT-TASK-001 |  | functional testing | todo | Edit pre-filled fields |
| REQ-B1-0027 | Bilag 1 / tabell 7 / rad 11 | AV | agent-os/specs/tender-baseline-plan/spec.md | RECEIPT-TASK-001 |  | functional testing | todo | Submission confirmation |
| REQ-B1-0028 | Bilag 1 / tabell 7 / rad 12 | AV | agent-os/specs/tender-baseline-plan/spec.md | ATTACHMENT-TASK-001 |  | file upload testing | todo | Attachment handling |
| REQ-B1-0029 | Bilag 1 / tabell 7 / rad 13 | V | agent-os/specs/tender-baseline-plan/spec.md | FEEDBACK-TASK-001 |  | functional testing | todo | User feedback collection |
| REQ-B1-0030 | Bilag 1 / tabell 7 / rad 14 | V | agent-os/specs/tender-baseline-plan/spec.md | ALTERNATIVE-TASK-001 |  | functional testing | todo | Alternative form formats |
| REQ-B1-0031 | Bilag 1 / tabell 7 / rad 15 | V | agent-os/specs/tender-baseline-plan/spec.md | IMPORT-TASK-001 |  | data migration testing | todo | Form import/export |
| REQ-B1-0032 | Bilag 1 / tabell 7 / rad 16 | AV | agent-os/specs/tender-baseline-plan/spec.md | FIELD-TASK-001 |  | functional testing | todo | Field types and configuration |
| REQ-B1-0033 | Bilag 1 / tabell 7 / rad 17 | AV | agent-os/specs/tender-baseline-plan/spec.md | VALIDATION-TASK-001 |  | validation testing | todo | Data validation rules |
| REQ-B1-0034 | Bilag 1 / tabell 7 / rad 18 | AV | agent-os/specs/tender-baseline-plan/spec.md | CONDITIONAL-TASK-001 |  | logic testing | todo | Conditional field display |
| REQ-B1-0035 | Bilag 1 / tabell 7 / rad 19 | V | agent-os/specs/tender-baseline-plan/spec.md | TEMPLATE-TASK-001 |  | template management testing | todo | Form template management |
| REQ-B1-0036 | Bilag 1 / tabell 7 / rad 20 | AV | agent-os/specs/tender-baseline-plan/spec.md | SCALE-TASK-001 |  | load testing | todo | Large scale form handling |
| REQ-B1-0037 | Bilag 1 / tabell 7 / rad 21 | AV | agent-os/specs/tender-baseline-plan/spec.md | PREVIEW-TASK-001 |  | functional testing | todo | Form preview capability |
| REQ-B1-0038 | Bilag 1 / tabell 7 / rad 22 | V | agent-os/specs/tender-baseline-plan/spec.md | SEARCH-TASK-001 |  | search functionality testing | todo | Form categorization and search |
| REQ-B1-0039 | Bilag 1 / tabell 7 / rad 23 | V | agent-os/specs/tender-baseline-plan/spec.md | DISTRIBUTION-TASK-001 |  | distribution testing | todo | User list management |
| REQ-B1-0040 | Bilag 1 / tabell 7 / rad 24 | V | agent-os/specs/tender-baseline-plan/spec.md | LAYOUT-TASK-001 |  | visual testing | todo | Custom form layout |
| REQ-B1-0041 | Bilag 1 / tabell 7 / rad 25 | V | agent-os/specs/tender-baseline-plan/spec.md | SCRIPTING-TASK-001 |  | script validation testing | todo | Custom scripting support |
| REQ-B1-0042 | Bilag 1 / tabell 7 / rad 26 | V | agent-os/specs/tender-baseline-plan/spec.md | EXPORT-TASK-001 |  | export format testing | todo | Data export to file systems |
| REQ-B1-0043 | Bilag 1 / tabell 7 / rad 27 | AV | agent-os/specs/tender-baseline-plan/spec.md | DELIVERY-TASK-001 |  | integration testing | todo | File system delivery |
| REQ-B1-0044 | Bilag 1 / tabell 7 / rad 28 | V | agent-os/specs/tender-baseline-plan/spec.md | DATASOURCE-TASK-001 |  | data source testing | todo | Internal data sources |
| REQ-B1-0045 | Bilag 1 / tabell 7 / rad 29 | V | agent-os/specs/tender-baseline-plan/spec.md | REUSE-TASK-001 |  | component reuse testing | todo | Field group reuse |
| REQ-B1-0046 | Bilag 1 / tabell 7 / rad 30 | V | agent-os/specs/tender-baseline-plan/spec.md | CATEGORY-TASK-001 |  | categorization testing | todo | Form categorization |
| REQ-B1-0047 | Bilag 1 / tabell 8 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | INTERNAL-TASK-001 |  | functional testing | todo | Internal form support |
| REQ-B1-0048 | Bilag 1 / tabell 8 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | REMOTE-TASK-001 |  | remote access testing | todo | Remote employee access |
| REQ-B1-0049 | Bilag 1 / tabell 9 / rad 1 | V | agent-os/specs/tender-baseline-plan/spec.md | MAP-TASK-001 |  | map integration testing | todo | Map service integration |
| REQ-B1-0050 | Bilag 1 / tabell 10 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | STATISTICS-TASK-001 |  | reporting testing | todo | Form usage statistics |
| REQ-B1-0051 | Bilag 1 / tabell 10 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | EXPORT-STATS-TASK-001 |  | export testing | todo | Statistics export |
| REQ-B1-0052 | Bilag 1 / tabell 10 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | ADMIN-REPORTING-TASK-001 |  | admin interface testing | todo | Admin reporting environment |
| REQ-B1-0053 | Bilag 1 / tabell 10 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | API-STATS-TASK-001 |  | API testing | todo | Statistics API |
| REQ-B1-0054 | Bilag 1 / tabell 13 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | SECURITY-GOV-TASK-001 |  | compliance documentation | todo | Information security management |
| REQ-B1-0055 | Bilag 1 / tabell 13 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | SECURITY-POLICY-TASK-001 |  | policy documentation | todo | Security goals and strategies |
| REQ-B1-0056 | Bilag 1 / tabell 13 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | RISK-TASK-001 |  | risk assessment documentation | todo | Risk assessment process |
| REQ-B1-0057 | Bilag 1 / tabell 13 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | CERTIFICATION-TASK-001 |  | certification documentation | todo | Relevant certifications |
| REQ-B1-0058 | Bilag 1 / tabell 13 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | AUDIT-TASK-001 |  | audit documentation | todo | Audit report provision |
| REQ-B1-0059 | Bilag 1 / tabell 13 / rad 6 | AV | agent-os/specs/tender-baseline-plan/spec.md | INTERNAL-AUDIT-TASK-001 |  | audit process documentation | todo | Internal revision process |
| REQ-B1-0060 | Bilag 1 / tabell 13 / rad 7 | AV | agent-os/specs/tender-baseline-plan/spec.md | SUBCONTRACTOR-TASK-001 |  | subcontractor management | todo | Subcontractor security follow-up |
| REQ-B1-0061 | Bilag 1 / tabell 14 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | FEDERATED-TASK-001 |  | authentication testing | todo | Federated authentication |
| REQ-B1-0062 | Bilag 1 / tabell 14 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | AUTH-REGISTER-TASK-001 |  | register functionality testing | todo | Authorization register |
| REQ-B1-0063 | Bilag 1 / tabell 14 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | REGISTER-SECURITY-TASK-001 |  | security testing | todo | Register protection |
| REQ-B1-0064 | Bilag 1 / tabell 14 / rad 4 | AV | agent-os/specs/tender-baseline-plan/spec.md | REMOTE-SECURITY-TASK-001 |  | security procedure documentation | todo | Remote access security |
| REQ-B1-0065 | Bilag 1 / tabell 14 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | PHYSICAL-SECURITY-TASK-001 |  | facility documentation | todo | Physical security measures |
| REQ-B1-0066 | Bilag 1 / tabell 14 / rad 6 | AV | agent-os/specs/tender-baseline-plan/spec.md | DATA-SEPARATION-TASK-001 |  | architectural review | todo | Customer data separation |
| REQ-B1-0067 | Bilag 1 / tabell 15 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | LOGGING-TASK-001 |  | logging infrastructure testing | todo | Unauthorized use logging |
| REQ-B1-0068 | Bilag 1 / tabell 15 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | AUTH-LOGGING-TASK-001 |  | logging functionality testing | todo | Authorized use logging |
| REQ-B1-0069 | Bilag 1 / tabell 15 / rad 3 | V | agent-os/specs/tender-baseline-plan/spec.md | LOG-ANALYSIS-TASK-001 |  | analysis tool integration | todo | Log analysis capabilities |
| REQ-B1-0070 | Bilag 1 / tabell 15 / rad 4 | AV | agent-os/specs/tender-baseline-plan/spec.md | LOG-INTEGRITY-TASK-001 |  | security testing | todo | Log integrity protection |
| REQ-B1-0071 | Bilag 1 / tabell 16 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | DATA-PROTECTION-TASK-001 |  | security architecture review | todo | Data protection mechanisms |
| REQ-B1-0072 | Bilag 1 / tabell 16 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | KEY-MGMT-TASK-001 |  | key management documentation | todo | Cryptographic key handling |
| REQ-B1-0073 | Bilag 1 / tabell 17 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | ASSET-TASK-001 |  | asset management documentation | todo | Equipment and software oversight |
| REQ-B1-0074 | Bilag 1 / tabell 17 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | CHANGE-TASK-001 |  | change management process | todo | Configuration change process |
| REQ-B1-0075 | Bilag 1 / tabell 17 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | ARCHITECTURE-TASK-001 |  | architectural documentation | todo | Technical architecture documentation |
| REQ-B1-0076 | Bilag 1 / tabell 18 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | BACKUP-TASK-001 |  | backup procedure documentation | todo | Regular backups |
| REQ-B1-0077 | Bilag 1 / tabell 18 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | BACKUP-SECURITY-TASK-001 |  | backup security documentation | todo | Backup security measures |
| REQ-B1-0078 | Bilag 1 / tabell 18 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | BACKUP-TEST-TASK-001 |  | restore testing documentation | todo | Backup restoration testing |
| REQ-B1-0079 | Bilag 1 / tabell 19 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | THREAT-TASK-001 |  | threat protection documentation | todo | Security threat protection |
| REQ-B1-0080 | Bilag 1 / tabell 20 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | TEST-DATA-TASK-001 |  | test data handling documentation | todo | Production data in testing |
| REQ-B1-0081 | Bilag 1 / tabell 21 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | SYSTEM-DOC-TASK-001 |  | system documentation | todo | Critical system documentation |
| REQ-B1-0082 | Bilag 1 / tabell 21 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | DISASTER-TASK-001 |  | disaster recovery documentation | todo | Emergency procedures |
| REQ-B1-0083 | Bilag 1 / tabell 22 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | PRIVACY-COMPLIANCE-TASK-001 |  | privacy compliance documentation | todo | GDPR compliance enablement |
| REQ-B1-0084 | Bilag 1 / tabell 22 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | PRIVACY-PRINCIPLES-TASK-001 |  | privacy principle implementation | todo | Privacy principle adherence |
| REQ-B1-0085 | Bilag 1 / tabell 22 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | PRIVACY-BY-DEFAULT-TASK-001 |  | privacy by design implementation | todo | Built-in privacy |
| REQ-B1-0086 | Bilag 1 / tabell 22 / rad 4 | AV | agent-os/specs/tender-baseline-plan/spec.md | RIGHTS-TASK-001 |  | user rights implementation | todo | Registered person rights |
| REQ-B1-0087 | Bilag 1 / tabell 22 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | CONSENT-TASK-001 |  | consent management testing | todo | Privacy statement acceptance |
| REQ-B1-0088 | Bilag 1 / tabell 23 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | NATIONAL-REGISTRY-TASK-001 |  | integration testing | todo | National registry integration |
| REQ-B1-0089 | Bilag 1 / tabell 23 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | ARCHIVE-SYSTEM-TASK-001 |  | integration testing | todo | Archive system integration |
| REQ-B1-0090 | Bilag 1 / tabell 23 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | EXTERNAL-API-TASK-001 |  | integration testing | todo | External API integration |
| REQ-B1-0091 | Bilag 1 / tabell 23 / rad 4 | V | agent-os/specs/tender-baseline-plan/spec.md | API-FRAMEWORK-TASK-001 |  | API testing | todo | Internal API framework |
| REQ-B1-0092 | Bilag 1 / tabell 23 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | PAYMENT-TASK-001 |  | payment integration testing | todo | Payment solution support |
| REQ-B1-0093 | Bilag 1 / tabell 23 / rad 6 | V | agent-os/specs/tender-baseline-plan/spec.md | SECURE-TRANSFER-TASK-001 |  | security testing | todo | Secure municipal transfer |
| REQ-B1-0094 | Bilag 1 / tabell 23 / rad 7 | AV | agent-os/specs/tender-baseline-plan/spec.md | INTEGRATION-METHODOLOGY-TASK-001 |  | methodology documentation | todo | Integration development methodology |
| REQ-B1-0095 | Bilag 1 / tabell 24 / rad 1 | A | agent-os/specs/tender-baseline-plan/spec.md | INFRASTRUCTURE-TASK-001 |  | facility documentation | todo | Operational facilities |
| REQ-B1-0096 | Bilag 1 / tabell 24 / rad 2 | A | agent-os/specs/tender-baseline-plan/spec.md | FACILITY-CHANGE-TASK-001 |  | change notification process | todo | Facility change notification |
| REQ-B1-0097 | Bilag 1 / tabell 24 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | ENERGY-EFFICIENCY-TASK-001 |  | sustainability documentation | todo | Energy-saving cooling |
| REQ-B1-0098 | Bilag 1 / tabell 24 / rad 4 | AV | agent-os/specs/tender-baseline-plan/spec.md | COOLING-ENVIRONMENT-TASK-001 |  | environmental compliance | todo | Low GWP cooling agents |
| REQ-B1-0099 | Bilag 1 / tabell 24 / rad 5 | V | agent-os/specs/tender-baseline-plan/spec.md | HEAT-RECOVERY-TASK-001 |  | sustainability metrics | todo | Waste heat reuse |
| REQ-B1-0100 | Bilag 1 / tabell 24 / rad 6 | V | agent-os/specs/tender-baseline-plan/spec.md | RENEWABLE-TASK-001 |  | renewable energy metrics | todo | Renewable energy usage |
| REQ-B1-0101 | Bilag 1 / tabell 25 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | SUPPORT-TASK-001 |  | support capability documentation | todo | Competent support team |
| REQ-B1-0102 | Bilag 1 / tabell 25 / rad 2 | A | agent-os/specs/tender-baseline-plan/spec.md | NORWEGIAN-SUPPORT-TASK-001 |  | language capability confirmation | todo | Norwegian support |
| REQ-B1-0103 | Bilag 1 / tabell 26 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | ISSUE-MGMT-TASK-001 |  | issue management process | todo | Error handling routines |
| REQ-B1-0104 | Bilag 1 / tabell 26 / rad 2 | A | agent-os/specs/tender-baseline-plan/spec.md | DIAGNOSTICS-TASK-001 |  | diagnostic capability confirmation | todo | Diagnostic initiation |
| REQ-B1-0105 | Bilag 1 / tabell 26 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | KNOWN-ISSUES-TASK-001 |  | communication process | todo | Known issues communication |
| REQ-B1-0106 | Bilag 1 / tabell 26 / rad 4 | A | agent-os/specs/tender-baseline-plan/spec.md | TEMP-SOLUTION-TASK-001 |  | temporary solution policy | todo | Temporary solutions acceptance |
| REQ-B1-0107 | Bilag 1 / tabell 27 / rad 1 | AV | agent-os/specs/tender-baseline-plan/spec.md | AVAILABILITY-TASK-001 |  | SLA documentation | todo | High availability guarantee |
| REQ-B1-0108 | Bilag 1 / tabell 27 / rad 2 | AV | agent-os/specs/tender-baseline-plan/spec.md | COMPENSATION-TASK-001 |  | compensation calculation | todo | Availability breach compensation |
| REQ-B1-0109 | Bilag 1 / tabell 27 / rad 3 | A | agent-os/specs/tender-baseline-plan/spec.md | DOWNTIME-NOTICE-TASK-001 |  | notification process | todo | Planned downtime notification |
| REQ-B1-0110 | Bilag 1 / tabell 28 / rad 1 | A | agent-os/specs/tender-baseline-plan/spec.md | VERSION-INCLUSION-TASK-001 |  | version inclusion confirmation | todo | New versions included |
| REQ-B1-0111 | Bilag 1 / tabell 28 / rad 2 | V | agent-os/specs/tender-baseline-plan/spec.md | CUSTOM-CODE-TASK-001 |  | upgrade compatibility testing | todo | Custom code preservation |
| REQ-B1-0112 | Bilag 1 / tabell 28 / rad 3 | AV | agent-os/specs/tender-baseline-plan/spec.md | DEVELOPMENT-PROCESS-TASK-001 |  | development methodology | todo | Internal development and testing |
| REQ-B1-0113 | Bilag 1 / tabell 28 / rad 4 | A | agent-os/specs/tender-baseline-plan/spec.md | COMPATIBILITY-TASK-001 |  | compatibility confirmation | todo | Third-party compatibility |
| REQ-B1-0114 | Bilag 1 / tabell 28 / rad 5 | AV | agent-os/specs/tender-baseline-plan/spec.md | INFRASTRUCTURE-CHANGE-TASK-001 |  | change notification process | todo | Infrastructure change notification |
| REQ-B1-0115 | Bilag 1 / tabell 28 / rad 6 | V | |  |  |  | blocked | No response requirement specified |
| REQ-B1-0116 | Bilag 1 / tabell 28 / rad 7 | V | agent-os/specs/tender-baseline-plan/spec.md | DATABASE-MAINTENANCE-TASK-001 |  | maintenance process documentation | todo | Database structure maintenance |

## Oppdateringsrutine
1. Når du lager spec: fyll inn REQ-IDer og spec-path.
2. Når du kjører create-tasks: fyll inn tasks per REQ.
3. Etter implementering: legg inn PR/commit + tester.
4. Før levering: alle REQ må være `done` eller `blocked` med eksplisitt begrunnelse.

## Kvalitetskrav
- Ikke la “Status” stå tom.
- Ikke godkjenn “done” uten test/validering-felt.
- Hvis et krav kun besvares tekstlig (V/AV): referer til riktig dokument (Bilag 2 / spesifikk besvarelse) i kolonnen “Tester/Validering” eller “Notater”.
