import TemplateIcon from "@/components/assets/svgs/template";
import { SectionHero } from "@/components/style-componenets/section-heros";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";

function TemplateShowCaseHeader() {
  return (
    <SectionHero.SectionBody>
      <StyledButtons.Icons className="h-[34px] w-[120px] py-[7px] pl-2.5 pr-3 text-[#6B7280] mb-4">
        <TemplateIcon />
        Templates
      </StyledButtons.Icons>
      <SectionHero.Title>
        Ready-to-use Figma templates for building websites faster.
      </SectionHero.Title>
      <SectionHero.Subtitle className="max-w-full md:max-w-8/12">
        Design and explore stunning website layouts with our{" "}
        <span className="font-medium text-[#374151]">
          ready-made templates.
        </span>
      </SectionHero.Subtitle>
    </SectionHero.SectionBody>
  );
}

export default TemplateShowCaseHeader;
