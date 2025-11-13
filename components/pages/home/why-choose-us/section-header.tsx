import CodeIcon from "@/components/assets/svgs/code";
import { SectionHero } from "@/components/style-componenets/section-heros";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";

const SectionHeader = () => {
  return (
    <SectionHero.SectionBody>
      <StyledButtons.Icons className="h-8 w-[161px] py-[7px] pl-2.5 pr-3 text-[#6B7280] mb-4">
        <CodeIcon />
        Why choose us?
      </StyledButtons.Icons>
      <SectionHero.Title>
        Smart, Collaborative, and Built for Modern Designers
      </SectionHero.Title>
      <SectionHero.Subtitle className="max-w-full md:max-w-8/12">
        From smart components to real-time updates, everything works together to
        keep your team in sync.
      </SectionHero.Subtitle>
    </SectionHero.SectionBody>
  );
};

export default SectionHeader;
