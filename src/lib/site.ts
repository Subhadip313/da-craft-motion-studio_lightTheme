/**
 * Central brand + contact configuration.
 * REPLACE THESE PLACEHOLDERS with the real business details before launch.
 */
export const SITE = {
  name: "Da Craft Motion",
  wordmark: "DA CRAFT MOTION",
  tagline: "Create | Inspire | Elevate.",
  // TODO: replace placeholder phone number
  phoneDisplay: "+91 98310 09951",
  phoneHref: "tel:+919831009951",
  // TODO: replace placeholder email
  email: "dacraftmotionstudio@gmail.com",
  // TODO: replace placeholder WhatsApp number (international format, digits only)
  whatsappNumber: "919831009951",
  whatsappMessage: "Hi Da Craft Motion! I'd like to discuss a creative project.",
  address: "1/1, Baghajatin Station Road, Kolkata – 700032",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
} as const;

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

/**
 * Placeholder form endpoint. This static site does NOT send data anywhere.
 * Point this at a form service (Formspree, Basin, your own API) to go live.
 */
export const FORM_ENDPOINT = "https://formsubmit.co/ajax/dacraftmotionstudio@gmail.com" as const; // e.g. "https://formspree.io/f/xxxxxxx"

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Da Craft Motion",
  slogan: "Create | Inspire | Elevate.",
  description:
    "Full-service creative agency in Kolkata offering photography, videography, branding, design and social media content.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1/1, Baghajatin Station Road",
    addressLocality: "Kolkata",
    postalCode: "700032",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.4795, longitude: 88.3745 },
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  areaServed: "Kolkata, West Bengal, India",
  priceRange: "₹₹",
  openingHours: "Mo-Sa 10:00-20:00",
};
