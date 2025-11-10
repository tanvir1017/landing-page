import { Button } from "@/components/ui/button";
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
    <div className="flex items-center justify-center gap-3 mb-8 animation-fade-in border rounded-full pl-1.5 pr-2 py-1.5">
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
      <div className="flex items-center space-x-2">
        <span className="text-[#6B7280]">
          Used by 65,000+ Designers worldwide{" "}
        </span>
        <Button className="bg-white hover:bg-inherit border rounded-2xl">
          <ChevronRight className="inline w-4 h-4  text-black" />
        </Button>
      </div>
    </div>
  );
}
