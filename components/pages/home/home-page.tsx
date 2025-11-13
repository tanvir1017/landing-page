import Footer from "@/components/shared/footer/footer";
import { SectionHero } from "@/components/style-componenets/section-heros";
import AnalyticsOverview from "./analytics-overview/analytics-overview";
import HeroSection from "./hero/hero-section";
import NewsLetter from "./news-letter/news-letter";
import TemplateShowcase from "./template-showcase/template-showcase";
import TestimonialSection from "./testimonials/testimonials-section";
import WhyChooseUsSection from "./why-choose-us/why-choose-us-section";

const HomePageComponents = () => {
  return (
    <>
      <HeroSection />
      <AnalyticsOverview />
      <SectionHero.Breaker />
      <WhyChooseUsSection />
      <SectionHero.Breaker />
      <TemplateShowcase />
      <SectionHero.Breaker className="border-b-0 border-t h-0" />
      <TestimonialSection />
      <SectionHero.Breaker className="" />
      <NewsLetter />
      <SectionHero.Breaker className="" />
      <Footer />
    </>
  );
};

export default HomePageComponents;
