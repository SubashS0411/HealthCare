Role: You are a Lead Product Designer specializing in MedTech and Luxury Wellness platforms.
Task: Architect the code structure and design a high-end Health & Wellness website (Clinic/Spa/Fitness) consisting of 12 pages.
Design Aesthetic ("Organic Futurism"):
Visual Style: "Zen-Tech." Use a palette of soft whites, cool mints, and iridescent lavenders. Implement "Claymorphism" (soft, inflated 3D shapes) combined with Glassmorphism.
Layout: Fluid, non-grid organic shapes in the background. Smooth parallax scrolling.
Imagery: High-definition photography masked inside organic blobs/shapes.
Animations: Slow, breathing animations (elements that gently expand/contract), smooth fade-ins.
Key Technical Requirement (RTL/LTR):
Global Switch: A prominent toggle in the nav to switch between LTR (English) and RTL (Arabic/Hebrew).
Architecture: Use CSS Logical Properties (e.g., padding-inline-start instead of padding-left) to ensure the layout flips perfectly without broken margins.
Typography: Dynamic font switching (e.g., 'Plus Jakarta Sans' for English, 'Almarai' for Arabic).
Page List & Features:
index.html: Hero with full-screen calming video + glass overlay. "Smart Booking" search bar floating in center.
index2.html: Fitness-focused variant. High energy, bolder typography, diagonal layout lines.
services.html: Accordion-style list with hover-reveal images for treatments (e.g., Cryotherapy, AI Diagnostics).
about.html: "Meet the Doctors" section using 3D carousel cards.
contact.html: Split layout: Contact info on glass card vs. 3D interactive map.
pricing.html: "Wellness Plans." Comparison table with sticky headers.
book-appointment.html: A multi-step wizard (Calendar -> Time -> Details -> Payment).
login.html: Clean, minimal biometric-style login UI (FaceID icon visuals).
admin-dashboard.html: Doctor’s schedule view (Calendar UI), Patient queue list, Revenue widgets.
user-dashboard.html: "My Health Journey" timeline, test results visualization, upcoming appointment cards.
404.html: "Lost in Balance" concept. soothing animation to guide user back.
coming-soon.html: "The Future of Health is Arriving." Email capture with a liquid-fill button effect.
Output: Provide the HTML5 structure, modern CSS (Tailwind preferred with custom config for colors/shadows), and JS for the language toggle and mobile menu.
Part 2: Product Requirements Document (PRD)
Project Name: Vitality.AI - Next Gen Wellness Platform
Niche: Health, Spa, & Medical Fitness
Theme: Bio-Tech / Luxury Minimalist
1. Executive Summary
A premium web platform for a modern health clinic that blends medical expertise with spa-like luxury. The site must serve three distinct functions: converting visitors into patients (Marketing), managing appointments (Booking), and tracking health data (Dashboard). It must be accessible to international audiences via robust RTL support.
2. Target Audience
The Patient: High-net-worth individuals looking for premium care, bio-hacking, or luxury spa treatments.
The Practitioner: Doctors/Trainers needing a quick view of their daily schedule.
The Manager: Clinic admins tracking bookings and cancellations.
3. Design System
Color Palette:
Primary: Sage Green (#8BBF9F) – representing health.
Secondary: Soft Lavender (#E0C3FC) – representing calm/luxury.
Accent: Coral (#FF9F88) – for Call-to-Action buttons.
Base: Porcelain White (#F8FAFC).
UI Components:
Cards: White background with high blur (backdrop-filter: blur(20px)) and soft white borders.
Buttons: Pill-shaped, gradient backgrounds with drop shadows.
Icons: Thin-line medical/wellness icons (phosphor icons).
4. Detailed Page Specifications
A. Public Facing (Marketing)
Index 1 (Clinic Focus):
Hero: "Rejuvenate Your Life." Background is a slow-motion video of water or nature.
Trust: Infinite scroll of partner logos (Insurance/Tech partners).
Testimonials: A horizontal scroller of patient stories.
Index 2 (Fitness Focus):
Hero: Static high-res image of a gym setting with dynamic text appearing.
Stats: Animated counters (e.g., "500+ Transformations").
Services:
Grid layout. Hovering over a service card expands it to show "Duration" and "Price" instantly.
Pricing:
3 Tiers: Recovery, Performance, Ultimate.
The "Ultimate" card should have a subtle shimmering gold border.
Book Appointment:
Step 1: Select Service (Icon grid).
Step 2: Select Doctor/Trainer (Avatar list).
Step 3: Date/Time (Calendar picker). Note: In RTL mode, calendar weeks must flow Right-to-Left.
B. User Experience & Account
Login:
Float label inputs.
Animation: When clicking "Login," the button morphs into a loading spinner.
User Dashboard (Patient Portal):
Vitals Widget: Visual graphs of weight, BMI, or other tracked metrics.
Upcoming Appointments: A countdown timer to the next visit.
History: List of past treatments.
C. Administration
Admin Dashboard:
Overview: "Patients in Waiting Room" counter.
Calendar: Full-day view with drag-and-drop capability for moving appointments.
Revenue: Bar charts showing earnings per service type.
D. Utility
404 Page:
Image: A zen stone stack falling over.
Text: "Alignment Off. Let's get you back on track."
Coming Soon:
Notify Me feature. Background animation of DNA strands or molecular structures.
5. Technical Logic (RTL/LTR)
CSS Variables: Store directions.
--direction: ltr; vs --direction: rtl;
Mirroring:
Back/Next arrows in carousels must flip orientation in RTL.
Form labels align right in RTL, left in LTR.
Flexbox containers must utilize flex-direction: row (which automatically respects text direction) rather than hard-coded positioning.
6. Key Deliverables
Source Code (HTML/CSS/JS).
Asset folder (Placeholder images).
Documentation on how to add new languages.