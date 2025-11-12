import Container from "@/components/shared/container";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import Image from "next/image";

const AnalyticsOverviewCards = () => {
  return (
    <Container className="container border py-2 bg-linear-to-br from-indigo-50 to-purple-50">
      <div className="grid grid-cols-3 gap-x-2.5">
        {featureStats.map((feature, index) => (
          <div key={index} className="border rounded-xl p-8 bg-white">
            <StyledButtons.Icons className="shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[18px] size-16">
              <Image
                src={feature.icon}
                width={36}
                height={36}
                alt="Icon"
                className=""
              />
            </StyledButtons.Icons>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {feature.number}
            </h3>
            <p className="text-gray-700 font-medium mb-3">{feature.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}{" "}
      </div>
    </Container>
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
