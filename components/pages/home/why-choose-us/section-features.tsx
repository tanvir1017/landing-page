import AutoLayoutIcon from "@/components/assets/svgs/auto-layout";
import FigmaIcon from "@/components/assets/svgs/figma";
import FigmaGrayIcon from "@/components/assets/svgs/figma-gray";
import ThemeIcon from "@/components/assets/svgs/theme";
import { FeaturesSection } from "@/components/style-componenets/featuers-section";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { T_FeatureItem } from "@/types";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const SectionFeatures = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <FeaturesSection.SectionWrapper>
        <FeaturesSection.SectionContent>
          <FeaturesSection.SectionTitle>
            Built with Figma's latest features
          </FeaturesSection.SectionTitle>
          <FeaturesSection.FeatureSection items={featureItems} />

          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 mt-11">
            <StyledButtons.Icons className="cursor-pointer h-11! w-[191.64px] px-3.5">
              <FigmaIcon className="size-6" />{" "}
              <span className="text-[#1F2937] flex items-center">
                Preview{" "}
                <span className="flex items-center text-black/70 ml-0.5">
                  - Figma <ChevronRightIcon className="w-4 h-4" />
                </span>{" "}
              </span>
            </StyledButtons.Icons>

            <StyledButtons.PrimaryNeviBlue className="">
              Buy now{" "}
              <span className="space-x-1 flex items-center justify-center text-white/75">
                <span>- One-time</span>
                <ChevronRightIcon className="w-4 h-4" />
              </span>
            </StyledButtons.PrimaryNeviBlue>
          </div>
        </FeaturesSection.SectionContent>
        <FeaturesSection.SectionContent className="pl-0">
          <FeaturesSection.SectionImage>
            <Image
              src="/assets/latest-features1.png"
              alt="why-choose-us"
              className=""
              width={660}
              height={564}
            />
          </FeaturesSection.SectionImage>
        </FeaturesSection.SectionContent>
      </FeaturesSection.SectionWrapper>
    </div>
  );
};

const featureItems: T_FeatureItem[] = [
  {
    Icon: <FigmaGrayIcon className="size-6" />,
    description:
      "Built with Figma's latest and coolest features to make your workflow smarter and faster.",
  },
  {
    Icon: <AutoLayoutIcon className="size-6" />,
    description:
      "Fully compatible with Auto Layout 5.0 across all pages, components, and UI kits.",
  },
  {
    Icon: <ThemeIcon className="size-6" />,
    description:
      "Switch between Light and Dark modes effortlessly with Figma's variables for every UI component and block, all in one click.",
  },
];

export default SectionFeatures;
