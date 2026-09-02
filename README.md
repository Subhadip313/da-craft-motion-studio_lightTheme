# Da Craft Motion Studio

Build a polished, production-quality, FRONTEND-ONLY static website for “Da Craft Motion”, a premium full-service creative agency in Kolkata. Tagline: “Create | Inspire | Elevate.” Primary conversions: book a free discovery call and start a WhatsApp conversation.

IMPORTANT
- This is the LIGHT-THEME brief. Cream/white must dominate about 85–90% of the experience.
- No database, authentication, CMS, or backend.
- No dark/red theme. Do not introduce unrelated greys, blues, purples, or red.
- Motion must feel cinematic and restrained—not gimmicky.
- Build all requested routes/pages and make every nav item, CTA, filter, accordion, carousel, modal, form state, mobile menu, and back-to-top interaction work.
- Use reusable React/TypeScript components and client-side routing so the generated project remains deployable as a static frontend.
- No lorem ipsum, empty sections, broken links, dead buttons, or “coming soon.”
- Use tasteful high-quality editorial images/video poster imagery suitable for a Kolkata creative studio; provide stable fallbacks and descriptive alt text.

VISUAL DIRECTION
Premium cinematic light editorial design: Design Piñata-like restraint + motion/video-led storytelling. Large typography, disciplined whitespace, clean grids, thin rules, subtle grain, warm color, premium art direction.

Exact palette as tokens:
--white: #FFFFFF
--cream: #FAF3E1 (dominant)
--sand: #F3E9D2
--orange: #F07424
--orange-dim: #C75E19
--orange-tint: #FDE7D3
--ink: #2B241C
--ink-soft: rgba(43,36,28,.70)
--line: rgba(43,36,28,.10)

Use a bold modern grotesk-style sans serif for display headings and a highly readable sans serif for body. Fluid clamp() sizing, generous spacing, editorial max-width container, strong but uncluttered hierarchy. Orange for CTAs/highlights only. White/cream/sand surfaces. A warm ink footer is permitted as a purposeful closing contrast.

GLOBAL EXPERIENCE
- Semantic landmarks and exactly one H1 per route.
- Sticky transparent/light header that becomes a cream/white blurred bar after scrolling.
- Logo/wordmark “DA CRAFT MOTION”; tagline can appear in supporting brand lockup.
- Nav: Home, About, Services, Portfolio, Industries, Testimonials, Contact.
- Primary header CTA: “Book a Free Strategy Call”.
- Mobile hamburger opens a full-screen accessible menu; correct aria-expanded; Escape closes it.
- Persistent but unobtrusive WhatsApp action with aria-label.
- Smooth scrolling and restrained scroll reveal/pinned effects. GSAP/ScrollTrigger + Lenis are allowed if appropriate; respect prefers-reduced-motion.
- Visible focus states, WCAG-conscious orange-on-light contrast, keyboard-accessible tabs/modals, Escape closes modal, focus is trapped and restored.
- Lazy-load below-fold media.
- Global final CTA: “Ready to Elevate Your Brand?” buttons “Book a Call” and “WhatsApp Us”.
- Footer: brand + tagline, sitemap columns Services / Company / Legal, address “1/1, Baghajatin Station Road, Kolkata – 700032”, direct phone/email placeholders that are clearly easy to replace, Instagram/Facebook/LinkedIn/YouTube, newsletter form, current year, Privacy / Terms, and back-to-top.
- Small dismissible cookie banner.
- Unique title/meta description per route; Open Graph/Twitter metadata; LocalBusiness/ProfessionalService JSON-LD; add robots.txt and sitemap.xml; placeholders/comments for GA and Meta Pixel.

ROUTE 1 — HOME (/)
Hero:
eyebrow “FULL-SERVICE CREATIVE AGENCY”
H1 “Creative Content That Grows Your Brand”
subhead “We help businesses stand out through photography, videography, branding, design and social media content that drives engagement and delivers real business growth.”
CTAs “Book a Free Strategy Call” and “Chat on WhatsApp”.
Include muted looping cinematic hero video treatment with strong poster/image fallback, art-directed cream overlay, and bottom scroll cue.

Trusted strip:
“Trusted by brands across industries”
infinite marquee of tasteful placeholder client wordmarks, monochrome/muted at rest and full color/orange-accent on hover.

Services:
label “WHAT WE DO.”
H2 “Every format your brand needs to be seen.”
Numbered cards 01–08:
Photography; Videography; Video Editing; Graphic Design; Social Media Content; Branding; Motion Graphics; Commercial Production.
Each card has a concise useful one-line description and “Learn More →” with draw-underline hover, linking to its Services anchor.

Industries:
Fashion; Real Estate; Food & Restaurants; Hospitality; Retail; Corporate; Healthcare; Education; Startups; E-commerce.
Use an editorial horizontal scroll-snap rail on larger screens and a clean mobile grid. Background photo + readable name overlay. Cards link to matching Industries anchors.

Selected work:
label “SELECTED WORK.”
6–8 image/video editorial tiles.
Filters: All / Photography / Videography / Branding / Social Media.
Animated show/hide fade, hover zoom + caption slide-up, click opens accessible case-study modal/lightbox, CTA “View Full Portfolio →”.

Why choose us:
8-point grid: Creative Strategy; Premium Quality; Fast Delivery; Professional Team; Tailored Solutions; Results-Oriented Approach; Affordable Packages; Dedicated Client Support.

Process:
Discovery Call → Planning → Production → Editing → Delivery → Growth.
Responsive 6-step timeline with a restrained scroll-drawn line and concise explanations.

Stats:
500+ Projects Delivered
100+ Happy Clients
10+ Industries Served
2M+ Social Media Views Generated
Animate once in view; render final values without JS.

Testimonials:
2–3 rotating cards, subtle auto-advance, manual previous/next controls, pause on hover/focus; include client name/company/photo and well-written believable sample quotes clearly presented as portfolio placeholders.

ROUTE 2 — ABOUT (/about)
H1 “About Da Craft Motion”
A concise mission-led introduction.
Agency Story narrative paired with studio image.
Mission / Vision two-column cards on sand.
Core Values icon/grid: Creativity, Integrity, Excellence, Collaboration (add at most two closely relevant values).
“Why Clients Trust Us” reuses the trust checklist and can include a compact team/studio image strip.
Finish with global CTA.

ROUTE 3 — SERVICES (/services)
H1 “Creative services built around your growth.”
Intro plus a numbered services index with anchor links.
Detailed service sections for:
Photography; Videography; Graphic Design; Video Editing; Social Media Content; Commercial Production; Brand Identity; Motion Graphics; Corporate Films.
Each section requires:
- service name + simple icon/number
- original 2–3 sentence description
- “What’s Included” deliverables bullets
- benefits strip
- 3–4 service-specific portfolio thumbnails
- 2–3 Q&A accessible FAQ accordion
- CTA “Get a Quote for [Service]”
Do not make each section excessively tall; use a thoughtful alternating editorial layout and shared/reusable UI.

ROUTE 4 — PORTFOLIO (/portfolio)
H1 “Work made to move people—and metrics.”
Filters exactly:
All / Photography / Videography / Graphic Design / Social Media / Branding / Fashion / Food / Real Estate / Corporate
Create 15 varied masonry/editorial project tiles (within required target 12–18), each with title, client, category/industry, and high-quality media.
Each opens an accessible case-study modal with:
hero image or video treatment; project title; client; industry tag; Challenge → Approach → Result narrative; small previous/next carousel; “Client Outcome” stat where appropriate such as “+40% engagement in 30 days”; and for at least one relevant project a draggable before/after comparison using CSS clip-path/range input.
Filters and modal must work by mouse and keyboard.

ROUTE 5 — INDUSTRIES (/industries)
H1 “Creative built for the way your industry moves.”
Intro plus dedicated/expandable anchored blocks for:
Fashion; Real Estate; Restaurants; Hotels; Retail; Healthcare; Corporate; Education; Manufacturing; E-commerce.
Each has a background/feature image, a short industry-specific paragraph (not generic copy), 2–3 matching work thumbnails, and CTA “See [Industry] Work.”
Use tabs/accordion behavior that is accessible and not cramped on mobile.

ROUTE 6 — TESTIMONIALS (/testimonials)
H1 “What our clients say.”
Intro and full editorial/masonry testimonial grid.
Cards include photo or logo, name, role, company, quote, and optional star rating.
Add 1–2 video-testimonial style tiles with play-on-click overlay and custom “Play” cursor/state; use a safe static placeholder/modal if no actual video is available.
Sample testimonials should sound realistic and concise; label them as representative/placeholder content where appropriate.

ROUTE 7 — BOOKING (/booking)
H1 exactly “Book Your Free Discovery Call.”
Reassurance exactly “15 minutes, zero pressure, real recommendations.”
Use a premium light cream/white form with thin line borders, orange focus states and inline validation.
Fields:
Service Needed (select)
Industry (select)
Preferred Date
Preferred Time
Budget Range (select)
Business Name
Phone Number
Email
Project Details (textarea)
Use frontend-only simulated/static submission with a clearly marked placeholder endpoint/config comment. After a valid submit show a designed success confirmation. Include exact fallback:
“Prefer to talk now? Chat with us on WhatsApp instead.”
Repeat a prominent WhatsApp button near the form.
Do not falsely claim that data was sent to a server.

ROUTE 8 — CONTACT (/contact)
H1 “Let’s make something people remember.”
Split layout.
Left: Name, Email, Phone, Message form, inline validation, frontend-only success state; direct phone/email placeholders and business hours.
Right: responsive map/embed or map-style panel with Kolkata office pin and exact address:
“1/1, Baghajatin Station Road, Kolkata – 700032”
Include WhatsApp button and social row: Instagram, Facebook, LinkedIn, YouTube.

INTERACTIONS / ACCEPTANCE
- Fully responsive at 375, 768, 1024, 1440, 1920px with no horizontal overflow.
- Navigation highlights current route.
- All CTAs route or scroll correctly.
- Portfolio filters animate and produce valid empty-free results.
- Modal closes via button, backdrop, and Escape; traps focus.
- Accordions expose proper aria-expanded/controls.
- Forms validate required inputs inline and success states are truthful for a static demo.
- Carousels have labeled buttons and keyboard support.
- Hover experiences also have focus/touch equivalents.
- prefers-reduced-motion disables nonessential movement.
- Hero video/media must not block first render; fallback must remain attractive.
- Use aspect-ratio to prevent layout shift.
- Test for clean mobile stacking and readable typography.
- Add a polished 404/not-found route that links home, without putting it in primary navigation.

Deliver a complete cohesive site, not a wireframe. Prioritize visual quality, conversion clarity, accessibility, and actual interaction completeness.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/97d3b92e-3001-4eeb-8079-3863eb16f3c9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
