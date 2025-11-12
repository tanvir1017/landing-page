import FigmaIcon from "@/components/assets/svgs/figma";
import PaletteIcon from "@/components/assets/svgs/palette";
import ShadowIcon from "@/components/assets/svgs/shadow";
import TypoIcon from "@/components/assets/svgs/typo";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const CustomizedSectionFeatures = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="grid grid-flow-col justify-items-stretch items-center space-x-20">
        <div className="justify-self-start p-4">
          <Image
            src="/assets/customize-mode.png"
            alt="why-choose-us"
            className=""
            width={660}
            height={564}
          />
        </div>
        <div className="pl-[60px]">
          <h3 className="text-[40px] text-[#1F2937] font-medium leading-12 tracking-[-1.6px] max-w-lg">
            Style customization made simple
          </h3>

          <div className="mt-8 space-y-6 max-w-xl">
            <div className="flex items-center justify-center space-x-6">
              <StyledButtons.Icons className="shadow-[0px_5px_10px_2px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-12">
                <TypoIcon className="size-6" />
              </StyledButtons.Icons>
              <div>
                <p className="text-[#374151] text-base leading-6 tracking-[-0.2px]">
                  A precise, versatile, and fully scalable typography
                  system—easily adjustable with a single click from variables
                  panel.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <StyledButtons.Icons className="shadow-[0px_5px_10px_2px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-12">
                <PaletteIcon className="size-6" />
              </StyledButtons.Icons>
              <div>
                <p className="text-[#374151] text-base leading-6 tracking-[-0.2px]">
                  Vibrant color palette with 253+ prebuilt colors, extensive
                  shades, and variables fully compatible with Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <StyledButtons.Icons className="shadow-[0px_5px_10px_2px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-12">
                <ShadowIcon className="size-6" />
              </StyledButtons.Icons>
              <div>
                <p className="text-[#374151] text-base leading-6 tracking-[-0.2px]">
                  Seamless shadow and blur styles designed to ensure consistency
                  across all your designs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-x-3 mt-11">
            {/* Preview Figma Button */}
            <StyledButtons.Icons className="cursor-pointer h-11! w-[191.64px] px-3.5">
              <FigmaIcon className="size-6" />{" "}
              <span className="text-[#1F2937] flex items-center">
                Preview{" "}
                <span className="flex items-center text-black/70 ml-0.5">
                  - Figma <ChevronRightIcon className="w-4 h-4" />
                </span>{" "}
              </span>
            </StyledButtons.Icons>

            {/* Buy Now Button */}
            <StyledButtons.PrimaryNeviBlue className="">
              Buy now{" "}
              <span className="space-x-1 flex items-center justify-center text-white/75">
                <span>- One-time</span>
                <ChevronRightIcon className="w-4 h-4" />
              </span>
            </StyledButtons.PrimaryNeviBlue>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedSectionFeatures;
