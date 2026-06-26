/**
 * Single source of truth for company data.
 * Update here — propagates everywhere.
 */

export const COMPANY = {
  name: "Global Numedia",
  domain: "globalnumedia.digital",
  email: "hello@globalnumedia.digital",
  phone: "+91 80888 09090",
  phoneRaw: "+918088809090",
  whatsapp:
    "https://wa.me/918088809090?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  calendly: "https://calendly.com/globalnumedia/consultation",
  locations: "Bengaluru · Mumbai · Dubai · Singapore",
} as const;
