import Header from "@/components/hob/header";
import CasesSection from "@/components/hob/cases-section";
import InitiativeSection from "@/components/hob/initiative-section";
import TestimonialsSection from "@/components/hob/testimonials-section";
import CTASection from "@/components/hob/cta-section";
import Footer from "@/components/hob/footer";

export default function Home() {
    return (
    <>
      <Header />
      <CasesSection />
      <InitiativeSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}