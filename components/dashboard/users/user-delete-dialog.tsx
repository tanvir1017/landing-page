import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export function UserDeleteDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="shadow-none border-none bg-none cursor-pointer text-[#323544] hover:text-red-500 "
          variant="outline"
        >
          <Trash2 className="" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="p-10 rounded-[34px]">
        <AlertDialogHeader className="">
          <div className="flex items-center justify-center">
            <div className="bg-linear-to-b from-red-100/75 rounded-full p-5">
              <div className="bg-white shadow p-5 rounded-full">
                <Image
                  src="/assets/alert.svg"
                  alt="delete-alert"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 mb-7 space-y-3">
            <AlertDialogTitle className="text-center">
              Remove User Confirmation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-sm leading-5 tracking-tighter text-[#6B7280] font-light">
              Are you sure you want to remove this user? This action cannot be
              undone and the user's access will be permanently revoked.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center justify-center! space-x-4">
          <AlertDialogCancel className="pl-6 pr-5 py-2.5">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="font-medium outline-none text-[15px] pl-6 pr-5 bg-[#EF4444] hover:bg-[#EF4444] cursor-pointer border-[#B91C1C] border-2 rounded-[12px] hover:bg-none shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,0.5),7px_7px_20px_0px_rgba(0,0,0,0.1),4px_4px_5px_0px_rgba(0,0,0,0.1)]">
            Delete user
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
