import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { Input } from "@/components/ui/input";
import { geistMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ChevronRight, Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="mt-20 border-y ">
      <div className="container mx-auto bg-[#030712]">
        <div className="py-20">
          <div className="grid grid-cols-5 border-y border-[#1A1E28]">
            <div className="col-span-1 border-r border-[#1A1E28] flex items-center justify-center">
              <h4
                className={cn(
                  "text-white font-medium text-4xl leading-10 tracking-[-2px]",
                  geistMono.className
                )}
              >
                Newsletter
              </h4>
            </div>
            <div className="col-span-2 border-r border-[#1A1E28]">
              <p className="text-[#9CA3AF] text-base leading-6 tracking-[-0.2px] py-[7.5px] pl-0.5">
                Get fresh updates, free resources, exclusive offers, and product
                news—straight to your inbox.
              </p>
            </div>
            <div className="col-span-2">
              <form>
                <div className="relative overflow-hidden">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <Input
                    placeholder="Enter your password"
                    className="pl-10 py-3 h-[63px] pr-2 rounded-none border-none bg-slate-900 text-white placeholder:text-slate-500"
                    required
                  />
                  <StyledButtons.PrimaryCTA
                    type="button"
                    className="pl-6 pr-5 py-[11px] w-[149px] h-[46px] absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    Get Offers <ChevronRight />
                  </StyledButtons.PrimaryCTA>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
