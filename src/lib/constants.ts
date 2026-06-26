/**
 * Single source of truth for company data.
 * Update here — propagates everywhere.
 */

export const COMPANY = {
  name: "Global Numedia",
  domain: "globalnumedia.digital",
  email: "support@globalnumedia.in",
  phone: "+91 96862 24977",
  phoneRaw: "+919686224977",
  whatsapp:
    "https://wa.me/919686224977?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  calendly: "https://calendly.com/globalnumedia/consultation",
  address: "1042, 3500 State Road 38 E Ste 300, Lafayette, IN 47905",
} as const;
