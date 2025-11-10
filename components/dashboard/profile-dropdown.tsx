import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProfileDropDown() {
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
        <div className="pl-3.5 pr-6 py-4">
          <p className="text-title-text">Musharoff Chowdhury</p>
          <p className="text-[#6B7280] text-[14px]">musharoff@gmail.com</p>
        </div>
        <DropdownMenuSeparator className="my-2 bg-[#EDEDED]" />
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
        <DropdownMenuItem className="cursor-pointer  rounded-[14px] pl-3.5 pr-6 py-3.5 text-title-text text-base font-medium leading-6 tracking-[-0.2px] bg-white hover:bg-[#F3F4F6] gap-x-3">
          <Image src="/assets/logout.svg" alt="user" width={24} height={24} />{" "}
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
