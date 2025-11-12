import { SectionHero } from "@/components/style-componenets/section-heros";
import AnalyticsOverviewCards from "./analytics-overview-card";

export default function AnalyticsOverview() {
  return (
    <main className="mt-10">
      {/* Header Section */}
      {/* <div className="px-8 py-12 border-b border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between">
            <div className="text-sm text-gray-600 max-w-xs">
              <p className="font-medium">Trusted by 5000+ individuals &</p>
              <p className="font-medium">companies of all sizes</p>
            </div>

            <TrustedCompanies />
          </div>
        </div>
      </div> */}
      {/* Main Content Section */}
      {/* <Container className="max-w-10/12"> */}
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

      <div className="border-b relative">
        <AnalyticsOverviewCards />
      </div>
    </main>
  );
}
