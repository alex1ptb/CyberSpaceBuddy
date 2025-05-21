# Cyberspace Buddy - Feature Enhancement Tasklist

This document outlines potential features and improvements for the Cyberspace Buddy application and client portal.

## Client Portal Enhancements

| Priority | Status | Feature Category                    | Description                                                                                                                                                                  |
| -------- | ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High     | [ ]    | Secure Communication & File Sharing | **Direct Messaging/Chat (Project-Specific):** Enhance current messaging to be tied to specific projects. Consider real-time capabilities.                                    |
| High     | [ ]    | Secure Communication & File Sharing | **File Repository:** Dedicated area within each project (or a general client folder) for secure upload/sharing of files (deliverables, contracts, reports). Version control. |
| Medium   | [x]    | Secure Communication & File Sharing | **Direct Messaging/Chat (General):** _Initial mocked version implemented._                                                                                                   |
| Medium   | [ ]    | Enhanced Reporting & Analytics      | **Performance Dashboards (SEO/Social):** Dynamic charts and key metrics (traffic, rankings, engagement, leads) for relevant services.                                        |
| Medium   | [ ]    | Enhanced Reporting & Analytics      | **Customizable Reports:** Ability for clients to generate or view detailed progress reports for active services, potentially with date range filters.                        |
| Medium   | [ ]    | Self-Service & Account Management   | **Profile Management:** Allow clients to update their contact info, company details, and portal notification preferences.                                                    |
| Low      | [ ]    | Self-Service & Account Management   | **Full Billing History:** Comprehensive list of all past invoices, statuses, payment dates, with PDF download options. (Currently shows recent invoices).                    |
| Medium   | [ ]    | Self-Service & Account Management   | **Knowledge Base/Service FAQs:** Searchable library of FAQs, guides, or best practices related to the services they are using.                                               |
| Low      | [ ]    | Collaboration & Feedback            | **Feedback Forms:** Simple forms within project views or after milestone completion for clients to provide structured feedback.                                              |
| Medium   | [ ]    | Collaboration & Feedback            | **Approval Workflows (Simple):** For deliverables (e.g., design mockups, content), a simple "Approve" or "Request Revision" button.                                          |
| High     | [x]    | Notifications & Alerts              | **In-Portal Notifications:** _Initial mocked version for new messages, task changes, invoices implemented._ Enhance with more event types (file uploads, deadlines).         |
| Medium   | [ ]    | Notifications & Alerts              | **Email Digest Options:** Allow clients to choose immediate email notifications or daily/weekly summaries of portal activity.                                                |
| Low      | [ ]    | Service Management (Advanced)       | **View Service Agreements/Contracts:** Easy access to the terms of their ongoing services.                                                                                   |
| Low      | [ ]    | Service Management (Advanced)       | **Upgrade/Downgrade Service (if applicable):** If tiered services or retainers exist, a way for clients to request changes.                                                  |
| Medium   | [x]    | Task & Project Tracking             | **Kanban Board for Projects:** _Initial mocked version implemented._ Consider drag-and-drop functionality.                                                                   |
| Medium   | [x]    | Task & Project Tracking             | **Project Timeline View:** _Initial mocked version implemented._ Enhance with more interactivity or detail.                                                                  |

## Team Portal Enhancements

| Priority | Status | Feature Category        | Description                                                                                                                   |
| -------- | ------ | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| High     | [x]    | Team Portal Foundation  | **Team Portal - Initial Mockup:** Basic login, dashboard with project overview, ticket queue, message summary. _Implemented._ |
| High     | [ ]    | Team Portal Core        | **Team Portal - Full Functionality (Backend Integration):** Connect all team features to a real backend.                      |
| Medium   | [ ]    | Team Project Management | **Detailed Project Management:** Update tasks, milestones, assignees, internal notes, file sharing for team.                  |
| Medium   | [ ]    | Team Support Management | **Support Ticket System:** Full CRUD for tickets, assignment, internal comments, client replies.                              |
| Medium   | [ ]    | Team Communication      | **Client Messaging Interface:** View all client messages, reply, manage communication threads.                                |
| Medium   | [ ]    | Team User Management    | **Client & Team Account Management:** Admin interface to manage client accounts and team member permissions.                  |

## General Application Enhancements

| Priority | Status | Feature Category     | Description                                                                                                                                                       |
| -------- | ------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High     | [ ]    | API Integration      | **Real Backend for Client Portal:** Connect login, projects, tasks, messages, notifications to a database.                                                        |
| Medium   | [ ]    | API Integration      | **Payment Gateway Integration:** Fully implement PayPal or Stripe for `PayInvoicePage`.                                                                           |
| Medium   | [ ]    | API Integration      | **Gemini API for Content Generation:** Integrate `geminiService.ts` into a user-facing feature (e.g., idea generator, content assistant). Requires API key setup. |
| Low      | [~]    | UI/UX                | **Dark Mode Theme:** Implement a user-selectable dark mode for the entire application.                                                                            |
| Medium   | [x]    | UI/UX                | **Responsiveness Audit & Improvements:** Ensure all pages and components are mobile-friendly. _Ongoing improvements._                                             |
| Low      | [ ]    | Accessibility (A11y) | **Comprehensive A11y Audit & Improvements:** Ensure WCAG AA compliance across all components and pages.                                                           |
| Medium   | [ ]    | Performance          | **Code Splitting & Lazy Loading:** Optimize load times for larger pages or features.                                                                              |
| Medium   | [ ]    | Public Site Features | **Careers Page with Job Listings (Mocked):** Display company culture and open positions.                                                                          |

## Billing & Monetization

| Priority | Status | Feature Category   | Description                                                                                                            |
| -------- | ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| High     | [ ]    | Subscription Model | **Subscription Model - Frontend Display:** Update pricing page and CTAs for recurring subscription tiers.              |
| High     | [ ]    | Subscription Model | **Subscription Model - Backend Integration:** Implement user accounts, recurring billing, and subscription management. |

### Notes:

- **Priority:** Can be High, Medium, Low.
- **Status:** `[ ]` for To Do, `[x]` for Implemented (or In Progress if partially done).
- This list is a living document and should be updated as new ideas emerge or priorities shift.
