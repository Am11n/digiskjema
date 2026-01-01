# Requirements Clustering (Digiskjema Tender)

This document groups tender requirements into logical clusters for delivery planning.

## Cluster Overview

| Cluster Name | REQ-IDs | Description | Delivery Risk | Dependencies |
|---|---|---|---|---|
| **Identity & Authentication** | REQ-B1-0019, REQ-B1-0026, REQ-B1-0030, REQ-B1-0048, REQ-B1-0061, REQ-B1-0072, REQ-B1-0088, REQ-B1-0090 | ID-porten integration, D-number support, authentication flows | Medium | ID-porten, Maskinporten, Entra ID |
| **Authorization & Roles** | REQ-B1-0009, REQ-B1-0011, REQ-B1-0022, REQ-B1-0062, REQ-B1-0063 | Role management, access control, authorization register | Medium | Entra ID, ADFS |
| **Form Lifecycle Management** | REQ-B1-0010, REQ-B1-0016, REQ-B1-0035, REQ-B1-0037, REQ-B1-0110, REQ-B1-0111, REQ-B1-0113, REQ-B1-0114, REQ-B1-0116 | Draft/test/publish/versioning, multi-tenant forms | High | Database schema evolution |
| **Submission Pipeline** | REQ-B1-0020, REQ-B1-0021, REQ-B1-0023, REQ-B1-0024, REQ-B1-0025, REQ-B1-0027, REQ-B1-0028, REQ-B1-0029, REQ-B1-0093 | Form submission, validation, storage, receipt | High | Storage infrastructure |
| **Archiving & Exports** | REQ-B1-0013, REQ-B1-0031, REQ-B1-0042, REQ-B1-0043, REQ-B1-0089, REQ-B1-0090, REQ-B1-0091, REQ-B1-0094 | Sak/arkiv integration, metadata, immutable snapshots | High | Elements integration, API design |
| **Accessibility** | REQ-B1-0003, REQ-B1-0006, REQ-B1-0007, REQ-B1-0032, REQ-B1-0038, REQ-B1-0050, REQ-B1-0052, REQ-B1-0056, REQ-B1-0057, REQ-B1-0065, REQ-B1-0067, REQ-B1-0075, REQ-B1-0082, REQ-B1-0094, REQ-B1-0097, REQ-B1-0101, REQ-B1-0107, REQ-B1-0108, REQ-B1-0110, REQ-B1-0112 | WCAG 2.1 AA, EN 301 549, keyboard navigation | Low | Design system, testing tools |
| **Security Framework** | REQ-B1-0054, REQ-B1-0055, REQ-B1-0056, REQ-B1-0057, REQ-B1-0058, REQ-B1-0059, REQ-B1-0060, REQ-B1-0064, REQ-B1-0066, REQ-B1-0071, REQ-B1-0073, REQ-B1-0074, REQ-B1-0075, REQ-B1-0079, REQ-B1-0080, REQ-B1-0081, REQ-B1-0082, REQ-B1-0094, REQ-B1-0116 | ISMS, certifications, secure development | High | Third-party audits, security tools |
| **Privacy & GDPR** | REQ-B1-0009, REQ-B1-0023, REQ-B1-0024, REQ-B1-0035, REQ-B1-0039, REQ-B1-0083, REQ-B1-0084, REQ-B1-0085, REQ-B1-0086, REQ-B1-0087, REQ-B1-0080 | Data minimization, retention, DPIA, user rights | High | Legal review, privacy impact assessment |
| **Observability & Operations** | REQ-B1-0005, REQ-B1-0010, REQ-B1-0022, REQ-B1-0023, REQ-B1-0050, REQ-B1-0051, REQ-B1-0052, REQ-B1-0053, REQ-B1-0067, REQ-B1-0068, REQ-B1-0069, REQ-B1-0070, REQ-B1-0081, REQ-B1-0082, REQ-B1-0095, REQ-B1-0096, REQ-B1-0107, REQ-B1-0108, REQ-B1-0109, REQ-B1-0110, REQ-B1-0112, REQ-B1-0114 | Logging, monitoring, SLO, alerts | Medium | Monitoring stack, alerting system |
| **SLA & Service Management** | REQ-B1-0005, REQ-B1-0010, REQ-B1-0022, REQ-B1-0023, REQ-B1-0050, REQ-B1-0052, REQ-B1-0095, REQ-B1-0096, REQ-B1-0101, REQ-B1-0102, REQ-B1-0103, REQ-B1-0104, REQ-B1-0105, REQ-B1-0106, REQ-B1-0107, REQ-B1-0108, REQ-B1-0109 | Uptime guarantees, support, incident management | Medium | SLA definition, support processes |
| **Billing & Payments** | REQ-B1-0044, REQ-B1-0046, REQ-B1-0092, REQ-B1-0108 | Payment processing, licensing models | Medium | Vipps integration, billing system |
| **Integration Framework** | REQ-B1-0017, REQ-B1-0018, REQ-B1-0088, REQ-B1-0089, REQ-B1-0090, REQ-B1-0091, REQ-B1-0093, REQ-B1-0094 | External system integrations, API framework | High | API gateway, connector framework |
| **Data Validation & Processing** | REQ-B1-0005, REQ-B1-0033, REQ-B1-0034, REQ-B1-0041, REQ-B1-0044, REQ-B1-0045 | Field validation, conditional logic, calculations | Medium | Validation engine, scripting support |
| **Internationalization** | REQ-B1-0006, REQ-B1-0008 | Norwegian language, multilingual support | Low | Translation management |
| **Reporting & Analytics** | REQ-B1-0050, REQ-B1-0051, REQ-B1-0052, REQ-B1-0053 | Usage statistics, export formats | Medium | Reporting engine |
| **Environmental Sustainability** | REQ-B1-0097, REQ-B1-0098, REQ-B1-0099, REQ-B1-0100 | Green data centers, energy efficiency | Low | Data center partnerships |

## Detailed Cluster Descriptions

### Identity & Authentication (Medium Risk)
**Requirements**: REQ-B1-0019, REQ-B1-0026, REQ-B1-0030, REQ-B1-0048, REQ-B1-0061, REQ-B1-0072, REQ-B1-0088, REQ-B1-0090

This cluster handles citizen and employee authentication, including:
- ID-porten integration for citizens
- D-number/DUF support for foreigners
- Federated authentication (SAML2.0/OpenID Connect)
- Electronic signing via eSignering
- Key/certificate management

**Dependencies**: Requires integration with Digdir services, Entra ID, and certificate authorities.

### Authorization & Roles (Medium Risk)
**Requirements**: REQ-B1-0009, REQ-B1-0011, REQ-B1-0022, REQ-B1-0062, REQ-B1-0063

Manages access control including:
- Role creation/deletion/administration
- Permission assignment and revocation
- Authorization register with audit trail
- Multi-tenant access patterns
- Integration with Altinn authorization

**Dependencies**: Entra ID groups, ADFS integration, role-based access control framework.

### Form Lifecycle Management (High Risk)
**Requirements**: REQ-B1-0010, REQ-B1-0016, REQ-B1-0035, REQ-B1-0037, REQ-B1-0110, REQ-B1-0111, REQ-B1-0113, REQ-B1-0114, REQ-B1-0116

Core form management capabilities:
- Single/multi-tenant form creation
- Draft/testing/publish workflows
- Version control and rollback
- Template management and reuse
- Database schema evolution during upgrades

**Dependencies**: Database migration framework, version control system, testing infrastructure.

### Submission Pipeline (High Risk)
**Requirements**: REQ-B1-0020, REQ-B1-0021, REQ-B1-0023, REQ-B1-0024, REQ-B1-0025, REQ-B1-0027, REQ-B1-0028, REQ-B1-0029, REQ-B1-0093

Handles the complete submission flow:
- Draft saving and continuation
- Form validation and error handling
- Attachment upload and processing
- Receipt generation
- Fullmakt (power of attorney) handling
- Secure transmission to municipal infrastructure

**Dependencies**: Storage systems, validation engines, secure communication channels.

### Archiving & Exports (High Risk)
**Requirements**: REQ-B1-0013, REQ-B1-0031, REQ-B1-0042, REQ-B1-0043, REQ-B1-0089, REQ-B1-0090, REQ-B1-0091, REQ-B1-0094

Ensures compliance with archival requirements:
- Elements (sak/arkiv) integration
- Metadata extraction and preservation
- Immutable submission snapshots
- Export to various formats (CSV/XLSX)
- API-based data retrieval for external systems

**Dependencies**: Elements API, archival standards compliance, data export framework.

### Accessibility (Low Risk)
**Requirements**: REQ-B1-0003, REQ-B1-0006, REQ-B1-0007, REQ-B1-0032, REQ-B1-0038, REQ-B1-0050, REQ-B1-0052, REQ-B1-0056, REQ-B1-0057, REQ-B1-0065, REQ-B1-0067, REQ-B1-0075, REQ-B1-0082, REQ-B1-0094, REQ-B1-0097, REQ-B1-0101, REQ-B1-0107, REQ-B1-0108, REQ-B1-0110, REQ-B1-0112

WCAG 2.1 AA and EN 301 549 compliance:
- Keyboard navigation
- Screen reader support
- Color contrast and visual design
- Alternative text and labels
- Accessible form components

**Dependencies**: Accessibility testing tools, design system components.

### Security Framework (High Risk)
**Requirements**: REQ-B1-0054, REQ-B1-0055, REQ-B1-0056, REQ-B1-0057, REQ-B1-0058, REQ-B1-0059, REQ-B1-0060, REQ-B1-0064, REQ-B1-0066, REQ-B1-0071, REQ-B1-0073, REQ-B1-0074, REQ-B1-0075, REQ-B1-0079, REQ-B1-0080, REQ-B1-0081, REQ-B1-0082, REQ-B1-0094, REQ-B1-0116

Comprehensive security program:
- ISMS certification (ISO 27001)
- Risk assessments and mitigation
- Secure development lifecycle
- Penetration testing and vulnerability management
- Incident response procedures
- Third-party security assessments

**Dependencies**: Security tools, audit processes, compliance frameworks.

### Privacy & GDPR (High Risk)
**Requirements**: REQ-B1-0009, REQ-B1-0023, REQ-B1-0024, REQ-B1-0035, REQ-B1-0039, REQ-B1-0083, REQ-B1-0084, REQ-B1-0085, REQ-B1-0086, REQ-B1-0087, REQ-B1-0080

Privacy by design implementation:
- Data minimization principles
- Retention policies and automatic deletion
- User consent management
- Right to access, rectify, delete data
- Privacy impact assessments (DPIA)
- Cookie and tracking management

**Dependencies**: Legal review, privacy impact assessment framework.

### Observability & Operations (Medium Risk)
**Requirements**: REQ-B1-0005, REQ-B1-0010, REQ-B1-0022, REQ-B1-0023, REQ-B1-0050, REQ-B1-0051, REQ-B1-0052, REQ-B1-0053, REQ-B1-0067, REQ-B1-0068, REQ-B1-0069, REQ-B1-0070, REQ-B1-0081, REQ-B1-0082, REQ-B1-0095, REQ-B1-0096, REQ-B1-0107, REQ-B1-0108, REQ-B1-0109, REQ-B1-0110, REQ-B1-0112, REQ-B1-0114

Monitoring and operational excellence:
- Structured logging and audit trails
- Metrics collection and dashboards
- Alerting and incident management
- Performance monitoring (SLO/SLI)
- System health checks
- Configuration management

**Dependencies**: Monitoring stack (Prometheus, Grafana), logging infrastructure.

### SLA & Service Management (Medium Risk)
**Requirements**: REQ-B1-0005, REQ-B1-0010, REQ-B1-0022, REQ-B1-0023, REQ-B1-0050, REQ-B1-0052, REQ-B1-0095, REQ-B1-0096, REQ-B1-0101, REQ-B1-0102, REQ-B1-0103, REQ-B1-0104, REQ-B1-0105, REQ-B1-0106, REQ-B1-0107, REQ-B1-0108, REQ-B1-0109

Service level commitments:
- Uptime guarantees and compensation
- Response times for incidents
- Norwegian language support
- Customer support processes
- Change management procedures
- Communication protocols

**Dependencies**: SLA definition, support ticket system, escalation procedures.

### Billing & Payments (Medium Risk)
**Requirements**: REQ-B1-0044, REQ-B1-0046, REQ-B1-0092, REQ-B1-0108

Payment processing capabilities:
- Vipps integration (cards and balance)
- Secure payment handling
- Pricing models for single/multi-tenant
- Transaction reporting and reconciliation

**Dependencies**: Payment gateway integration, accounting systems.

### Integration Framework (High Risk)
**Requirements**: REQ-B1-0017, REQ-B1-0018, REQ-B1-0088, REQ-B1-0089, REQ-B1-0090, REQ-B1-0091, REQ-B1-0093, REQ-B1-0094

External system connectivity:
- National registry integrations (folkeregister, enhetsregister)
- Municipal system integrations (Elements, fagsystems)
- API gateway and connector framework
- Pre-fill and validation from external sources
- Secure data exchange protocols

**Dependencies**: API management platform, integration middleware.

### Data Validation & Processing (Medium Risk)
**Requirements**: REQ-B1-0005, REQ-B1-0033, REQ-B1-0034, REQ-B1-0041, REQ-B1-0044, REQ-B1-0045

Business logic and data quality:
- Field-level validation (SSN, email, phone)
- Conditional field display/hiding
- Custom calculations and formulas
- Internal data sources and lookup tables
- Component reuse and templates

**Dependencies**: Validation engine, scripting framework.

### Internationalization (Low Risk)
**Requirements**: REQ-B1-0006, REQ-B1-0008

Language and localization support:
- Norwegian UI and system texts
- Multi-language form support
- Translation management workflow
- Automatic/manual translation options

**Dependencies**: Translation management system, locale handling.

### Reporting & Analytics (Medium Risk)
**Requirements**: REQ-B1-0050, REQ-B1-0051, REQ-B1-0052, REQ-B1-0053

Usage insights and business intelligence:
- Form usage statistics
- Submission volume tracking
- Export to Excel/CSV formats
- API access to analytics data
- Dashboard visualization

**Dependencies**: Reporting engine, data warehouse.

### Environmental Sustainability (Low Risk)
**Requirements**: REQ-B1-0097, REQ-B1-0098, REQ-B1-0099, REQ-B1-0100

Green computing practices:
- Energy-efficient data centers
- Heat recovery and reuse
- Renewable energy sourcing
- EU Code of Conduct compliance

**Dependencies**: Green hosting providers, sustainability reporting.

## Delivery Order Proposal

Based on dependency analysis and criticality:

1. **Must-have (MÅ)** - Core functionality required for MVP:
   - Identity & Authentication
   - Authorization & Roles  
   - Form Lifecycle Management
   - Submission Pipeline
   - Accessibility
   - Security Framework

2. **Should-have** - Important enhancements:
   - Archiving & Exports
   - Privacy & GDPR
   - Integration Framework
   - Observability & Operations

3. **Nice-to-have** - Valuable additions (if tender allows):
   - Billing & Payments
   - Reporting & Analytics
   - Environmental Sustainability
   - SLA & Service Management enhancements

## Questions to Unblock

Pending clarification needed before implementation:

1. **Multi-tenant architecture specifics**: Clarify if single customer can act as "central" coordinator for other municipalities
2. **Elements integration details**: Confirm API specifications and authentication method for sak/arkiv system
3. **Payment processing scope**: Define which payment scenarios are mandatory vs. optional
4. **Support level definition**: Clarify response time expectations for different severity levels
5. **Data retention periods**: Specify legal retention requirements for different form types
6. **Integration timeline**: Confirm availability and stability timelines for national registry APIs