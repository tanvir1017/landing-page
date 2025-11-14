import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";
import Image from "next/image";

const AnalyticsOverviewCards = () => {
  return (
    <div className="bg-[url('/assets/section-gradient.png')] md:bg-no-repeat bg-size-[auto_650px] bg-position-[center_top_0rem] overflow-hidden md:px-0 px-1.5">
      <div className="py-1.5 md:py-[11px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-1.5  md:gap-x-2.5">
          {featureStats.map((feature, index) => (
            <div
              key={index}
              className=" rounded-xl md:px-10 px-5 py-9 bg-white space-y-9 md:border-none border border-[#E5E7EB] md:shadow-none shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            >
              <StyledButtons.Icons className="shadow-[0px_3px_6px_2px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-14 p-0">
                <Image
                  src={feature.icon}
                  width={36}
                  height={36}
                  alt="Icon"
                  className=""
                />
              </StyledButtons.Icons>
              <div className="space-y-4">
                <h3 className="text-[#1F2937] text-[44px] leading-normal font-medium">
                  {feature.number}
                </h3>
                <div className="space-y-3">
                  <p className="text-[#374151] leading-8 text-2xl font-medium">
                    {feature.title}
                  </p>
                  <p className="text-base leading-6 text-[#6B7280] tracking-[-0.2px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

const featureStats = [
  {
    icon: "/assets/layer.png",
    number: "400+",
    title: "Widgets & Examples",
    description:
      "Explore a rich collection of ready-to-use widgets and examples — built to inspire and speed up your design workflow.",
  },
  {
    icon: "/assets/component.png",
    number: "10000+",
    title: "Components & Variant",
    description:
      "Discover hundreds of flexible components and variants — crafted to help you design faster and maintain consistency effortlessly.",
  },
  {
    icon: "/assets/variable.png",
    number: "650+",
    title: "Styles, Variable & Tokens",
    description:
      "Access well-structured styles, variables, and tokens — ensuring seamless scalability and visual harmony across every design.",
  },
];
export default AnalyticsOverviewCards;
