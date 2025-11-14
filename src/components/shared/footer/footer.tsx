import DiscordIcon from "@/src/assets/svgs/discord";
import GithubIcon from "@/src/assets/svgs/github";
import SiteLogo from "@/src/assets/svgs/Logo";
import TwitterIcon from "@/src/assets/svgs/twitter-x";
import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";
import { cn } from "@/src/lib/utils";
import { Geist_Mono } from "next/font/google";
import { SectionBorder } from "../../style-componenets/section-border";
import Container from "../container";
import FooterProducts from "./footer-products";
import SiteMapLink from "./sitemap-link";
const geistMono = Geist_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono-sans",
  subsets: ["latin-ext"],
});
const Footer = () => {
  return (
    <Container className="max-w-full">
      <div className={SectionBorder.wrapper("top")}>
        <div className="relative mb-[86px] mt-sec-gap  md:mx-10 mx-2 ">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-sec-gap">
            <div className="col-span-2">
              <div className="mb-12 space-y-7">
                <SiteLogo className="" />
                <p className="text-[#6B7280] leading-6 max-w-md!">
                  Browse and effortlessly copy-paste from over 800+ components
                  and templates to craft high-quality, custom Tailwind CSS
                  websites without coding.
                </p>
              </div>

              <div className="space-x-1.5">
                <StyledButtons.Icons className=" h-8 w-8 ">
                  <TwitterIcon />
                </StyledButtons.Icons>
                <StyledButtons.Icons className=" h-8 w-8 ">
                  <GithubIcon />
                </StyledButtons.Icons>
                <StyledButtons.Icons className="h-8 w-8">
                  <DiscordIcon />
                </StyledButtons.Icons>
              </div>
            </div>
            <SiteMapLink />
          </div>
        </div>
      </div>
      <FooterProducts />
      <CopyRightText />
    </Container>
    //   </div>
    // </div>
  );
};

function CopyRightText() {
  return (
    <div className="bg-[#F3F4F6] py-4 md:px-10 px-3 md:space-y-2 space-y-3 text-[#6B7280] text-sm leading-5 tracking-[-0.2px] border-y">
      <p className={cn(" font-medium", geistMono.className)}>
        © Copyright 2025 - All rights reserved.
      </p>
      <p className="">
        The Tailwind name and logos are trademarks of Tailwind Labs Inc. is not
        affiliated with, associated with, or part of Tailwind Labs or the
        official Tailwind CSS.
      </p>
    </div>
  );
}

export default Footer;
