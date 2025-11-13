import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { geistMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const imgSrc = [
  {
    id: 1,
    src: "/assets/avatar1.png",
    alt: "avatar-1",
  },
  {
    id: 2,
    src: "/assets/avatar2.png",
    alt: "avatar-2",
  },
  {
    id: 3,
    src: "/assets/avatar3.png",
    alt: "avatar-3",
  },
  {
    id: 4,
    src: "/assets/avatar4.png",
    alt: "avatar-4",
  },
];

export default function HeroBadge() {
  return (
    <div className="flex items-center justify-center gap-3 mb-8 animation-fade-in border border-[#EDEDED] rounded-full pl-1.5 pr-2 py-1.5 bg-white">
      {/* Avatar Stack */}
      <div className="flex -space-x-2">
        {imgSrc.map(({ src, alt, id }) => (
          <div
            key={id}
            className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
          >
            <Image width={100} height={100} src={src} alt={alt} />
          </div>
        ))}
      </div>

      {/* Text */}
      <div className="flex items-center md:space-x-2  space-x-1">
        <span
          className={cn(
            "text-[#6B7280] md:text-sm text-xs font-normal md:font-medium leading-5 tracking-[-0.2px]",
            geistMono.className
          )}
        >
          Used by 65,000+ Designers worldwide{" "}
        </span>
        <StyledButtons.Icons className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-full w-9 h-[30px] px-1.5 md:flex items-center justify-center hidden">
          <ChevronRight className="inline w-4 h-4  text-black" />
        </StyledButtons.Icons>
      </div>
    </div>
  );
}
