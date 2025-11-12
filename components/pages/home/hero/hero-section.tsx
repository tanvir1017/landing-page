import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import HeroBadge from "./hero-badge";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-white via-white to-slate-50 overflow-hidden">
      {/* <AnnouncementBar /> */}

      {/* Main Hero Content */}
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-120px)] pt-16 px-4 md:px-8">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Badge */}
          <HeroBadge />

          {/* Title */}
          <div>
            <h1 className="text-[52px] text-center font-semibold tracking-[-1.5px] text-[#1F2937] text-balance">
              The Ultimate UI Library and Design System for Figma
            </h1>
          </div>

          {/* SUb title */}
          <div className="max-w-2xl">
            <p className="text-[18px]  font-normal leading-7 text-[#1F2937] text-center">
              A complete toolkit for modern designers — 600+ functional Figma UI
              components for landing pages, e-commerce, dashboards, and more.
              Boost your workflow and creativity with our product.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            {/* Preview Figma Button */}
            <Button
              variant="outline"
              className="border-slate-200 border hover:bg-slate-50 rounded-lg px-6 py-3 h-auto bg-transparent"
            >
              <Image
                src="/assets/figma.svg"
                alt="figma"
                width={24}
                height={24}
              />
              Preview <span>- Figma</span>{" "}
              <ChevronRightIcon className="w-4 h-4" />
            </Button>

            {/* Buy Now Button */}
            {/* <StyledButtons.PrimaryCTA className="pl-[18px] pr-3 py-[11px] h-10 w-[191.64px] "> */}
            <StyledButtons.PrimaryCTA className="pl-[18px] pr-3 py-[11px] h-10 w-[191.64px] cursor-pointer">
              Buy now{" "}
              <span className=" text-[rgba(255, 255,255,0.72)] flex space-x-1 items-center">
                <span>- One-time</span>
                <ChevronRightIcon className="w-4 h-4" />
              </span>
            </StyledButtons.PrimaryCTA>
          </div>
        </div>

        {/* Hero section large figma web view image */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
        <div className="">
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
