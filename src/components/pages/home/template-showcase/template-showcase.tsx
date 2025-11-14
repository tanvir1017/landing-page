import { SectionBorder } from "@/src/components/style-componenets/section-border";
import { Breaker } from "@/src/components/style-componenets/section-heros";
import TemplateShowCaseHeader from "./template-showcase-header";
import TemplateTabs from "./templates-tabs";

const TemplateShowcase = () => {
  return (
    <>
      <div>
        <Breaker />
        <div className={SectionBorder.wrapper("top", "mt-sec-gap")}>
          <TemplateShowCaseHeader />
        </div>
      </div>

      <div className={SectionBorder.wrapper("both", "")}>
        <TemplateTabs />
      </div>
    </>
  );
};

export default TemplateShowcase;
