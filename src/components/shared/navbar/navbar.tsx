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
import { ChevronRight, SearchIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";
import { StyledButtons } from "../../style-componenets/styled-buttons";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import Container from "../container";
import { Navigation } from "../navigation";
import { MobileNavbarSlider } from "./sheet";

const Navbar = ({ session }: { session: SessionContext | null }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <div className="sticky top-0 mx-auto z-50 border-b bg-white max-w-full">
      <Container className="max-w-full  md:max-w-[92.3%]  md:border-x">
        {isVisible && (
          <div className={"px-6 py-3 border-b"}>
            <VersionNoticeTopBar
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          </div>
        )}
        <div className="md:px-8 px-0 md:py-5 py-0">
          <DesktopNavbar session={session} megaMenu={megaMenu} />
        </div>
      </Container>

      <MobileNavbar session={session} megaMenu={megaMenu} />
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
        <div className="flex items-center justify-between p-3">
          <div onClick={() => router.push("/")} className="cursor-pointer">
            <Image
              src="/assets/site-logo.png"
              alt="Site Logo"
              width={96}
              height={24}
            />
          </div>
          <div className="cursor-pointer">
            <MobileNavbarSlider megaMenu={megaMenu} session={session} />
          </div>
        </div>
      </Container>
    </div>
  );
};

const VersionNoticeTopBar = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!isVisible) return null;
  return (
    <div className="w-full bg-sec rounded-xl  text-center py-3">
      <div className="flex items-center justify-between">
        <div></div>
        <div className="space-x-2.5">
          <span className="text-sm leading-5 tracking-[-0.2px] text-[#6B7280] ">
            {" "}
            We just raised our biggest updates -{" "}
            <br className="block md:hidden " />
            <span className="font-semibold">Brand V3.0 🎉</span>
          </span>
          <StyledButtons.Icons className="md:inline-flex items-center hidden text-[#374151] text-xs font-medium leading-4 tracking-[-0.2px] rounded-full cursor-pointer">
            Check it out
            <ChevronRight className="ml-2 h-4 w-4" />
          </StyledButtons.Icons>

          <Link
            href="/blog/introducing-pimjo-v3-our-biggest-update-yet"
            className="inline-flex items-center text-[#374151] text-sm italic underline font-medium leading-4 tracking-[-0.2px] rounded-full cursor-pointer md:hidden"
          >
            Check it out <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <Button
          onClick={() => setIsVisible(false)}
          className="bg-sec hover:bg-sec mr-2 cursor-pointer"
        >
          <X className="text-[#9CA3AF] size-5 cursor-pointer" />
        </Button>
      </div>
    </div>
  );
};

const megaMenu = [
  {
    id: "components",
    label: "Components",
    type: "mega",
    columns: [
      {
        title: "Application",
        description:
          "Components crafted for building all kinds of modern webapps and sites",
        icon: "layout",
        href: "/components/application",
      },
      {
        title: "Dashboard",
        description:
          "Build data-rich modern backends, dashboards and admin panels",
        icon: "bar-chart",
        href: "/components/dashboard",
      },
      {
        title: "AI Components",
        description:
          "Everything you need to create stunning AI tools and landing pages",
        icon: "sparkles",
        href: "/components/ai",
      },
      {
        title: "Marketing",
        description:
          "All you need to create stunning and high-converting landing pages",
        icon: "megaphone",
        href: "/components/marketing",
      },
      {
        title: "E-commerce",
        description:
          "Components and pages you need to build a complete online store UI",
        icon: "shopping-cart",
        href: "/components/ecommerce",
      },
      {
        title: "Core Components",
        description:
          "Core UI components to kickstart any web project – Open-source",
        icon: "grid",
        href: "/components/core",
      },
    ],
  },
  {
    id: "templates",
    label: "Templates",
    href: "/templates",
  },
  {
    id: "docs",
    label: "Docs",
    href: "/docs",
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
  },
];

export default Navbar;
