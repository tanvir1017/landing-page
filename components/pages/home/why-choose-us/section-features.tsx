import AutoLayoutIcon from "@/components/assets/svgs/auto-layout";
import FigmaIcon from "@/components/assets/svgs/figma";
import FigmaGrayIcon from "@/components/assets/svgs/figma-gray";
import ThemeIcon from "@/components/assets/svgs/theme";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const SectionFeatures = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="grid grid-cols-2 items-center  border space-x-20">
        <div className="col-span-1 pl-[60px]">
          <h3 className="text-4xl font-bold text-title-text max-w-xl">
            Built with Figma's latest features
          </h3>

          <div className="mt-8 space-y-6 max-w-xl">
            <div className="flex items-center justify-center space-x-6">
              <StyledButtons.Icons className="shadow-[0px_0px_0px_2px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-12">
                <FigmaGrayIcon className="size-6" />
              </StyledButtons.Icons>

              <div>
                <p>
                  Built with Figma's latest and coolest features to make your
                  workflow smarter and faster.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <StyledButtons.Icons className="shadow-[0px_0px_0px_2px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-12">
                <AutoLayoutIcon className="size-6" />
              </StyledButtons.Icons>
              <div>
                <p>
                  Fully compatible with Auto Layout 5.0 across all pages,
                  components, and UI kits.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <StyledButtons.Icons className="shadow-[0px_0px_0px_2px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-12">
                <ThemeIcon className="size-6" />
              </StyledButtons.Icons>

              <div>
                <p>
                  Switch between Light and Dark modes effortlessly with Figma's
                  variables for every UI component and block, all in one click.
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
        <div className="col-span-1  p-4">
          <Image
            src="/assets/latest-features1.png"
            alt="why-choose-us"
            className=""
            width={660}
            height={564}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
