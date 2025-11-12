import Container from "@/components/shared/container";
import TestimonialsBento from "./bento-testimonials";
import TestimonialHeader from "./testimonials-header";

const TestimonialSection = () => {
  return (
    <>
      <Container>
        <TestimonialHeader />
        <TestimonialsBento />
      </Container>
    </>
  );
};

export default TestimonialSection;
