# Design Guide & Style Guide: Cyberspace Buddy

## 1. Introduction

- **Purpose:** This document outlines the visual design standards, UI components, and UX principles for the Cyberspace Buddy platform. It aims to ensure consistency and a high-quality user experience across all parts of the application.
- **Scope:** Covers the public website, Client Portal, and Team Portal.
- **Audience:** Designers, Developers, Product Managers.

## 2. Design Principles

- **Clarity:** Information should be presented clearly and unambiguously. Users should always know where they are and what to do next.
- **Simplicity:** Avoid unnecessary complexity. Strive for intuitive interfaces that are easy to learn and use.
- **Consistency:** UI elements, terminology, and interaction patterns should be consistent throughout the application.
- **Efficiency:** Enable users to accomplish tasks quickly and with minimal effort.
- **Professionalism & Trust:** The design should evoke a sense of reliability, expertise, and trustworthiness.
- **Accessibility:** Design for inclusivity, ensuring the application is usable by people with a wide range of abilities.

## 3. Branding

- **Logo:**
  - Primary Logo: (Link to or embed SVG/PNG of the SparklesIcon or official logo)
  - Usage Guidelines: Minimum size, clear space, approved color variations.
- **Brand Voice & Tone:**
  - Professional, helpful, empowering, tech-savvy yet approachable.
  - Avoid overly technical jargon when communicating with clients.

## 4. Typography

- **Primary Font Family:** System UI fonts (default Tailwind CSS stack: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`)
  - _Rationale:_ Ensures good readability and performance across devices without external font loading.
- **Headings (h1-h6):**
  - `h1`: `text-4xl` (sm: `text-5xl`, md: `text-6xl`) `font-extrabold`
  - `h2`: `text-3xl` (sm: `text-4xl`) `font-extrabold` (or `font-semibold`)
  - `h3`: `text-xl` (sm: `text-2xl`) `font-semibold`
  - `h4`: `text-lg` (sm: `text-xl`) `font-semibold` (or `font-medium`)
- **Body Text:** `text-base` (sm: `text-sm` for some secondary text, `text-lg` for prominent paragraphs) `text-gray-700` or `text-gray-800`.
- **Line Height:** `leading-relaxed` or `leading-normal` depending on context.
- **Links:** Typically `text-blue-600 hover:text-blue-700` (or `hover:underline`).

## 5. Color Palette

- **Primary Colors:**
  - Blue (Brand Primary):
    - `bg-blue-600` (Tailwind `blue-600`) - Main actions, accents
    - `bg-blue-700` (Tailwind `blue-700`) - Hover states, darker accents
    - `text-blue-600`
  - Indigo (Brand Secondary/Gradient):
    - `bg-indigo-700` (Tailwind `indigo-700`) - Gradients, accents
- **Secondary/Accent Colors:**
  - Yellow/Orange (Highlight/CTA):
    - `bg-yellow-400`, `bg-yellow-500`
    - `text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text`
  - Green (Success, Positive Status):
    - `bg-green-500`, `text-green-700`, `bg-green-100` (alerts, indicators)
  - Red (Error, Urgent, Warnings):
    - `bg-red-500`, `text-red-700`, `bg-red-100` (alerts, indicators)
- **Neutral Colors (Grays):**
  - Backgrounds: `bg-gray-50`, `bg-gray-100` (page), `bg-white` (cards, modals)
  - Text: `text-gray-900` (headings), `text-gray-800`, `text-gray-700` (body), `text-gray-600`, `text-gray-500` (secondary text, placeholders)
  - Borders/Dividers: `border-gray-200`, `border-gray-300`
- **Usage:**
  - Maintain sufficient contrast ratios for accessibility.
  - Use accent colors sparingly for emphasis.

## 6. Iconography

- **Icon Set:** Heroicons (as currently implemented via SVG components).
- **Style:** Outline style, `strokeWidth={1.5}`.
- **Size:**
  - Standard: `w-6 h-6` or `w-5 h-5`.
  - Small: `w-4 h-4`.
  - Large: `w-8 h-8` or `w-10 h-10`.
- **Color:** Typically `currentColor` to inherit text color, or specific brand colors (e.g., `text-blue-600`).
- **Usage:** Use icons to enhance understanding, provide visual cues, and improve scannability. Do not rely on icons alone without text labels for critical actions.

## 7. Layout & Spacing

- **Grid System:** Tailwind CSS responsive grid (`grid`, `grid-cols-*`).
- **Container:** `container mx-auto px-4 sm:px-6 lg:px-8`.
- **Spacing Scale (Tailwind):** Consistent use of Tailwind's spacing scale (`p-*, m-*, space-x-*, space-y-*`) for margins, padding, and gaps.
  - Example common spacings: `0.25rem (1)`, `0.5rem (2)`, `0.75rem (3)`, `1rem (4)`, `1.5rem (6)`, `2rem (8)`.
- **Responsive Breakpoints (Tailwind defaults):**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

## 8. UI Components (Key Examples)

_(Refer to existing components in `components/` directory. This section would detail their standard appearance and behavior.)_

- **Buttons:**
  - Primary CTA: `bg-blue-600 text-white hover:bg-blue-700`
  - Secondary CTA: `bg-white text-blue-700 border border-blue-600 hover:bg-blue-50` or `text-blue-600 hover:underline`
  - Destructive: `bg-red-600 text-white hover:bg-red-700`
  - Disabled: `bg-gray-400 text-gray-700 cursor-not-allowed`
  - Padding, font size, rounded corners (`rounded-md`).
- **Forms & Inputs:**
  - Standard inputs: `px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`
  - Labels: `block text-sm font-medium text-gray-700`
  - Error states: `border-red-500 text-red-700`
  - Help text/Validation messages.
- **Cards:**
  - `bg-white rounded-xl shadow-lg` or `shadow-md`.
  - Consistent padding (`p-6`).
- **Modals:**
  - Centered overlay (`bg-black bg-opacity-50`).
  - Content area: `bg-white rounded-lg shadow-xl p-6`.
  - Clear close button.
- **Navigation (Navbar):**
  - Sticky, clear branding, responsive mobile menu.
  - Active link indication.
- **Tables (Team Portal):**
  - Clear headers, alternating row colors (optional), responsive handling for smaller screens (e.g., horizontal scroll or card layout).
- **Kanban Board:**
  - Visually distinct columns, clear task cards.
- **Timeline:**
  - Clear visual progression, status indicators for milestones.

## 9. Accessibility (A11y)

- **Color Contrast:** Ensure text has sufficient contrast against its background (WCAG AA: 4.5:1 for normal text, 3:1 for large text).
- **Keyboard Navigation:** All interactive elements must be focusable and operable via keyboard.
  - Visible focus indicators (`focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`).
- **Semantic HTML:** Use appropriate HTML5 tags (`<nav>`, `<main>`, `<aside>`, `<article>`, `<button>`, etc.).
- **ARIA Attributes:** Use ARIA (Accessible Rich Internet Applications) attributes where necessary to provide context for assistive technologies (e.g., `aria-label`, `aria-expanded`, `role`).
- **Image Alt Text:** Provide descriptive `alt` text for all meaningful images.
- **Form Labels:** Ensure all form inputs have associated labels.

## 10. User Flows (Examples - to be detailed with diagrams/mockups)

- **New Client Onboarding:** From visiting website -> Request Consultation -> (Backend: Proposal) -> Client Portal Access.
- **Client Project Tracking:** Login -> Dashboard -> Select Project -> View Tasks/Timeline.
- **Client Submitting Support Ticket:** Login/Website -> Submit Ticket Form -> Confirmation.
- **Team Member Managing Tasks:** Login -> Team Dashboard -> Select Project -> Update Task Status.

## 11. Animation & Microinteractions

- **Transitions:** `transition-colors`, `transition-transform` for hover effects and subtle feedback.
- **Loading States:** Use `LoadingSpinner` component.
- **Feedback:** Visual feedback for actions (e.g., button press, form submission success/error).
- _Goal:_ Enhance user experience without being distracting or impacting performance.

## 12. Review and Updates

- This guide is a living document and should be reviewed and updated regularly as the platform evolves.
