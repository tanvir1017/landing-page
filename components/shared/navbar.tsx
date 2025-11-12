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
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Navigation } from "./navigation";

const Navbar = ({ session }: { session: SessionContext | null }) => {
  const router = useRouter();
  return (
    <div>
      <div className="border-b mt-5"></div>
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
                  <Button
                    className="hover:bg-[#0f172a] py-6 px-4 bg-[#0f172a] text-white rounded-xl
                [background:radial-gradient(at_top,rgba(255,255,255,0.08)_0%,transparent_70%)_inset,#0f172a]
                "
                  >
                    Pricing & FAQ
                  </Button>
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
