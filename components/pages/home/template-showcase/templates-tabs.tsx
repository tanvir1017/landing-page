import FigmaIcon from "@/components/assets/svgs/figma";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const TemplateTabs = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="py-5 px-10">
        <div className="tabs-btns space-x-1">
          {/* <StyledButtons.Icons className="h-[34px] w-[120px] py-[7px] pl-2.5 pr-3 text-[#1F2937] rounded-full"> */}
          <StyledButtons.Icons className="bg-white hover:bg-white cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] transition-all duration-75 rounded-full text-[#1F2937] font-medium leading-6 tracking-[-0.2px]">
            All Templates
          </StyledButtons.Icons>

          <StyledButtons.Icons className="bg-[#F3F4F6] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] transition-all cursor-pointer shadow-none border-transparent rounded-full  border text-[#374151] hover:text-[#1F2937] font-medium leading-6 tracking-[-0.2px] ">
            Agency
          </StyledButtons.Icons>
          <StyledButtons.Icons className="bg-[#F3F4F6] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] transition-all cursor-pointer shadow-none border-transparent rounded-full  border text-[#374151] hover:text-[#1F2937] font-medium leading-6 tracking-[-0.2px] ">
            Business
          </StyledButtons.Icons>
          <StyledButtons.Icons className="bg-[#F3F4F6] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] transition-all cursor-pointer shadow-none border-transparent rounded-full  border text-[#374151] hover:text-[#1F2937] font-medium leading-6 tracking-[-0.2px] ">
            E-Commerce
          </StyledButtons.Icons>
          <StyledButtons.Icons className="bg-[#F3F4F6] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] transition-all cursor-pointer shadow-none border-transparent rounded-full  border text-[#374151] hover:text-[#1F2937] font-medium leading-6 tracking-[-0.2px] ">
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
                  <span className="text-[#1F2937] font-medium text-sm leading-5 tracking-[-0.2px] flex items-center">
                    Preview{" "}
                    <span className="flex items-center">
                      <span className="text-[#6B7280] ml-1">- Figma</span>{" "}
                      <ChevronRightIcon className="w-4 h-4" />
                    </span>{" "}
                  </span>
                </StyledButtons.Icons>

                {/* Buy Now Button */}
                <StyledButtons.PrimaryNeviBlue className="">
                  <span className="font-medium text-sm leading-5 tracking-[-0.2px] flex items-center">
                    Browse All
                    <span className="space-x-1 flex items-center justify-center text-white/75 font-medium text-sm leading-5 tracking-[-0.2px] ml-1">
                      <span>- Templates</span>
                      <ChevronRightIcon className="w-4 h-4" />
                    </span>
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
