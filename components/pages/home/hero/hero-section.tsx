import FigmaIcon from "@/components/assets/svgs/figma";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import HeroBadge from "./hero-badge";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('/assets/hero-gradients.png')] bg-no-repeat bg-size-[auto_650px] bg-position-[center_top_0rem]  overflow-hidden h-screen min-h-screen">
      {/* <AnnouncementBar /> */}

      {/* Main Hero Content */}
      <div className="relative flex flex-col items-center justify-center pt-16 px-4 md:px-8 mt-20">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Badge */}
          <HeroBadge />

          {/* Title */}
          <div>
            <h1 className="text-[52px] text-center font-semibold leading-[58px] tracking-[-1.5px] text-[#1F2937] text-balance">
              The Ultimate UI Library and Design System for Figma
            </h1>
          </div>

          {/* SUb title */}
          <div className="max-w-2xl mt-[18px]">
            <p className="text-[18px]  font-normal leading-7 text-[#6B7280] tracking-[-0.2px] text-center">
              A complete toolkit for modern designers — 600+ functional Figma UI
              components for landing pages, e-commerce, dashboards, and more.
              Boost your workflow and creativity with our product.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
            {/* <StyledButtons.PrimaryCTA className="pl-[18px] pr-3 py-[11px] h-10 w-[191.64px] "> */}
            <StyledButtons.PrimaryCTA className="pl-[18px] pr-3 py-[11px] h-11! w-[191.64px] cursor-pointer">
              Buy now{" "}
              <span className="text-slate-300! flex space-x-1 items-center">
                <span>- One-time</span>
                <ChevronRightIcon className="w-4 h-4" />
              </span>
            </StyledButtons.PrimaryCTA>
          </div>
        </div>

        <div className="mt-20">
          <Image
            src="/assets/figma-web-view.jpg"
            alt="hero"
            width={1500}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
