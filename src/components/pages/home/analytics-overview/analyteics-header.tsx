import { SectionHero } from "@/src/components/style-componenets/section-heros";

const AnalyticsHeader = () => {
  return (
    <SectionHero.SectionBody>
      <SectionHero.Title>
        The perfect foundation to kickstart any project.
      </SectionHero.Title>
      <SectionHero.Subtitle>
        {" "}
        A comprehensive UI kit — thoughtfully crafted with{" "}
        <span className="font-medium text-[#374151]">
          Auto Layout 5.0, smart variants, variables
        </span>
        , and built-in WCAG accessibility for a seamless design experience.
      </SectionHero.Subtitle>
    </SectionHero.SectionBody>
  );
};

export default AnalyticsHeader;
