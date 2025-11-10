import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const TemplateTabs = () => {
  return (
    <div className="bg-[#F3F4F6] mb-10">
      <div className="border border-r-0 border-l-0 py-5 px-10">
        <div className="tabs-btns space-x-1">
          <Button className="bg-white hover:bg-white border text-black rounded-full">
            All Templates
          </Button>
          <Button className="bg-[#F3F4F6] hover:bg-white border-[#F3F4F6] transition-all hover:shadow-sm cursor-pointer border text-black rounded-full">
            Agency
          </Button>
          <Button className="bg-[#F3F4F6] hover:bg-white border-[#F3F4F6] transition-all hover:shadow-sm cursor-pointer border text-black rounded-full">
            Business
          </Button>
          <Button className="bg-[#F3F4F6] hover:bg-white border-[#F3F4F6] transition-all hover:shadow-sm cursor-pointer border text-black rounded-full">
            E-Commerce
          </Button>
          <Button className="bg-[#F3F4F6] hover:bg-white border-[#F3F4F6] transition-all hover:shadow-sm cursor-pointer border text-black rounded-full">
            Dashboard
          </Button>
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 h-auto font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  Buy now <span>- One-time</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-linear-to-t from-[rgba(243,244,246,100)] to-[rgba(243,244,246,0)] from-25% to-100%  max-h-[250px] h-full absolute bottom-2 w-full"> */}
        {/* <div class="relative w-full h-screen bg-[#c84e55]">
          <div class="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent opacity-80 pointer-events-none"></div>

          <div class="relative z-10 flex items-center justify-center h-full">
            <h1 class="text-white text-5xl font-bold">Your Content Here</h1>
          </div>
        </div> */}
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
