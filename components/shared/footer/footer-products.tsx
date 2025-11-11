import { cn } from "@/lib/utils";
import Image from "next/image";

const FooterProducts = () => {
  return (
    <div>
      <div className="mb-5 ml-10">
        <p className="leading-6 text-[#374151] ">Explore our others products</p>
      </div>

      <div className="grid grid-cols-6 align-middle items-center">
        {productsSrc.map((product, index) => (
          <div
            key={product.id}
            className={cn(
              "px-10 py-5.5 border-t flex items-center justify-center",
              {
                "border-r": index !== productsSrc.length - 1,
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
