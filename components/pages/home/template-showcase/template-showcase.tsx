import TemplateShowCaseHeader from "./template-showcase-header";
import TemplateTabs from "./templates-tabs";

const TemplateShowcase = () => {
  return (
    <div className="mt-20 border-y">
      <div className="container mx-auto">
        <TemplateShowCaseHeader />
        <TemplateTabs />
      </div>
    </div>
  );
};

export default TemplateShowcase;
