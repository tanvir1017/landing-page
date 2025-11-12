import Container from "@/components/shared/container";
import TemplateShowCaseHeader from "./template-showcase-header";
import TemplateTabs from "./templates-tabs";

const TemplateShowcase = () => {
  return (
    <>
      <Container>
        <TemplateShowCaseHeader />
        <TemplateTabs />
      </Container>
    </>
  );
};

export default TemplateShowcase;
