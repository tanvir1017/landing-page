import CustomizedSectionFeatures from "./customize-section-features";
import SectionFeatures from "./section-features";
import SectionHeader from "./section-header";

const WhyChooseUsSection = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader />
        <SectionFeatures />
      </SectionWrapper>
      <SectionWrapper>
        <CustomizedSectionFeatures />
      </SectionWrapper>
    </>
  );
};

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-20 border-y">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default WhyChooseUsSection;
