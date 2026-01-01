# Tender Baseline Plan - Shape Document

This document defines the high-level shape and structure of the Digiskjema solution based on tender requirements.

## Executive Summary

Digiskjema is a digital form platform designed to meet Norwegian public sector requirements for secure, accessible, and scalable form handling across single and multi-municipal deployments.

## Solution Vision

A cloud-native, multi-tenant form platform that enables Norwegian municipalities to:
- Create, manage, and deploy digital forms with minimal technical overhead
- Support both citizen-facing and internal employee workflows
- Ensure compliance with Norwegian digital standards (WCAG, NSM, GDPR)
- Provide seamless integration with national registries and municipal systems
- Offer robust security, privacy, and accessibility by default

## Core Architecture Principles

### Multi-Tenant Design
- **Single-tenant mode**: Independent municipality deployment
- **Multi-tenant mode**: Central coordination with distributed ownership
- **Hybrid approach**: Flexible switching between modes
- **Data isolation**: Strict separation between tenants with cryptographic boundaries

### Security First
- Zero-trust architecture for all communications
- End-to-end encryption for sensitive data
- Continuous security monitoring and threat detection
- Compliance with NSM security guidelines and OWASP ASVS Level 2

### Accessibility by Default
- WCAG 2.1 AA compliance built into every component
- EN 301 549 support for public procurement
- Keyboard-first navigation and screen reader optimization
- Continuous accessibility testing in CI/CD pipeline

### Privacy Engineering
- Data minimization at form design level
- Configurable retention policies per form type
- Transparent data processing with user consent management
- Built-in DPIA triggering for high-risk processing

## Key Functional Areas

### 1. Form Builder & Management
**Scope**: REQ-B1-0010, REQ-B1-0032, REQ-B1-0035, REQ-B1-0037, REQ-B1-0040
- Drag-and-drop form designer with reusable components
- Template library for common municipal use cases
- Version control with draft/published workflows
- Preview capabilities across devices and browsers
- Custom HTML/CSS editing for advanced branding

### 2. Identity & Access Management
**Scope**: REQ-B1-0009, REQ-B1-0019, REQ-B1-0061, REQ-B1-0088
- ID-porten integration for citizen authentication
- D-number/DUF support for foreign residents
- Entra ID/ADFS federation for employee access
- Role-based permissions with granular controls
- Authorization register with audit trail

### 3. Submission Processing
**Scope**: REQ-B1-0023, REQ-B1-0027, REQ-B1-0028, REQ-B1-0110
- Auto-save drafts with resume capability
- Real-time validation with user-friendly error messages
- Attachment handling with virus scanning
- Digital signing via eSignering (BankID/Buypass/Commfides)
- Receipt generation and confirmation

### 4. Integration Framework
**Scope**: REQ-B1-0088, REQ-B1-0089, REQ-B1-0090, REQ-B1-0091
- National registry pre-fill (folkeregister, enhetsregister)
- Elements (sak/arkiv) integration for case management
- RESTful APIs for external system connectivity
- Webhook support for real-time notifications
- Standardized data exchange formats

### 5. Administration & Reporting
**Scope**: REQ-B1-0050, REQ-B1-0052, REQ-B1-0101
- Central administration dashboard
- Usage statistics and analytics
- User management and access control
- Norwegian language support for all interfaces
- Multi-level support structure

## Technical Architecture

### Frontend Layer
- **Framework**: React with TypeScript
- **Design System**: Based on Digdir Designsystem with WCAG extensions
- **Build Tool**: Vite for fast development and production builds
- **Deployment**: Static hosting with CDN distribution

### Backend Services
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with tenant isolation
- **Caching**: Redis for session and performance caching
- **Message Queue**: RabbitMQ for async processing
- **Storage**: S3-compatible object storage for attachments

### Infrastructure
- **Cloud Provider**: Azure (Norwegian data centers)
- **Containerization**: Docker with Kubernetes orchestration
- **Monitoring**: Prometheus + Grafana stack
- **Logging**: ELK stack with structured logging
- **Security**: API Gateway with rate limiting and threat protection

### Integration Points
- **ID-porten**: OIDC authentication for citizens
- **Maskinporten**: OAuth2 for system-to-system integration
- **Elements API**: Case management system integration
- **National Registries**: Pre-fill and validation services
- **Payment Providers**: Vipps integration for fee collection

## Deployment Models

### Single Municipality
- Dedicated instance with isolated data
- Full administrative control
- Custom domain and branding
- Independent scaling and maintenance windows

### Multi-Municipality
- Shared infrastructure with tenant isolation
- Central coordination capabilities
- Standardized processes with local customization
- Economies of scale for operations

### Hybrid Approach
- Flexible migration between models
- Gradual adoption path
- Shared services where beneficial
- Independent services where required

## Security Controls

### Identity & Access
- Multi-factor authentication for administrators
- Just-in-time access provisioning
- Session management with automatic timeout
- Privileged access workstations for sensitive operations

### Data Protection
- Encryption at rest and in transit
- Key management with hardware security modules
- Data loss prevention controls
- Regular security assessments and penetration testing

### Network Security
- Private network segmentation
- DDoS protection and mitigation
- Web application firewall
- Intrusion detection and prevention systems

## Compliance Framework

### Norwegian Standards
- **WCAG 2.1 AA**: Web accessibility compliance
- **EN 301 549**: Public procurement accessibility
- **NSM Guidelines**: National cybersecurity center recommendations
- **GDPR**: General Data Protection Regulation compliance

### Industry Standards
- **OWASP ASVS L2**: Application security verification
- **ISO 27001**: Information security management
- **NIST Cybersecurity Framework**: Risk management approach

## Success Metrics

### User Experience
- Form completion rates above 90%
- Average time to submit forms under 5 minutes
- Accessibility audit scores above 95%
- User satisfaction ratings above 4.0/5.0

### Technical Performance
- 99.9% uptime SLA
- Page load times under 2 seconds
- API response times under 500ms
- Zero critical security vulnerabilities

### Operational Excellence
- Mean time to recovery under 30 minutes
- Change failure rate below 15%
- Automated deployment success rate above 95%
- Support ticket resolution within SLA targets

## Risk Mitigation

### Technical Risks
- **Integration complexity**: Pre-built connectors and extensive testing
- **Performance at scale**: Load testing and auto-scaling capabilities
- **Security threats**: Continuous monitoring and incident response
- **Data migration**: Phased approach with rollback capabilities

### Organizational Risks
- **Change management**: Comprehensive training and support programs
- **Adoption resistance**: Stakeholder engagement and pilot programs
- **Resource constraints**: Clear roadmap and prioritization framework
- **Compliance gaps**: Regular audits and compliance monitoring

## Next Steps

1. **Phase 1 - Foundation** (Months 1-3)
   - Core form builder and submission pipeline
   - Basic identity integration
   - Minimum viable security controls
   - Essential accessibility features

2. **Phase 2 - Integration** (Months 4-6)
   - National registry connections
   - Elements system integration
   - Advanced administrative features
   - Comprehensive testing and validation

3. **Phase 3 - Scale** (Months 7-9)
   - Multi-tenant capabilities
   - Performance optimization
   - Advanced reporting and analytics
   - Production readiness assessment

4. **Phase 4 - Optimize** (Months 10-12)
   - Continuous improvement based on feedback
   - Advanced features and customizations
   - Documentation and knowledge transfer
   - Long-term support and maintenance setup