import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import appCss from "../styles.css?url";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { SmoothScrollProvider } from "@/components/ui/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SocialProofToast } from "@/components/ui/SocialProofToast";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { BackToTop } from "@/components/ui/BackToTop";
import { Preloader } from "@/components/ui/Preloader";
import { COMPANY } from "@/lib/constants";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Global Numedia — Digital Marketing & Growth Agency" },
        {
          name: "description",
          content:
            "We turn marketing into measurable revenue. Performance SEO, paid media, branding and growth systems for ambitious businesses.",
        },
        { name: "author", content: "Global Numedia" },
        { property: "og:site_name", content: "Global Numedia" },
        {
          property: "og:title",
          content: "Global Numedia — Digital Marketing & Growth Agency",
        },
        {
          property: "og:description",
          content:
            "Turn marketing into measurable revenue with a senior growth team.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          property: "og:image",
          content: "https://globalnumedia.digital/og-image.png",
        },
        {
          property: "og:image:alt",
          content: "Global Numedia — Digital Marketing & Growth Agency | ₹680 Cr+ Revenue Generated",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:url",
          content: "https://globalnumedia.digital",
        },
        {
          name: "twitter:image",
          content: "https://globalnumedia.digital/og-image.png",
        },
        {
          name: "twitter:title",
          content: "Global Numedia — Digital Marketing & Growth Agency",
        },
        {
          name: "twitter:description",
          content:
            "Turn marketing into measurable revenue with a senior growth team.",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-sans/style.min.css",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Global Numedia Digital",
            alternateName: "Global Numedia",
            description:
              "AI-native performance marketing agency. SEO, paid media, branding, and growth systems for ambitious businesses since 2013.",
            url: "https://globalnumedia.digital",
            logo: "https://globalnumedia.digital/logo.png",
            foundingDate: "2013",
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              minValue: 50,
              maxValue: 100,
            },
            areaServed: ["India", "UAE", "Singapore", "Global"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: COMPANY.phone,
              contactType: "sales",
              availableLanguage: ["English", "Hindi"],
            },
            sameAs: [
              "https://www.linkedin.com/company/global-numedia",
              "https://www.instagram.com/globalnumedia",
              "https://twitter.com/globalnumedia",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "87",
              bestRating: "5",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Marketing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "AI Search & AEO" },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO & Content Marketing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Ads Management",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Social Media Advertising",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Design & Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Branding & Identity",
                  },
                },
              ],
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Global Numedia Digital",
            url: "https://globalnumedia.digital",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://globalnumedia.digital/blog?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        },
      ],
    }),
    component: RootComponent,
    pendingComponent: PendingComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function PendingComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl px-6 py-20 space-y-8 animate-pulse">
          <div className="space-y-4">
            <div className="h-4 w-32 rounded-full bg-muted" />
            <div className="h-12 w-3/4 rounded-2xl bg-muted" />
            <div className="h-12 w-1/2 rounded-2xl bg-muted" />
          </div>
          <div className="h-5 w-2/3 rounded-lg bg-muted" />
          <div className="grid gap-6 md:grid-cols-3 pt-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="space-y-4 rounded-3xl border border-border p-6"
              >
                <div className="h-12 w-12 rounded-2xl bg-muted" />
                <div className="h-6 w-3/4 rounded-lg bg-muted" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-5/6 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <Preloader />
        <ScrollProgress />
        <SocialProofToast />
        <div className="relative z-10 flex min-h-screen flex-col bg-background shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
          <SiteHeader />
          <AnimatePresence mode="wait">
            <motion.main
              key={router.state.location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="flex-1"
            >
              <Outlet />
            </motion.main>
          </AnimatePresence>
        </div>
        <SiteFooter />
        <FloatingContact />
        <BackToTop />
        <CookieConsent />
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}
