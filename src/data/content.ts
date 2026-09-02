import heroStudio from "@/assets/hero-studio.jpg";
import studioTeam from "@/assets/studio-team.jpg";
import workFashion from "@/assets/work-fashion.jpg";
import workFood from "@/assets/work-food.jpg";
import workRealEstate from "@/assets/work-realestate.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workBranding from "@/assets/work-branding.jpg";
import workSocial from "@/assets/work-social.jpg";
import workMotion from "@/assets/work-motion.jpg";
import workEditing from "@/assets/work-editing.jpg";
import workProduct from "@/assets/work-product.jpg";
import indHospitality from "@/assets/ind-hospitality.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indEducation from "@/assets/ind-education.jpg";
import indEcommerce from "@/assets/ind-ecommerce.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indStartups from "@/assets/ind-startups.jpg";
import indRestaurant from "@/assets/ind-restaurant.jpg";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";
import person4 from "@/assets/person-4.jpg";

export const IMAGES = {
  heroStudio,
  studioTeam,
  workFashion,
  workFood,
  workRealEstate,
  workCorporate,
  workBranding,
  workSocial,
  workMotion,
  workEditing,
  workProduct,
  indHospitality,
  indRetail,
  indHealthcare,
  indEducation,
  indEcommerce,
  indManufacturing,
  indStartups,
  indRestaurant,
};

export const HERO_MEDIA = {
  type: "image" as "image" | "video",
  src: heroStudio,
  alt: "Da Craft Motion crew preparing a creative shoot in the studio",
  videoSrc: "",
  poster: heroStudio,
};

/* ---------------------------------------------------------------- services */

export type HomeService = {
  num: string;
  title: string;
  blurb: string;
  anchor: string;
};

export const HOME_SERVICES: HomeService[] = [
  {
    num: "01",
    title: "Photography",
    blurb: "Campaign, product and lifestyle frames shot for how your brand actually sells.",
    anchor: "photography",
  },
  {
    num: "02",
    title: "Videography",
    blurb: "Story-first shoots with cinema-grade lighting, sound and direction on location.",
    anchor: "videography",
  },
  {
    num: "03",
    title: "Video Editing",
    blurb: "Sharp cuts, colour grading and sound design that hold attention past three seconds.",
    anchor: "video-editing",
  },
  {
    num: "04",
    title: "Graphic Design",
    blurb: "Print, packaging and digital layouts built on a consistent visual system.",
    anchor: "graphic-design",
  },
  {
    num: "05",
    title: "Social Media Content",
    blurb: "Monthly reel and static packages planned around a real content calendar.",
    anchor: "social-media-content",
  },
  {
    num: "06",
    title: "Branding",
    blurb: "Naming support, logo systems and guidelines that survive contact with reality.",
    anchor: "brand-identity",
  },
  {
    num: "07",
    title: "Motion Graphics",
    blurb: "Animated logos, explainers and lower-thirds that make information move.",
    anchor: "motion-graphics",
  },
  {
    num: "08",
    title: "Commercial Production",
    blurb: "End-to-end ad films from script and casting through delivery-ready masters.",
    anchor: "commercial-production",
  },
];

export type ServiceDetail = {
  id: string;
  num: string;
  title: string;
  description: string;
  included: string[];
  benefits: string[];
  gallery: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "photography",
    num: "01",
    title: "Photography",
    description:
      "We photograph brands the way a magazine would: art-directed, lit with intent and edited to a single consistent look. Every shoot starts with a shot list tied to where the images will actually run — website, catalogue, storefront or feed. You receive files sized and retouched for each of those places.",
    included: [
      "Pre-production moodboard and shot list",
      "Studio or on-location lighting crew",
      "Product, lifestyle, campaign and portrait coverage",
      "Colour-matched retouching on selected frames",
      "Web, print and social crops delivered together",
    ],
    benefits: ["Consistent visual language", "Faster catalogue launches", "Higher click-through on listings"],
    gallery: [
      { src: workFashion, alt: "Fashion campaign portrait shot on a warm studio backdrop" },
      { src: workProduct, alt: "Premium wristwatch photographed on a cream pedestal" },
      { src: workFood, alt: "Restaurant dish styled and photographed in natural window light" },
      { src: workRealEstate, alt: "Sunlit luxury apartment interior photographed for a listing" },
    ],
    faqs: [
      {
        q: "How many final images do we receive?",
        a: "A half-day shoot typically delivers 25–40 fully retouched frames; a full day delivers 60–90. The exact count is fixed in the quote before we shoot.",
      },
      {
        q: "Do you provide models, stylists and props?",
        a: "Yes. Casting, styling, props and location permissions can all be handled by us and billed transparently as production costs.",
      },
      {
        q: "How quickly are photos delivered?",
        a: "Selects go out within 48 hours and the retouched set within 5–7 working days. Rush delivery is available.",
      },
    ],
  },
  {
    id: "videography",
    num: "02",
    title: "Videography",
    description:
      "From a founder interview to a multi-day brand film, we handle direction, camera, lighting and sound in-house. We plan for the platform first, so a shoot produces a hero cut plus vertical variants instead of one file that fits nowhere.",
    included: [
      "Concept, script and shooting board",
      "Cinema camera, lighting and audio package",
      "Director, DOP and on-set producer",
      "Hero edit plus vertical and square variants",
      "Licensed music and sound mix",
    ],
    benefits: ["Platform-ready cutdowns", "Higher watch-through", "One shoot, months of assets"],
    gallery: [
      { src: workCorporate, alt: "Corporate interview being filmed with two cameras in an office" },
      { src: heroStudio, alt: "Production crew setting up lights around a cinema camera" },
      { src: indRestaurant, alt: "Warm restaurant interior prepared for an evening video shoot" },
    ],
    faqs: [
      {
        q: "Do you shoot outside Kolkata?",
        a: "Regularly. Travel and stay for the crew are quoted separately and approved by you in advance.",
      },
      {
        q: "Can you work with our existing script?",
        a: "Absolutely. We will review it, flag anything that will be hard to shoot, and build the board around your words.",
      },
    ],
  },
  {
    id: "graphic-design",
    num: "03",
    title: "Graphic Design",
    description:
      "Design work that is systematic rather than decorative. We build type scales, grids and colour rules once, then apply them across everything from a hoarding to a pitch deck so your brand looks like one company.",
    included: [
      "Print collateral: brochures, menus, hoardings",
      "Packaging and label artwork with print-ready files",
      "Pitch decks and sales one-pagers",
      "Ad creatives sized per platform",
      "Editable source files handed over",
    ],
    benefits: ["Consistent brand system", "Press-ready artwork", "Faster campaign turnarounds"],
    gallery: [
      { src: workBranding, alt: "Brand stationery and business card mockups in cream and orange" },
      { src: workSocial, alt: "Phone showing a designed social media grid" },
      { src: indEcommerce, alt: "Skincare product range styled for packaging design reference" },
    ],
    faqs: [
      {
        q: "How many revision rounds are included?",
        a: "Two structured rounds per deliverable. Extra rounds are billed hourly and always confirmed with you first.",
      },
      {
        q: "Do we get the working files?",
        a: "Yes — layered source files and exported print/web formats are handed over at project close.",
      },
    ],
  },
  {
    id: "video-editing",
    num: "04",
    title: "Video Editing",
    description:
      "Send us footage, get back something people finish watching. We handle assembly, pacing, colour, subtitles and sound design, and we cut specifically for the platform each version will live on.",
    included: [
      "Story assembly and pacing pass",
      "Colour correction and grade",
      "Sound design, mix and licensed music",
      "Burned-in or SRT subtitles",
      "Vertical, square and landscape masters",
    ],
    benefits: ["Retention-focused pacing", "Consistent look across episodes", "Quick weekly turnarounds"],
    gallery: [
      { src: workEditing, alt: "Editor grading footage in a warm-lit edit suite" },
      { src: workMotion, alt: "Motion design timeline open on a studio monitor" },
      { src: workCorporate, alt: "Corporate interview footage being reviewed on set" },
    ],
    faqs: [
      {
        q: "Can you edit footage we shot ourselves?",
        a: "Yes. We will run a quick technical review of your files first and tell you honestly what the footage can support.",
      },
      {
        q: "What is a typical turnaround?",
        a: "Short-form reels in 2–3 working days, long-form films in 7–10, depending on volume.",
      },
    ],
  },
  {
    id: "social-media-content",
    num: "05",
    title: "Social Media Content",
    description:
      "A monthly content engine rather than one-off posts. We plan a calendar around your offers and seasons, shoot in efficient batches, then deliver ready-to-publish reels, carousels and statics with captions.",
    included: [
      "Monthly content calendar and hooks",
      "Batch shoot day for reels and statics",
      "12–30 finished assets per month",
      "Captions, hashtags and posting schedule",
      "Monthly performance readout",
    ],
    benefits: ["Always-on presence", "Lower cost per asset", "Clear monthly reporting"],
    gallery: [
      { src: workSocial, alt: "Content creator reviewing a social feed on a phone" },
      { src: workFood, alt: "Food styling frame produced for a restaurant content package" },
      { src: workFashion, alt: "Fashion look shot during a monthly content batch day" },
    ],
    faqs: [
      {
        q: "Do you also manage posting and replies?",
        a: "Publishing and basic community management can be added to any monthly package.",
      },
      {
        q: "How much of our time does it need?",
        a: "One batch shoot day a month plus a 30-minute planning call. We handle the rest.",
      },
    ],
  },
  {
    id: "commercial-production",
    num: "06",
    title: "Commercial Production",
    description:
      "Full ad-film production with a producer accountable for budget and schedule. We cover concept, casting, locations, permissions, shoot and post, and deliver broadcast and digital masters to spec.",
    included: [
      "Concept development and scripting",
      "Casting, locations and permissions",
      "Full crew, equipment and art direction",
      "Post, VFX clean-up and grade",
      "Broadcast and digital delivery masters",
    ],
    benefits: ["Single accountable producer", "Budget clarity upfront", "Spec-compliant masters"],
    gallery: [
      { src: heroStudio, alt: "Commercial shoot in progress on a studio floor" },
      { src: workCorporate, alt: "Two-camera commercial setup inside an office location" },
      { src: indRetail, alt: "Retail store dressed as a commercial shoot location" },
    ],
    faqs: [
      {
        q: "What does a commercial typically cost?",
        a: "Single-location films usually start in the mid five-figure range in rupees and scale with cast, locations and post. We share a line-item budget before anything is booked.",
      },
      {
        q: "How long does production take?",
        a: "Four to six weeks end to end is typical, including approvals.",
      },
    ],
  },
  {
    id: "brand-identity",
    num: "07",
    title: "Brand Identity",
    description:
      "Identity work grounded in how your business is actually experienced. We audit where you show up, define positioning and voice, then build a logo system, palette, type scale and usage guidelines your team can apply without us.",
    included: [
      "Discovery workshop and brand audit",
      "Positioning, voice and messaging pillars",
      "Primary logo, marks and lockups",
      "Colour, type and layout system",
      "Brand guidelines PDF and asset library",
    ],
    benefits: ["Recognition across touchpoints", "Faster internal decisions", "Premium perception"],
    gallery: [
      { src: workBranding, alt: "Brand identity stationery system laid out on a warm surface" },
      { src: indEcommerce, alt: "Packaging range showing an applied brand palette" },
      { src: indHospitality, alt: "Hotel lobby showing brand identity applied in an interior" },
    ],
    faqs: [
      {
        q: "How long does an identity project run?",
        a: "Four to eight weeks depending on scope and how quickly feedback rounds close.",
      },
      {
        q: "Can you refresh a brand instead of rebuilding it?",
        a: "Yes — evolution projects keep your equity and tighten the system around it.",
      },
    ],
  },
  {
    id: "motion-graphics",
    num: "08",
    title: "Motion Graphics",
    description:
      "Animation that explains and elevates. Logo stings, product explainers, kinetic type and data visuals, all built from your brand system so motion feels like an extension of the identity rather than a bolt-on.",
    included: [
      "Animated logo stings and endplates",
      "2D explainer animation with voiceover",
      "Kinetic typography and lower-thirds",
      "Infographic and data animation",
      "Reusable template pack for your team",
    ],
    benefits: ["Clearer product explanations", "Reusable templates", "Distinctive brand motion"],
    gallery: [
      { src: workMotion, alt: "Abstract orange motion graphics composition on a monitor" },
      { src: workEditing, alt: "Animation being reviewed in a colour-managed suite" },
      { src: workBranding, alt: "Static brand assets prepared for animation" },
    ],
    faqs: [
      {
        q: "Do you write the voiceover script?",
        a: "We can script and arrange professional voice talent in English, Hindi or Bengali.",
      },
      {
        q: "Will our team be able to reuse the animations?",
        a: "Yes — we hand over editable templates so titles and figures can be updated in-house.",
      },
    ],
  },
  {
    id: "corporate-films",
    num: "09",
    title: "Corporate Films",
    description:
      "Company profiles, plant walkthroughs, CSR stories, recruitment films and event coverage. We interview well, keep production discreet inside working environments and cut a film that sounds like your people, not a template.",
    included: [
      "Stakeholder interviews and story mapping",
      "Facility, plant and event coverage",
      "Multi-language subtitling",
      "Company profile plus short cutdowns",
      "Archive-ready master files",
    ],
    benefits: ["Stronger investor and client pitches", "Better recruitment reach", "Reusable footage library"],
    gallery: [
      { src: workCorporate, alt: "Executive interview lit for a corporate film" },
      { src: indManufacturing, alt: "Manufacturing facility filmed in warm daylight" },
      { src: indEducation, alt: "Campus environment covered for an institutional film" },
    ],
    faqs: [
      {
        q: "Can you film inside a working plant?",
        a: "Yes. We follow site safety inductions and work with a compact crew to avoid disrupting operations.",
      },
      {
        q: "Do you handle multiple languages?",
        a: "We deliver subtitled and voiced versions in English, Hindi and Bengali as standard.",
      },
    ],
  },
];

/* -------------------------------------------------------------- industries */

export type Industry = {
  id: string;
  name: string;
  image: string;
  alt: string;
  copy: string;
  thumbs: { src: string; alt: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "fashion",
    name: "Fashion",
    image: workFashion,
    alt: "Fashion model in couture photographed on a warm backdrop",
    copy: "Label drops move fast, so we shoot lookbook, e-commerce and reel content in a single day and grade everything to one look. Cut-outs go to your storefront, motion goes to the feed, and campaign frames hold up printed at store scale.",
    thumbs: [
      { src: workFashion, alt: "Editorial fashion campaign frame" },
      { src: workProduct, alt: "Accessory product shot for a fashion label" },
      { src: workSocial, alt: "Fashion reel grid on a phone" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    image: workRealEstate,
    alt: "Sunlit luxury apartment living room",
    copy: "Buyers decide from a thumbnail. We shoot interiors at the hour the light flatters the space, cover the project with walkthrough video and drone context, and deliver a set consistent enough to carry an entire launch microsite.",
    thumbs: [
      { src: workRealEstate, alt: "Living room interior for a property listing" },
      { src: indHospitality, alt: "Premium lobby interior photography" },
      { src: workCorporate, alt: "Walkthrough video being filmed on site" },
    ],
  },
  {
    id: "restaurants",
    name: "Restaurants",
    image: indRestaurant,
    alt: "Warm restaurant interior with rattan pendant lighting",
    copy: "Menus change and so should your content. We shoot dish-by-dish in service-realistic plating, capture ambience for the evening crowd, and hand over a month of reels that fill tables on slow weekdays.",
    thumbs: [
      { src: workFood, alt: "Signature dish styled for a menu shoot" },
      { src: indRestaurant, alt: "Dining room ambience frame" },
      { src: workSocial, alt: "Restaurant reel content on a phone" },
    ],
  },
  {
    id: "hotels",
    name: "Hotels",
    image: indHospitality,
    alt: "Luxury hotel lobby with marble floors and warm lighting",
    copy: "Hospitality sells a feeling before a room. We photograph suites, F&B and public areas as a connected story, then cut a property film that OTAs, sales decks and wedding enquiries can all use.",
    thumbs: [
      { src: indHospitality, alt: "Hotel lobby interior photography" },
      { src: workFood, alt: "In-house restaurant dish photographed for a hotel" },
      { src: workRealEstate, alt: "Suite interior photographed in daylight" },
    ],
  },
  {
    id: "retail",
    name: "Retail",
    image: indRetail,
    alt: "Modern retail boutique interior with lit shelving",
    copy: "Store content has to work at the shelf and on the phone. We produce shelf-accurate product frames, festive campaign creatives and in-store films that give staff and franchise partners something consistent to post.",
    thumbs: [
      { src: indRetail, alt: "Boutique store interior" },
      { src: workProduct, alt: "Retail product still life" },
      { src: workBranding, alt: "Retail brand collateral system" },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: indHealthcare,
    alt: "Bright modern clinic reception area",
    copy: "Trust is the whole brief. We shoot clinics and practitioners with calm, clean light, keep patient privacy protocols intact, and script explainer content that answers the questions your front desk hears every day.",
    thumbs: [
      { src: indHealthcare, alt: "Clinic reception photography" },
      { src: workCorporate, alt: "Practitioner interview being filmed" },
      { src: workMotion, alt: "Medical explainer motion graphics frame" },
    ],
  },
  {
    id: "corporate",
    name: "Corporate",
    image: workCorporate,
    alt: "Corporate interview filmed in an office",
    copy: "Company profiles, leadership interviews, town halls and annual-report imagery. We work quietly inside live offices, keep executives comfortable on camera, and deliver both the long film and the short cuts your teams actually share.",
    thumbs: [
      { src: workCorporate, alt: "Executive interview setup" },
      { src: indStartups, alt: "Team working session captured candidly" },
      { src: workBranding, alt: "Corporate collateral design system" },
    ],
  },
  {
    id: "education",
    name: "Education",
    image: indEducation,
    alt: "Sunlit classroom with students at desks",
    copy: "Admissions run on a calendar. We build a campus content bank ahead of the season — facilities, faculty, student voices — so your team can publish through the whole cycle without booking another shoot.",
    thumbs: [
      { src: indEducation, alt: "Classroom photography for a campus film" },
      { src: indStartups, alt: "Student project session" },
      { src: workMotion, alt: "Course explainer animation frame" },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: indManufacturing,
    alt: "Clean manufacturing floor lit by large windows",
    copy: "Capability films that win B2B deals. We document line processes, quality systems and scale with a compact crew that respects safety zones, then package it for trade fairs, tenders and export enquiries.",
    thumbs: [
      { src: indManufacturing, alt: "Production floor photography" },
      { src: workCorporate, alt: "Plant leadership interview" },
      { src: workMotion, alt: "Process animation for a capability film" },
    ],
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    image: indEcommerce,
    alt: "Skincare product range on a cream backdrop",
    copy: "Marketplace-compliant catalogue shots plus the scroll-stopping creative that makes them convert. White-background sets, lifestyle context, unboxing reels and A/B creative variants shipped on a predictable weekly rhythm.",
    thumbs: [
      { src: indEcommerce, alt: "Product range photographed on cream" },
      { src: workProduct, alt: "Hero product still life" },
      { src: workSocial, alt: "Product reel content grid" },
    ],
  },
];

/** Compact list used on the home industries rail. */
export const HOME_INDUSTRIES = [
  { id: "fashion", name: "Fashion", image: workFashion, alt: "Fashion editorial photography" },
  { id: "real-estate", name: "Real Estate", image: workRealEstate, alt: "Luxury apartment interior" },
  { id: "restaurants", name: "Food & Restaurants", image: workFood, alt: "Plated restaurant dish" },
  { id: "hotels", name: "Hospitality", image: indHospitality, alt: "Hotel lobby interior" },
  { id: "retail", name: "Retail", image: indRetail, alt: "Boutique retail store interior" },
  { id: "corporate", name: "Corporate", image: workCorporate, alt: "Corporate film shoot" },
  { id: "healthcare", name: "Healthcare", image: indHealthcare, alt: "Modern clinic reception" },
  { id: "education", name: "Education", image: indEducation, alt: "Classroom with students" },
  { id: "e-commerce", name: "Startups", image: indStartups, alt: "Startup team working together" },
  { id: "e-commerce", name: "E-commerce", image: indEcommerce, alt: "Product range on cream backdrop" },
];

/* ---------------------------------------------------------------- projects */

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  tags: string[];
  image: string;
  alt: string;
  ratio: "portrait" | "landscape" | "square";
  challenge: string;
  approach: string;
  result: string;
  stat?: string;
  video?: boolean;
  beforeAfter?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "silk-line-lookbook",
    title: "Monsoon Silk Lookbook",
    client: "Aranya Label",
    category: "Photography",
    industry: "Fashion",
    tags: ["Photography", "Fashion"],
    image: workFashion,
    alt: "Model in couture silk photographed for a seasonal lookbook",
    ratio: "portrait",
    challenge:
      "A Kolkata weave label had eleven days between sampling and their festive drop, with no campaign imagery and three sales channels to feed.",
    approach:
      "We compressed casting, styling and shooting into two studio days, working from a shot list mapped to storefront, catalogue and reel formats simultaneously.",
    result:
      "Forty-two graded frames plus nine vertical cuts shipped before the drop, letting the label launch on schedule across all channels.",
    stat: "+40% engagement in 30 days",
  },
  {
    id: "clay-oven-menu",
    title: "Clay Oven Menu Relaunch",
    client: "Bhoj House",
    category: "Photography",
    industry: "Food",
    tags: ["Photography", "Food"],
    image: workFood,
    alt: "Signature curry dish styled and photographed for a menu relaunch",
    ratio: "landscape",
    challenge:
      "A thirty-year-old restaurant was relaunching its menu but its existing photography made premium dishes look like takeaway.",
    approach:
      "We shot in-service with the head chef plating live, using window light and warm ceramics to keep the food honest rather than over-styled.",
    result:
      "The new menu, delivery listings and outdoor creative now share one look, and the top six dishes moved measurably.",
    stat: "+27% delivery orders on hero dishes",
    beforeAfter: true,
  },
  {
    id: "riverside-residences",
    title: "Riverside Residences Launch",
    client: "Ganga Realty",
    category: "Videography",
    industry: "Real Estate",
    tags: ["Videography", "Real Estate"],
    image: workRealEstate,
    alt: "Sunlit show apartment interior filmed for a project launch",
    ratio: "landscape",
    challenge:
      "A launch microsite needed to sell an unfinished tower using only the show flat and the site's river-facing light.",
    approach:
      "We scheduled around golden hour, filmed a slow walkthrough on gimbal, and paired it with stills that emphasise volume and outlook.",
    result:
      "A ninety-second film and thirty-two stills carried the entire launch phase, including the sales lounge loop.",
    stat: "312 qualified site-visit requests",
    video: true,
  },
  {
    id: "meridian-brand-system",
    title: "Meridian Identity System",
    client: "Meridian Advisory",
    category: "Branding",
    industry: "Corporate",
    tags: ["Branding", "Graphic Design", "Corporate"],
    image: workBranding,
    alt: "Stationery and business cards showing a new brand identity",
    ratio: "landscape",
    challenge:
      "A financial advisory firm had four different logos in circulation and no rules about which to use where.",
    approach:
      "We ran a two-week audit and workshop, consolidated the marks into one system, and wrote guidelines short enough that the team reads them.",
    result:
      "One identity across office signage, decks, proposals and digital, with an asset library the internal team maintains.",
    stat: "4 legacy marks retired in one quarter",
  },
  {
    id: "always-on-reels",
    title: "Always-On Reel Engine",
    client: "Studio Kohl",
    category: "Social Media",
    industry: "Fashion",
    tags: ["Social Media", "Fashion"],
    image: workSocial,
    alt: "Phone showing a curated social media content grid",
    ratio: "portrait",
    challenge:
      "A beauty studio was posting sporadically and losing momentum between festive peaks.",
    approach:
      "One batch shoot day per month producing twenty finished assets, planned against offers, seasons and the questions clients actually ask.",
    result:
      "Six consecutive months of consistent publishing without additional shoot days.",
    stat: "2.1M views across six months",
  },
  {
    id: "founder-story-film",
    title: "Founder Story Film",
    client: "Nimble Logistics",
    category: "Videography",
    industry: "Corporate",
    tags: ["Videography", "Corporate"],
    image: workCorporate,
    alt: "Company founder being interviewed under soft studio lighting",
    ratio: "landscape",
    challenge:
      "A logistics company needed an investor-facing film but its leadership had never been on camera.",
    approach:
      "We ran a relaxed pre-interview, filmed in their own office with two cameras, and cut for substance rather than corporate gloss.",
    result:
      "A four-minute film plus six social cutdowns used in fundraising and recruitment.",
    stat: "Used in a closed Series A round",
    video: true,
  },
  {
    id: "heritage-hotel-film",
    title: "Heritage Property Film",
    client: "The Alipore House",
    category: "Videography",
    industry: "Corporate",
    tags: ["Videography", "Photography"],
    image: indHospitality,
    alt: "Luxury hotel lobby filmed for a property showcase",
    ratio: "landscape",
    challenge:
      "A boutique hotel's OTA listings were underperforming against newer properties with stronger imagery.",
    approach:
      "A two-day shoot covering suites, F&B and public areas at matched times of day, edited into one film and a full stills set.",
    result:
      "Refreshed listings, sales deck and social library from a single production.",
    stat: "+18% direct booking enquiries",
  },
  {
    id: "timepiece-campaign",
    title: "Timepiece Product Campaign",
    client: "Corvin Watches",
    category: "Photography",
    industry: "Retail",
    tags: ["Photography", "Retail"],
    image: workProduct,
    alt: "Luxury wristwatch photographed on a cream pedestal",
    ratio: "portrait",
    challenge:
      "A watch retailer needed hero imagery that read as premium without a studio budget for a full set build.",
    approach:
      "We built a compact pedestal set, controlled reflections with hand-cut flags, and shot focus stacks for absolute dial clarity.",
    result:
      "Twelve hero frames now used across storefront, print and marketplace listings.",
    stat: "Marketplace CTR up 22%",
  },
  {
    id: "kinetic-explainer",
    title: "Kinetic Product Explainer",
    client: "Paylo Fintech",
    category: "Graphic Design",
    industry: "Corporate",
    tags: ["Graphic Design", "Branding", "Corporate"],
    image: workMotion,
    alt: "Abstract motion graphics composition displayed on a monitor",
    ratio: "landscape",
    challenge:
      "A fintech product was being explained differently by every salesperson.",
    approach:
      "We wrote a ninety-second script, animated it from their brand system, and shipped an editable template pack.",
    result:
      "One canonical explainer used in onboarding, sales and support.",
    stat: "Support queries down 15%",
  },
  {
    id: "campus-admissions",
    title: "Admissions Content Bank",
    client: "Sundar Institute",
    category: "Videography",
    industry: "Corporate",
    tags: ["Videography", "Social Media"],
    image: indEducation,
    alt: "Sunlit classroom filmed for an admissions campaign",
    ratio: "landscape",
    challenge:
      "Admissions marketing was being produced reactively, weeks after each deadline mattered.",
    approach:
      "A single campus week captured facilities, faculty and student voices, then post-produced into a scheduled content bank.",
    result:
      "One shoot week covered an entire admissions cycle.",
    stat: "68 assets from one shoot week",
  },
  {
    id: "shelf-to-screen",
    title: "Shelf-to-Screen Catalogue",
    client: "Verdant Skincare",
    category: "Photography",
    industry: "Food",
    tags: ["Photography", "Social Media"],
    image: indEcommerce,
    alt: "Skincare product range photographed on a cream backdrop",
    ratio: "landscape",
    challenge:
      "A skincare brand's marketplace listings were rejected repeatedly for inconsistent backgrounds and crops.",
    approach:
      "We built a compliant white-background set alongside a warm lifestyle set, shooting both in one session.",
    result:
      "Every SKU accepted first time, with lifestyle variants ready for paid social.",
    stat: "100% listing approval on first submission",
  },
  {
    id: "storefront-refresh",
    title: "Storefront Campaign Refresh",
    client: "Lane Nine",
    category: "Graphic Design",
    industry: "Retail",
    tags: ["Graphic Design", "Branding", "Retail"],
    image: indRetail,
    alt: "Retail boutique interior with campaign artwork on the wall",
    ratio: "landscape",
    challenge:
      "A multi-store retailer had campaign artwork produced by three vendors, none of it matching in store.",
    approach:
      "We rebuilt the campaign as a template system with fixed grids and type, then supplied press-ready files per store size.",
    result:
      "Eleven stores refreshed in one week with identical artwork quality.",
    stat: "11 stores updated in 7 days",
  },
  {
    id: "clinic-trust-series",
    title: "Clinic Trust Series",
    client: "Aarogya Care",
    category: "Videography",
    industry: "Corporate",
    tags: ["Videography", "Social Media"],
    image: indHealthcare,
    alt: "Modern clinic reception filmed for a patient trust series",
    ratio: "landscape",
    challenge:
      "A multi-speciality clinic wanted patient education content without breaching privacy or looking clinical.",
    approach:
      "We filmed practitioners answering real front-desk questions, staged in empty consultation hours with a two-person crew.",
    result:
      "A twelve-part series that reduced repeat phone queries and improved appointment prep.",
    stat: "12-part series, zero patient footage used",
  },
  {
    id: "plant-capability",
    title: "Plant Capability Film",
    client: "Sen Precision",
    category: "Videography",
    industry: "Corporate",
    tags: ["Videography", "Corporate"],
    image: indManufacturing,
    alt: "Manufacturing plant floor filmed for a capability film",
    ratio: "landscape",
    challenge:
      "An export-focused precision manufacturer needed to prove scale and quality to overseas buyers who could not visit.",
    approach:
      "A safety-inducted compact crew documented the full line over two shifts, cut with process animation for clarity.",
    result:
      "A trade-fair film plus a subtitled short used in tender submissions.",
    stat: "Shortlisted in 3 export tenders",
  },
  {
    id: "seed-round-brand",
    title: "Seed Round Brand Sprint",
    client: "Tarun Labs",
    category: "Branding",
    industry: "Corporate",
    tags: ["Branding", "Graphic Design"],
    image: indStartups,
    alt: "Startup team collaborating during a brand sprint",
    ratio: "landscape",
    challenge:
      "A pre-seed team needed a credible brand and pitch system in three weeks before investor meetings.",
    approach:
      "A compressed sprint: positioning workshop, mark, palette, deck system and a one-page site kit, reviewed twice weekly.",
    result:
      "A coherent brand delivered on day nineteen and used through the full raise.",
    stat: "Brand delivered in 19 days",
  },
];

export const PORTFOLIO_FILTERS = [
  "All",
  "Photography",
  "Videography",
  "Graphic Design",
  "Social Media",
  "Branding",
  "Fashion",
  "Food",
  "Real Estate",
  "Corporate",
] as const;

export const HOME_FILTERS = ["All", "Photography", "Videography", "Branding", "Social Media"] as const;

/* ------------------------------------------------------------ testimonials */

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  photo?: string;
  initials: string;
  rating?: number;
  video?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya Sen",
    role: "Founder",
    company: "Aranya Label",
    quote:
      "They understood our weave and our margins in the same conversation. The lookbook shipped two days early and we sold through the festive drop faster than any season before it.",
    photo: person1,
    initials: "AS",
    rating: 5,
  },
  {
    name: "Rohit Banerjee",
    role: "Managing Director",
    company: "Ganga Realty",
    quote:
      "The walkthrough film did what our brochure never could. Prospects arrived at the site already convinced about the light and the layout.",
    photo: person2,
    initials: "RB",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Marketing Head",
    company: "Bhoj House",
    quote:
      "Our food finally looks the way it tastes. Delivery listings, menu and hoardings all match now, which sounds small until you see the order numbers.",
    photo: person3,
    initials: "PN",
    rating: 5,
  },
  {
    name: "Debashis Roy",
    role: "CEO",
    company: "Sen Precision",
    quote:
      "They walked our plant floor with the safety officer before touching a camera. That respect showed up in the film, and buyers overseas noticed.",
    photo: person4,
    initials: "DR",
    rating: 5,
    video: true,
  },
  {
    name: "Meher Kapoor",
    role: "Creative Director",
    company: "Studio Kohl",
    quote:
      "One batch day a month replaced a constant scramble. Six months in we have never missed a posting week.",
    initials: "MK",
    rating: 5,
  },
  {
    name: "Arjun Dutta",
    role: "Co-founder",
    company: "Tarun Labs",
    quote:
      "Nineteen days from blank page to a brand we used in every investor meeting. The guidelines were short enough that we actually followed them.",
    initials: "AD",
    rating: 5,
    video: true,
  },
  {
    name: "Sneha Ghosh",
    role: "General Manager",
    company: "The Alipore House",
    quote:
      "They photographed a heritage property without flattening its character. Our direct enquiries picked up within the month.",
    initials: "SG",
    rating: 4,
  },
  {
    name: "Imran Sheikh",
    role: "Retail Head",
    company: "Lane Nine",
    quote:
      "Eleven stores, one week, identical artwork. Our regional teams stopped improvising, which is all I ever wanted.",
    initials: "IS",
    rating: 5,
  },
];

/* -------------------------------------------------------------- misc lists */

export const WHY_US = [
  { title: "Creative Strategy", copy: "Every shoot starts with the business outcome, not the moodboard." },
  { title: "Premium Quality", copy: "Cinema-grade gear, disciplined lighting and colour-managed post." },
  { title: "Fast Delivery", copy: "Selects in 48 hours, finished sets on a date we commit to in writing." },
  { title: "Professional Team", copy: "Directors, DOPs, designers and editors who have shipped at scale." },
  { title: "Tailored Solutions", copy: "Scopes built around your calendar and channels, never off a rate card." },
  { title: "Results-Oriented", copy: "We track what the work did, then adjust the next round accordingly." },
  { title: "Affordable Packages", copy: "Transparent line-item budgets with no surprise production add-ons." },
  { title: "Dedicated Support", copy: "One producer owns your project from the first call to final handover." },
];

export const PROCESS = [
  { step: "01", title: "Discovery Call", copy: "Fifteen minutes to understand the goal, the audience and the deadline." },
  { step: "02", title: "Planning", copy: "Shot lists, scripts, casting and a schedule you approve before anything books." },
  { step: "03", title: "Production", copy: "Crew, lighting and direction on location or in studio, run to the minute." },
  { step: "04", title: "Editing", copy: "Assembly, colour, sound and design, with two structured review rounds." },
  { step: "05", title: "Delivery", copy: "Platform-ready files, archives and source assets handed to your team." },
  { step: "06", title: "Growth", copy: "We review performance and plan the next batch around what worked." },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 2, suffix: "M+", label: "Social Media Views Generated" },
];

export const CLIENT_WORDMARKS = [
  "ARANYA",
  "BHOJ HOUSE",
  "GANGA REALTY",
  "STUDIO KOHL",
  "MERIDIAN",
  "CORVIN",
  "LANE NINE",
  "VERDANT",
  "SEN PRECISION",
  "TARUN LABS",
  "AAROGYA CARE",
  "ALIPORE HOUSE",
];
