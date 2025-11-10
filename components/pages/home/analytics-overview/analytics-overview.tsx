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
      <div className="border-b border-t mb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-6">
            <div className="col-span-4 py-10">
              <h2 className="text-4xl font-bold text-title-text max-w-xl">
                The perfect foundation to kickstart any project.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                A comprehensive UI kit — thoughtfully crafted with{" "}
                <span className="font-semibold">
                  Auto Layout 5.0, smart variants, variables
                </span>
                , and built-in WCAG accessibility for a seamless design
                experience.
              </p>
            </div>

            {/* Making extra spaces */}
            <div></div>
          </div>
        </div>
      </div>

      <div className="border-b mb-10">
        <AnalyticsOverviewCards />
      </div>
    </main>
  );
}
