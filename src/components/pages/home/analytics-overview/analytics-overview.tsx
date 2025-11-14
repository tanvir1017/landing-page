import Container from "@/src/components/shared/container";
import { SectionBorder } from "@/src/components/style-componenets/section-border";
import AnalyticsHeader from "./analyteics-header";
import AnalyticsOverviewCards from "./analytics-overview-card";

export default function AnalyticsOverview() {
  return (
    <div className="mt-10">
      <div className={SectionBorder.wrapper("both", "")}>
        <div className="flex items-start justify-between">
          <div className=" text-gray-600 max-w-xs">
            <p className="font-medium">Trusted by 5000+ individuals &</p>
            <p className="font-medium">companies of all sizes</p>
          </div>
          {/* <TrustedCompanies /> */}
        </div>
      </div>

      <Container className="max-w-full">
        <AnalyticsHeader />
        <div className={SectionBorder.wrapper("both", "")}>
          <AnalyticsOverviewCards />
        </div>
      </Container>
    </div>
  );
}
