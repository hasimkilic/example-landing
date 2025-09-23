import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import AwardsSection from '@/components/sections/awards';
import TrustedCompanies from '@/components/sections/trusted-companies';
import HowItWorksSection from '@/components/sections/how-it-works';
import TestimonialGuillaume from '@/components/sections/testimonial-guillaume';
import WhatCanYouDo from '@/components/sections/what-can-you-do';
import TestimonialAnkit from '@/components/sections/testimonial-ankit';
import RecurringCampaigns from '@/components/sections/recurring-campaigns';
import TemplatesSection from '@/components/sections/templates';
import CtaFinal from '@/components/sections/cta-final';
import Footer from '@/components/sections/footer';
import { PricingSection } from '@/components/sections/pricing';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <AwardsSection /> */}
      <TrustedCompanies />
      <HowItWorksSection />
      <TestimonialGuillaume />
      <WhatCanYouDo />
      <TestimonialAnkit />
      <RecurringCampaigns />
      <TemplatesSection />
      <CtaFinal />
      <Footer />
    </main>
  );
}