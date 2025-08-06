import { HeroSection } from "../sections/HeroSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { CTASection } from "../sections/CTASection";
import { PricingSection } from "../sections/PricingSection";
import { ContactSection } from "../sections/ContactSection";
import { FAQSection } from "../sections/FAQSection";

export function Main() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
