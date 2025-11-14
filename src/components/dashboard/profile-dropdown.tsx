"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { logout } from "@/src/lib/auth-client";
import { SessionContext } from "@/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import LogoutIcon from "../../assets/svgs/logout";
import UserIcon from "../../assets/svgs/user-icon";
import { StyledButtons } from "../style-componenets/styled-buttons";

export function ProfileDropDown({
  session,
}: {
  session: SessionContext | null;
}) {
  const router = useRouter();

  const handleSignOut = async () => {
    toast.promise(
      async () => {
        const response = await logout();

        router.refresh();
        return response;
      },
      {
        loading: "Signing out, please wait...",
        success: "Signed out successfully",
        error: (error) => `Error signing out: ${error.message || error}`,
      }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <StyledButtons.PrimaryNeviBlue className="h-[46px] w-[147px] rounded-xl pl-[18px] pr-3.5 py-[11px] flex items-center">
          <UserIcon className="size-6" />{" "}
          <span className="flex items-center space-x-1.5">
            <span>Account</span> <ChevronDown />
          </span>
        </StyledButtons.PrimaryNeviBlue>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[300px] max-h-full rounded-[20px]! p-2 border-stroke border shadow-xl mr-20 mt-[10.5px]"
        align="start"
      >
        {session?.user?.email && (
          <>
            <div className="pl-3.5 pr-6 py-4">
              <p className="text-title-text">{session?.user?.name}</p>
              <p className="text-[#6B7280] text-[14px]">
                {session?.user?.email}
              </p>
            </div>
            <DropdownMenuSeparator className="my-2 bg-[#EDEDED]" />
          </>
        )}

        <DropdownMenuGroup className="">
          <Link href="/dashboard/statics">
            <DropdownMenuItem className="cursor-pointer rounded-[14px] pl-3.5 pr-6 py-3.5 text-title-text text-base font-medium leading-6 tracking-[-0.2px] bg-white hover:bg-[#F3F4F6] gap-x-3">
              <Image
                src="/assets/overview.svg"
                alt="user"
                width={24}
                height={24}
              />{" "}
              Overview
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer  rounded-[14px] pl-3.5 pr-6 py-3.5 text-title-text text-base font-medium leading-6 tracking-[-0.2px] bg-white hover:bg-[#F3F4F6] gap-x-3">
            <Image
              src="/assets/download-arrow.svg"
              alt="user"
              width={24}
              height={24}
            />{" "}
            Downloads
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer  rounded-[14px] pl-3.5 pr-6 py-3.5 text-title-text text-base font-medium leading-6 tracking-[-0.2px] bg-white hover:bg-[#F3F4F6] gap-x-3">
            <Image src="/assets/docs.svg" alt="user" width={24} height={24} />{" "}
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2 bg-[#EDEDED]" />
        {session ? (
          <DropdownMenuItem
            onClick={handleSignOut}
            className="cursor-pointer  rounded-[14px] pl-3.5 pr-6 py-3.5 text-title-text text-base font-medium leading-6 tracking-[-0.2px] bg-white hover:bg-[#F3F4F6] gap-x-3"
          >
            <LogoutIcon className="w-6! h-6!" />
            Log out
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            onClick={() => router.push("/sign-in")}
            className="cursor-pointer  rounded-[14px] pl-3.5 pr-6 py-3.5 text-title-text text-base font-medium leading-6 tracking-[-0.2px] bg-white hover:bg-[#F3F4F6] gap-x-3"
          >
            <LogoutIcon className="w-6! h-6! rotate-180" />
            Log in
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
