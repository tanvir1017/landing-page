import DiscordIcon from "@/src/assets/svgs/discord";
import GithubIcon from "@/src/assets/svgs/github";
import TwitterIcon from "@/src/assets/svgs/twitter-x";
import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { logout } from "@/src/lib/auth-client";
import { SessionContext, T_MenuItem } from "@/types";
import { ChevronRight, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MobileNavbarSlider({
  session,
  megaMenu,
}: {
  session: SessionContext | null;
  megaMenu: T_MenuItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const megaMenuItems = megaMenu.filter((item) => item.type === "mega");
  const simpleMenuItems = megaMenu.filter((item) => item.type !== "mega");

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <StyledButtons.Icons className="h-8 w-8 rounded-md">
          <Menu className="size-4 text-[#1f2937]" />
        </StyledButtons.Icons>
      </SheetTrigger>
      <SheetContent className="w-full min-h-dvh overflow-y-auto flex flex-col">
        <SheetHeader>
          <SheetTitle className="">
            <Link href="/">
              <Image
                src="/assets/Logo.svg"
                alt="Site Logo"
                width={101}
                height={40}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>

        {/* Main Menu Content */}
        <div className="flex-1 ">
          {/* User Profile Section - When Authenticated */}
          {session?.user && (
            <div className="mb-6  border-b">
              <div className="px-4 py-3  rounded-lg flex items-center space-x-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1F2937] truncate">
                    {session.user.name || "User"}
                  </p>
                  <p className="text-xs text-[#6B7280] truncate">
                    {session.user.email}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Simple Navigation Links */}
          {simpleMenuItems.length > 0 && (
            <div className="mb-6 space-y-2">
              {simpleMenuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href || "#"}
                  onClick={closeSheet}
                  className="block px-4 py-2.5 text-[#1F2937] font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mega Menu Items */}
          {megaMenuItems.length > 0 && (
            <div className="space-y-4">
              {megaMenuItems.map((item) => (
                <div key={item.id} className="px-2">
                  <h3 className="px-2 py-1.5 text-sm font-semibold text-[#6B7280] uppercase tracking-wide">
                    {item.label}
                  </h3>
                  {item.columns && (
                    <div className="space-y-1.5">
                      {item.columns.map((column, idx) => (
                        <Link
                          key={idx}
                          href={column.href || "#"}
                          onClick={closeSheet}
                          className="flex items-start justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-[#1F2937] group-hover:text-[#1F2937]">
                              {column.title}
                            </p>
                            <p className="text-xs text-[#6B7280] line-clamp-2">
                              {column.description}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#1F2937] shrink-0 ml-2 mt-0.5" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Section - Social & Auth */}
        <div className="border-t pt-6 pb-4 space-y-4">
          {/* Social Icons */}
          <div className="flex items-center justify-between space-x-2 px-2">
            <span className="text-xs font-semibold text-[#6B7280] uppercase">
              Follow us :
            </span>
            <div className="flex space-x-1.5">
              <StyledButtons.Icons className="h-8 w-8">
                <TwitterIcon />
              </StyledButtons.Icons>
              <StyledButtons.Icons className="h-8 w-8">
                <GithubIcon />
              </StyledButtons.Icons>
              <StyledButtons.Icons className="h-8 w-8">
                <DiscordIcon />
              </StyledButtons.Icons>
            </div>
          </div>

          {/* Auth & CTA Buttons */}
          <div className="flex flex-col space-y-2 px-2">
            {session ? (
              <StyledButtons.PrimaryNeviBlue
                onClick={() => {
                  logout();
                  closeSheet();
                }}
                className="w-full"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign out</span>
              </StyledButtons.PrimaryNeviBlue>
            ) : (
              <Link
                href="/sign-in"
                onClick={closeSheet}
                className="px-4 py-2.5 text-center text-sm font-medium text-[#1F2937] border border-[#E5E7EB] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Sign in
              </Link>
            )}
            <StyledButtons.PrimaryNeviBlue className="rounded-lg h-auto py-2.5 w-full">
              Pricing & FAQ
            </StyledButtons.PrimaryNeviBlue>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
