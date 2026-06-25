import { Suspense, lazy } from "react";
import {
  Hero,
  PartnerBar,
  TrustedBy,
  ServicesShowcase,
  WhyUs,
  Results,
  CaseStudies,
  Testimonials,
  FAQ,
  ContactCTA,
  MobileFixedCTA,
  ROICalculator,
} from "@/components/sections";
import { SectionErrorBoundary } from "@/components/ui/SectionErrorBoundary";

function SectionSkeleton() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-full max-w-4xl animate-pulse space-y-6 px-6">
        <div className="h-4 w-24 rounded-full bg-muted" />
        <div className="h-10 w-2/3 rounded-2xl bg-muted" />
        <div className="h-5 w-1/2 rounded-lg bg-muted" />
        <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-40 rounded-2xl bg-muted" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SectionErrorBoundary>
        <Hero />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <PartnerBar />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <TrustedBy />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesShowcase />
        </Suspense>
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <WhyUs />
        </Suspense>
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Results />
        </Suspense>
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <CaseStudies />
        </Suspense>
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <ROICalculator />
        </Suspense>
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <ContactCTA />
      </SectionErrorBoundary>
      <MobileFixedCTA />
    </>
  );
}
