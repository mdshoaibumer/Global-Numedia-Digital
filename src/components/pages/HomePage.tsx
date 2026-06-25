import {
  Hero,
  PartnerBar,
  TrustedBy,
  Story,
  ServicesShowcase,
  WhyUs,
  Results,
  Industries,
  Process,
  CaseStudies,
  Team,
  AwardsSection,
  Timeline,
  Testimonials,
  FAQ,
  ContactCTA,
  MobileFixedCTA,
} from "@/components/sections";
import { SectionErrorBoundary } from "@/components/ui/SectionErrorBoundary";

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
        <Story />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <ServicesShowcase />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <WhyUs />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Results />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Industries />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Process />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <CaseStudies />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Team />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <AwardsSection />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Timeline />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Testimonials />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <FAQ />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <ContactCTA />
      </SectionErrorBoundary>
      <MobileFixedCTA />
    </>
  );
}
