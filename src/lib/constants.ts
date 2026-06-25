/**
 * Single source of truth for company data that changes over time.
 * Update here — propagates everywhere.
 */

const FOUNDED_YEAR = 2013;
const CURRENT_YEAR = new Date().getFullYear();

export const COMPANY = {
  name: "Global Numedia",
  domain: "globalnumedia.digital",
  email: "hello@globalnumedia.digital",
  phone: "+91 80888 09090",
  phoneRaw: "+918088809090",
  whatsapp: "https://wa.me/918088809090?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20growth%20strategy%20for%20my%20business.",
  calendly: "https://calendly.com/globalnumedia/strategy-call",
  locations: "Bengaluru · Mumbai · Dubai · Singapore",
  foundedYear: FOUNDED_YEAR,
  yearsInBusiness: CURRENT_YEAR - FOUNDED_YEAR,
} as const;

export const STATS = {
  brandsServed: "240+",
  revenueGenerated: "₹680 Cr+",
  clientRetention: "94%",
  avgROAS: "5.4x",
  avgTenure: "31 months",
  teamSize: "78",
  avgExperience: "8+ yrs",
  clutchRating: "4.9/5",
  verifiedReviews: "180+",
  newClientsAccepting: 4,
} as const;
