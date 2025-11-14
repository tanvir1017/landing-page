"use client";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

const FooterProducts = () => {
  const isMobile = useIsMobile();
  return (
    <div>
      <div className="mb-5 md:ml-10 text-center md:text-left">
        <p className="leading-6 text-[#374151] ">Explore our others products</p>
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3">
        {productsSrc.map((product, index) => (
          <div
            key={product.id}
            className={cn(
              "md:px-10 px-2 py-5.5 border-t flex items-center justify-center ",
              {
                "md:border-r": index !== productsSrc.length - 1,
                "border-r": isMobile,
                "md:border-l-0 border-l": index === 0 || index === 3,
              }
            )}
          >
            <Image
              src={product.src}
              alt={product.title}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const productsSrc = [
  {
    id: 1,
    src: "/assets/lineicons.png",
    title: "Line Icons",
  },
  {
    id: 2,
    src: "/assets/tailadmin.png",
    title: "Tailadmin",
  },
  {
    id: 3,
    src: "/assets/nextjstemplates.png",
    title: "Next Js Templates",
  },
  {
    id: 4,
    src: "/assets/formbold.png",
    title: "Form Bold",
  },
  {
    id: 5,
    src: "/assets/graygrids.png",
    title: "Gray Grids",
  },
  {
    id: 6,
    src: "/assets/uideck.png",
    title: "UI Deck",
  },
];

export default FooterProducts;
