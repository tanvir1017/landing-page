import Container from "@/src/components/shared/container";
import { SectionHero } from "@/src/components/style-componenets/section-heros";
import { cn } from "@/src/lib/utils";
import CustomizedSectionFeatures from "./customize-section-features";
import SectionFeatures from "./section-features";
import SectionHeader from "./section-header";

const WhyChooseUsSection = () => {
  return (
    <>
      <SectionWrapper className="mt-0">
        <SectionHeader />
        <SectionFeatures />
      </SectionWrapper>
      <SectionHero.Breaker />
      <SectionWrapper className="mt-0">
        <CustomizedSectionFeatures />
      </SectionWrapper>
    </>
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
    <div className={cn(`mt-20 `, className)}>
      <Container>{children}</Container>
    </div>
  );
};

export default WhyChooseUsSection;
