import TestimonialsBento from "./bento-testimonials";
import TestimonialHeader from "./testimonials-header";

const TestimonialSection = () => {
  return (
    <div className="mt-20 border-y">
      <div className="container mx-auto">
        <TestimonialHeader />
        <TestimonialsBento />
      </div>
    </div>
  );
};

export default TestimonialSection;
