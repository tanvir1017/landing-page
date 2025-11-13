import FigmaIcon from "@/components/assets/svgs/figma";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const TemplateTabs = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="py-5 md:px-10 md:border-b border-b-0">
        <div className="flex items-center flex-wrap md:justify-start justify-center space-y-1 space-x-1">
          <TabButtons />
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-10 md:pt-10 pb-[120px] md:pb-[140px] p-3 gap-9 relative ">
          {cardData.map((card) => (
            <div key={card.id}>
              <Image src={card.imgSrc} alt="card" width={508} height={297} />
              <div className="mt-6 space-y-2">
                <h3 className="font-bold ">{card.title}</h3>
                <p className="text-gray-700 font-medium">{card.description}</p>
              </div>
            </div>
          ))}

          <div className="absolute inset-x-0 bottom-0 h-64 w-full bg-linear-to-t from-[#F3F4F6] via-white/90 to-white/20 opacity-90 pointer-events-none">
            <div className="relative h-full w-full flex justify-center mt-10 ">
              <div className="flex items-center justify-center md:justify-start space-x-3 mt-11 z-10 ">
                <StyledButtons.Icons className="cursor-pointer h-11! md:w-[191.64px] w-[140px] px-3.5">
                  <FigmaIcon className="size-6" />{" "}
                  <span className="text-[#1F2937] flex items-center">
                    Preview{" "}
                    <span className="md:flex hidden items-center text-black/70 ml-0.5 ">
                      - Figma <ChevronRightIcon className="w-4 h-4" />
                    </span>{" "}
                  </span>
                </StyledButtons.Icons>

                <StyledButtons.PrimaryNeviBlue className="cursor-pointer md:w-[191.64px] w-[140px] h-11! px-3.5">
                  Buy now{" "}
                  <span className="space-x-1 md:flex hidden items-center justify-center text-white/75">
                    <span>- One-time</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </span>
                </StyledButtons.PrimaryNeviBlue>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabButtons = () => {
  return (
    <>
      {tabItems.map((item, index) => (
        <StyledButtons.Icons
          key={index}
          className={cn(
            "transition-all duration-75 cursor-pointer rounded-full font-medium leading-6 tracking-[-0.2px]",
            "hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)]",
            "shadow-none border-transparent border",
            "bg-[#F3F4F6]",
            "text-[#374151]",
            index === 0 && "text-[#1F2937]"
          )}
        >
          {item.label}
        </StyledButtons.Icons>
      ))}
    </>
  );
};

const tabItems = [
  { label: "All Templates" },
  { label: "Agency" },
  { label: "Business" },
  { label: "E-Commerce" },
  { label: "Dashboard" },
];

const cardData = [
  {
    id: 1,
    title: "AI Land - Creative AI Template",
    description:
      "Perfect template to build your AI startup website faster in no time.",
    imgSrc: "/assets/ai-land.png",
  },
  {
    id: 2,
    title: "AI Land - Creative AI Template",
    description:
      "Perfect template to build your AI startup website faster in no time.",
    imgSrc: "/assets/ai-land1.png",
  },
  {
    id: 3,
    title: "AI Land - Creative AI Template",
    description:
      "Perfect template to build your AI startup website faster in no time.",
    imgSrc: "/assets/ai-land.png",
  },
];

export default TemplateTabs;
