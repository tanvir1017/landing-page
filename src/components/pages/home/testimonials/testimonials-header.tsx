import StarFatIcon from "@/src/assets/svgs/star-fat";
import { SectionHero } from "@/src/components/style-componenets/section-heros";
import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";

const TestimonialHeader = () => {
  return (
    <SectionHero.SectionBody>
      <StyledButtons.Icons className="h-[34px] w-[120px] py-[7px] pl-2.5 pr-3 text-[#6B7280] mb-4">
        <StarFatIcon />
        Testimonial
      </StyledButtons.Icons>
      <SectionHero.Title>
        Our Wall of Love - Words from Happy Customers
      </SectionHero.Title>
      <SectionHero.Subtitle className="max-w-8/12">
        Trusted by{" "}
        <span className="font-medium text-[#374151]">
          design professionals{" "}
        </span>{" "}
        and{" "}
        <span className="font-medium text-[#374151]">loved by creators </span>{" "}
        worldwide. ready-made templates Design and explore stunning website
        layouts with our{" "}
      </SectionHero.Subtitle>
    </SectionHero.SectionBody>
  );
};

export default TestimonialHeader;
