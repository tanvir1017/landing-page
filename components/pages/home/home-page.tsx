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
      <WhyChooseUsSection />
      <TemplateShowcase />
      <TestimonialSection />
      <NewsLetter />
    </>
  );
};

export default HomePageComponents;
