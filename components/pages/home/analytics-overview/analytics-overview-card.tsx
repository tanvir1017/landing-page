import Container from "@/components/shared/container";
import { Grid3x3, Layers, Palette } from "lucide-react";
const featureStats = [
  {
    icon: <Layers className="w-6 h-6 text-gray-400" />,
    number: "400+",
    title: "Widgets & Examples",
    description:
      "Explore a rich collection of ready-to-use widgets and examples — built to inspire and speed up your design workflow.",
  },
  {
    icon: <Grid3x3 className="w-6 h-6 text-gray-400" />,
    number: "10000+",
    title: "Components & Variant",
    description:
      "Discover hundreds of flexible components and variants — crafted to help you design faster and maintain consistency effortlessly.",
  },
  {
    icon: <Palette className="w-6 h-6 text-gray-400" />,
    number: "650+",
    title: "Styles, Variable & Tokens",
    description:
      "Access well-structured styles, variables, and tokens — ensuring seamless scalability and visual harmony across every design.",
  },
];
const AnalyticsOverviewCards = () => {
  return (
    <Container className="container border py-2 bg-linear-to-br from-indigo-50 to-purple-50">
      <div className="grid grid-cols-3 gap-x-2.5">
        {featureStats.map((feature, index) => (
          <div key={index} className="border rounded-xl p-8 bg-white">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border border-gray-200">
              {feature.icon}
            </div>
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

export default AnalyticsOverviewCards;
