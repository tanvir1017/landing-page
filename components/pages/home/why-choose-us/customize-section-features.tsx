import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const CustomizedSectionFeatures = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="grid grid-cols-2 items-center  border space-x-20">
        <div className="col-span-1  p-4">
          <Image
            src="/assets/customize-mode.png"
            alt="why-choose-us"
            className=""
            width={660}
            height={564}
          />
        </div>
        <div className="col-span-1 pl-[60px]">
          <h3 className="text-4xl font-bold text-title-text max-w-xl">
            Style customization made simple
          </h3>

          <div className="mt-8 space-y-6 max-w-xl">
            <div className="flex items-center justify-center space-x-6">
              <Button className="bg-white hover:bg-white text-black border">
                Figma
              </Button>
              <div>
                <p>
                  A precise, versatile, and fully scalable typography
                  system—easily adjustable with a single click from variables
                  panel.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <Button className="bg-white hover:bg-white text-black border">
                Figma
              </Button>
              <div>
                <p>
                  Vibrant color palette with 253+ prebuilt colors, extensive
                  shades, and variables fully compatible with Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <Button className="bg-white hover:bg-white text-black border">
                Figma
              </Button>
              <div>
                <p>
                  Seamless shadow and blur styles designed to ensure consistency
                  across all your designs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-x-3 mt-11">
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
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 h-auto font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
              Buy now <span>- One-time</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedSectionFeatures;
