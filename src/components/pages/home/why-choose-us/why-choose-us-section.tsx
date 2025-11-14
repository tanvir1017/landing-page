import Container from "@/src/components/shared/container";
import { SectionBorder } from "@/src/components/style-componenets/section-border";
import { Breaker } from "@/src/components/style-componenets/section-heros";
import { cn } from "@/src/lib/utils";
import CustomizedSectionFeatures from "./customize-section-features";
import SectionFeatures from "./section-features";
import SectionHeader from "./section-header";

const WhyChooseUsSection = () => {
  return (
    <div>
      <Breaker />
      <SectionWrapper>
        <SectionBorder.SectionBorderWrapper>
          <SectionHeader />
          <SectionFeatures />
        </SectionBorder.SectionBorderWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <SectionBorder.SectionBorderWrapper>
          <CustomizedSectionFeatures />
        </SectionBorder.SectionBorderWrapper>
      </SectionWrapper>
    </div>
  );
};

const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`mt-sec-gap`, className)}>
      <Container className="max-w-full">{children}</Container>
    </div>
  );
};

export default WhyChooseUsSection;
