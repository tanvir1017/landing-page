import DiscordIcon from "@/components/assets/svgs/discord";
import GithubIcon from "@/components/assets/svgs/github";
import SiteLogo from "@/components/assets/svgs/Logo";
import TwitterIcon from "@/components/assets/svgs/twitter-x";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import { cn } from "@/lib/utils";
import { Geist_Mono } from "next/font/google";
import FooterProducts from "./footer-products";
import SiteMapLink from "./sitemap-link";
const geistMono = Geist_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono-sans",
  subsets: ["latin-ext"],
});
const Footer = () => {
  return (
    <div className="mt-20 border-t mb-14">
      <div className="container mx-auto ">
        <div className="relative mb-[86px] mt-20 mx-10 ">
          <div className="grid grid-cols-5 gap-4">
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
        <FooterProducts />
        <CopyRightText />
      </div>
    </div>
  );
};

function CopyRightText() {
  return (
    <div className="bg-[#F3F4F6] py-4 px-10 text-[#6B7280] text-sm leading-5 tracking-[-0.2px] border-y">
      <p className={cn("  font-medium", geistMono.className)}>
        © Copyright 2025 - All rights reserved.
      </p>
      <p>
        The Tailwind name and logos are trademarks of Tailwind Labs Inc. is not
        affiliated with, associated with, or part of Tailwind Labs or the
        official Tailwind CSS.
      </p>
    </div>
  );
}

export default Footer;
