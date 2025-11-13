import FigmaIcon from "@/components/assets/svgs/figma";
import PaletteIcon from "@/components/assets/svgs/palette";
import ShadowIcon from "@/components/assets/svgs/shadow";
import TypoIcon from "@/components/assets/svgs/typo";
import { FeaturesSection } from "@/components/style-componenets/featuers-section";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { T_FeatureItem } from "@/types";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const customizeFeatures: T_FeatureItem[] = [
  {
    Icon: <TypoIcon className="size-6" />,
    description:
      "A precise, versatile, and fully scalable typography system—easily adjustable with a single click from variables panel.",
  },
  {
    Icon: <PaletteIcon className="size-6" />,
    description:
      "Vibrant color palette with 253+ prebuilt colors, extensive shades, and variables fully compatible with Tailwind CSS.",
  },
  {
    Icon: <ShadowIcon className="size-6" />,
    description:
      "Seamless shadow and blur styles designed to ensure consistency across all your designs.",
  },
];

const CustomizedSectionFeatures = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <FeaturesSection.SectionWrapper className="mt-0">
        <FeaturesSection.SectionContent className="">
          <FeaturesSection.SectionImage className="p-0 md:p-4">
            <Image
              src="/assets/customize-mode.png"
              alt="customize-mode"
              className=""
              width={660}
              height={564}
            />
          </FeaturesSection.SectionImage>
        </FeaturesSection.SectionContent>
        <FeaturesSection.SectionContent>
          <FeaturesSection.SectionTitle>
            Style customization made simple
          </FeaturesSection.SectionTitle>

          <FeaturesSection.FeatureSection items={customizeFeatures} />
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
      </FeaturesSection.SectionWrapper>
    </div>
  );
};

export default CustomizedSectionFeatures;
