"use client";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { ProfileDropDown } from "../dashboard/profile-dropdown";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Navigation } from "./navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="border-b mt-5"></div>
      <div className="border-b p-5 w-full">
        <div className="max-w-full mx-[150px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start space-x-11">
              <div onClick={() => router.push("/")} className="cursor-pointer">
                <Image
                  src="/assets/Logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
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
                  <Button className="bg-white border py-4 px-3 hover:bg-inherit cursor-pointer">
                    <Image
                      src="/assets/twitter-x.svg"
                      alt="twitter"
                      width={24}
                      height={24}
                      className=""
                    />
                  </Button>
                  <Button className="bg-white border py-4 px-3 hover:bg-inherit cursor-pointer">
                    <Image
                      src="/assets/github.svg"
                      alt="twitter"
                      width={24}
                      height={24}
                      className=""
                    />
                  </Button>
                  <Button className="bg-white border py-4 px-3 hover:bg-inherit cursor-pointer">
                    <Image
                      src="/assets/discord.svg"
                      alt="twitter"
                      width={24}
                      height={24}
                      className=""
                    />
                  </Button>
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
                  <ProfileDropDown />
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
