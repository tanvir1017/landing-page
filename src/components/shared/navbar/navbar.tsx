"use client";
import { SessionContext, T_MenuItem } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DiscordIcon from "../../../assets/svgs/discord";
import GithubIcon from "../../../assets/svgs/github";
import SiteLogo from "../../../assets/svgs/Logo";
import TwitterIcon from "../../../assets/svgs/twitter-x";
import { ProfileDropDown } from "../../dashboard/profile-dropdown";

import MacSuper from "@/src/assets/svgs/mac-super";
import { SearchIcon } from "lucide-react";
import { toast } from "sonner";
import { SectionBorder } from "../../style-componenets/section-border";
import { StyledButtons } from "../../style-componenets/styled-buttons";
import { Input } from "../../ui/input";
import Container from "../container";
import { Navigation } from "../navigation";
import { MobileNavbarSlider } from "./sheet";

const Navbar = ({
  session,
  megaMenu,
}: {
  session: SessionContext | null;
  megaMenu: T_MenuItem[];
}) => {
  return (
    <div className="sticky top-0 mx-auto bg-white z-50 max-w-full w-full border-b">
      <div className="mx-auto w-full">
        <div className={SectionBorder.wrapper("both", "md:p-5 p-0 ")}>
          <DesktopNavbar session={session} megaMenu={megaMenu} />
        </div>
        <MobileNavbar session={session} megaMenu={megaMenu} />
      </div>
    </div>
  );
};

export const DesktopNavbar = ({
  session,
  megaMenu,
}: {
  session: SessionContext | null;
  megaMenu: T_MenuItem[];
}) => {
  const router = useRouter();
  return (
    <div className="md:block hidden" id="navbar-desktop">
      <Container className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start space-x-11">
            <Link
              href={"/"}
              onClick={() => router.push("/")}
              className="cursor-pointer"
            >
              <SiteLogo className="w-24! mx-auto" />
            </Link>
            <Navigation megaMenu={megaMenu} />
          </div>

          <div className="">
            <div className="flex items-center space-x-6">
              <div className="flex items-center relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]" />
                <Input
                  placeholder="Quick Search..."
                  className="pl-10 py-3.5 pr-4 w-[250px] h-11 rounded-[12px] border-[#D0D5DD] border"
                />

                <StyledButtons.Icons
                  className="absolute right-1.5 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] h-8 w-12 px-2 py-1.5 rounded-lg cursor-pointer shadow-[0px_0px_0px_1px_rgba(17,24,39,0.1),0_1px_0px_rgba(31,31,31,0.40),inset_0_1px_4px_rgba(255,255,255,0.90)]"
                  onClick={() => toast.info("Not implemented!")}
                >
                  <MacSuper /> K
                </StyledButtons.Icons>
              </div>

              <div className="space-x-1.5">
                <StyledButtons.Icons className=" h-8 w-8 ">
                  <TwitterIcon />
                </StyledButtons.Icons>
                <StyledButtons.Icons className=" h-8 w-8 ">
                  <GithubIcon />
                </StyledButtons.Icons>
                <StyledButtons.Icons className=" h-8 w-8 ">
                  <DiscordIcon />
                </StyledButtons.Icons>
              </div>

              <div className="flex items-center space-x-4">
                {session ? null : (
                  <Link
                    href="/sign-in"
                    className="bg-white leading-5 text-sm  text-[#374151] tracking-[-0.02px] cursor-pointer"
                  >
                    Sign in
                  </Link>
                )}
                <StyledButtons.PrimaryNeviBlue className="h-[46px] w-[147px] rounded-xl">
                  Pricing & FAQ
                </StyledButtons.PrimaryNeviBlue>
                {!session ? null : <ProfileDropDown session={session} />}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const MobileNavbar = ({
  session,
  megaMenu,
}: {
  session: SessionContext | null;
  megaMenu: T_MenuItem[];
}) => {
  const router = useRouter();
  return (
    <div className="md:hidden block" id="navbar-mobile">
      <Container className="max-w-full">
        <div className="flex items-center justify-between px-2.5 py-2">
          <div onClick={() => router.push("/")} className="cursor-pointer">
            <SiteLogo className="w-24! mx-auto" />
          </div>
          <div className="cursor-pointer">
            <MobileNavbarSlider megaMenu={megaMenu} session={session} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
