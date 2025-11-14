import { SectionBorder } from "@/src/components/style-componenets/section-border";
import TestimonialCard from "./bento-testimonials";
import TestimonialHeader from "./testimonials-header";

const TestimonialSection = () => {
  return (
    <div className="md:block hidden">
      <TestimonialHeader />
      <div className={SectionBorder.wrapper("both", "")}>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialSection;
