import Container from "@/src/components/shared/container";
import { SectionBorder } from "@/src/components/style-componenets/section-border";
import { Breaker } from "@/src/components/style-componenets/section-heros";
import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";
import { Input } from "@/src/components/ui/input";
import { geistMono } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import { ChevronRight, Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <Container className="max-w-full relative">
      <Breaker />
      <div className={SectionBorder.wrapper("both", "mt-sec-gap bg-[#030712]")}>
        <EmptyGrid />
        <SectionBorder.SectionBorderWrapper
          className={SectionBorder.wrapper(
            "both",
            " border-[#1A1E28] md:border-y "
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-5  space-y-4 md:space-y-0">
            <div className="md:border-r border-r-0 md:border-[#1A1E28] flex items-center justify-center">
              <h4
                className={cn(
                  "text-white font-medium text-4xl leading-10 tracking-[-2px]",
                  geistMono.className
                )}
              >
                Newsletter
              </h4>
            </div>
            <div className="col-span-2  md:border-r border-r-0 md:border-[#1A1E28]">
              <p className="text-[#9CA3AF] text-base leading-6 tracking-[-0.2px] py-[7.5px] md:pl-0.5 md:pr-0 pl-3 pr-3 max-w-md text-center md:text-left ">
                Get fresh updates, free resources, exclusive offers, and product
                news—straight to your inbox.
              </p>
            </div>
            <div className="col-span-2">
              <form>
                <div className="relative overflow-hidden">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <Input
                    placeholder="Enter your email address"
                    className="pl-10 py-3 h-[63px] w-full pr-2 rounded-none border-none bg-[#111827] text-white placeholder:text-slate-500"
                    required
                  />
                  <StyledButtons.PrimaryCTA
                    type="button"
                    className="pl-6 pr-5 py-[11px] md:w-[149px] w-[129px] h-[46px] absolute right-3 top-1/2 -translate-y-1/2 md:flex items-center justify-center hidden"
                  >
                    Get Offers <ChevronRight />
                  </StyledButtons.PrimaryCTA>
                </div>
                <StyledButtons.PrimaryCTA
                  type="button"
                  className="w-[149px] h-[46px] mt-4 md:hidden flex items-center justify-center mx-auto z-20 cursor-pointer"
                >
                  Get Offers <ChevronRight />
                </StyledButtons.PrimaryCTA>
              </form>
            </div>
          </div>
        </SectionBorder.SectionBorderWrapper>
        <EmptyGrid />
      </div>
    </Container>
  );
};

export const EmptyGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-1 md:border-r md:border-[#1A1E28] pt-20"></div>
      <div className="col-span-2 md:border-r border-r-0 md:border-[#1A1E28]"></div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default NewsLetter;
