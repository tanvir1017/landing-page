"use client";
import { signOutAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SessionContext } from "@/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoutIcon from "../assets/svgs/logout";

export function ProfileDropDown({
  session,
}: {
  session: SessionContext | null;
}) {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className=" hover:bg-[#0f172a] py-6 px-4 bg-[#0f172a] text-white rounded-xl
                [background:radial-gradient(at_top,rgba(255,255,255,0.08)_0%,transparent_70%)_inset,#0f172a]"
        >
          <Image src="/assets/user.svg" alt="user" width={24} height={24} />{" "}
          <span>Account</span> <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[300px] max-h-full rounded-[20px]! p-2 border-stroke border shadow-xl mr-40 mt-[10.5px]"
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
            onClick={signOutAction}
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
