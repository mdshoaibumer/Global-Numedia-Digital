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
  ROICalculator,
  Pricing,
} from "@/components/sections";
import { CertificationBadges } from "@/components/sections/CertificationBadges";
import { MediaMentions } from "@/components/sections/MediaMentions";
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
        <MediaMentions />
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
        <ROICalculator />
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
        <CertificationBadges />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <Pricing />
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
