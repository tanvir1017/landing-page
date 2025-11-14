import { SectionBorder } from "@/src/components/style-componenets/section-border";
import TestimonialCard from "./bento-testimonials";
import TestimonialHeader from "./testimonials-header";

const TestimonialSection = () => {
  return (
    <>
      <TestimonialHeader />
      <div className={SectionBorder.wrapper("both", "")}>
        <TestimonialCard />
      </div>
    </>
  );
};

export default TestimonialSection;
