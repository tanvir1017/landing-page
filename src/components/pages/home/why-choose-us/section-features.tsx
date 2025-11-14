import AutoLayoutIcon from "@/src/assets/svgs/auto-layout";
import FigmaIcon from "@/src/assets/svgs/figma";
import FigmaGrayIcon from "@/src/assets/svgs/figma-gray";
import ThemeIcon from "@/src/assets/svgs/theme";
import { FeaturesSection } from "@/src/components/style-componenets/featuers-section";
import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";
import { T_FeatureItem } from "@/types";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const SectionFeatures = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <FeaturesSection.SectionWrapper>
        <FeaturesSection.SectionContent className="mr-0">
          <FeaturesSection.SectionTitle>
            Built with Figma's latest features
          </FeaturesSection.SectionTitle>
          <FeaturesSection.FeatureSection items={featureItems} className="" />

          <div className="flex items-center justify-center md:justify-start space-x-3 mt-11 ">
            <StyledButtons.Icons className="cursor-pointer h-11! md:w-[191.64px] w-[140px] px-3.5">
              <FigmaIcon className="size-6" />{" "}
              <span className="text-[#1F2937] flex items-center">
                Preview{" "}
                <span className="md:flex hidden items-center text-black/70 ml-0.5 ">
                  - Figma <ChevronRightIcon className="w-4 h-4" />
                </span>{" "}
              </span>
            </StyledButtons.Icons>

            <StyledButtons.PrimaryNeviBlue className="md:w-[191.64px] w-[140px] h-11! px-3.5">
              Buy now{" "}
              <span className="space-x-1 md:flex hidden items-center justify-center text-white/75">
                <span>- One-time</span>
                <ChevronRightIcon className="w-4 h-4" />
              </span>
            </StyledButtons.PrimaryNeviBlue>
          </div>
        </FeaturesSection.SectionContent>
        <FeaturesSection.SectionContent className="pt-10 md:pt-0">
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
