import FigmaIcon from "@/components/assets/svgs/figma";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const TemplateTabs = () => {
  return (
    <div className="bg-[#F3F4F6] mb-10">
      <div className="border border-r-0 border-l-0 py-5 px-10">
        <div className="tabs-btns space-x-1">
          <StyledButtons.Icons className="h-[34px] w-[120px] py-[7px] pl-2.5 pr-3 text-[#1F2937] rounded-full">
            All Templates
          </StyledButtons.Icons>

          <StyledButtons.Icons className="bg-[#F3F4F6] hover:bg-white border-[#F3F4F6] transition-all hover:shadow-sm cursor-pointer border text-black rounded-full">
            Agency
          </StyledButtons.Icons>
          <StyledButtons.Icons className="bg-[#F3F4F6] hover:bg-white border-[#F3F4F6] transition-all hover:shadow-sm cursor-pointer border text-black rounded-full">
            Business
          </StyledButtons.Icons>
          <StyledButtons.Icons className="bg-[#F3F4F6] hover:bg-white border-[#F3F4F6] transition-all hover:shadow-sm cursor-pointer border text-black rounded-full">
            E-Commerce
          </StyledButtons.Icons>
          <StyledButtons.Icons className="bg-[#F3F4F6] hover:bg-white border-[#F3F4F6] transition-all hover:shadow-sm cursor-pointer border text-black rounded-full">
            Dashboard
          </StyledButtons.Icons>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-3 p-10 gap-9 relative pb-[140px]">
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
            <div className="relative h-full w-full flex justify-center">
              <div className="flex items-end justify-center  flex-col sm:flex-row gap-4 mb-16 ">
                <StyledButtons.Icons className="cursor-pointer h-11! w-[191.64px] px-3.5">
                  <FigmaIcon className="size-6" />{" "}
                  <span className="text-[#1F2937] flex items-center">
                    Preview{" "}
                    <span className="flex items-center">
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
      </div>
    </div>
  );
};

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
