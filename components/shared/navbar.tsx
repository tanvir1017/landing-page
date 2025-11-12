"use client";
import { SessionContext } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DiscordIcon from "../assets/svgs/discord";
import GithubIcon from "../assets/svgs/github";
import SiteLogo from "../assets/svgs/Logo";
import TwitterIcon from "../assets/svgs/twitter-x";
import { ProfileDropDown } from "../dashboard/profile-dropdown";

import { StyledButtons } from "../style-componenets/styled-buttons";
import { Input } from "../ui/input";
import { Navigation } from "./navigation";

const Navbar = ({ session }: { session: SessionContext | null }) => {
  const router = useRouter();
  return (
    <div className="sticky top-0  z-10 bg-white">
      <div className="border-b"></div>
      <div className="border-b p-5 w-full">
        <div className="max-w-full mx-[150px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start space-x-11">
              <div onClick={() => router.push("/")} className="cursor-pointer">
                <SiteLogo className="w-24! mx-auto" />
              </div>
              <Navigation />
            </div>

            <div className="right-ctas">
              {/* Search */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-4">
                  <Input placeholder="Quick search..." />
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
                  <Link
                    href="/sign-in"
                    className="bg-white hover:bg-inherit cursor-pointer"
                  >
                    Sign in
                  </Link>
                  <StyledButtons.PrimaryNeviBlue className="h-[42px] w-[123px] rounded-xl">
                    Pricing & FAQ
                  </StyledButtons.PrimaryNeviBlue>
                  <ProfileDropDown session={session} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
