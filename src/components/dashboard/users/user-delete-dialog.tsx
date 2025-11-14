import AlertIcon from "@/src/assets/svgs/alert";
import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";
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
} from "@/src/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export function UserDeleteDialog({
  userId,
  onDelete,
}: {
  userId: string;
  onDelete: (id: string) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <StyledButtons.Icons className="shadow-none hover:bg-none bg-transparent border-none cursor-pointer text-[#323544] hover:text-red-500">
          <Trash2 />
        </StyledButtons.Icons>
      </AlertDialogTrigger>

      <AlertDialogContent className="p-10 rounded-[34px] bg-[#F3F4F6]">
        <AlertDialogHeader>
          <div className="flex items-center justify-center">
            <div className="bg-linear-to-b from-red-100/75 rounded-full p-5">
              <div className="bg-white shadow p-5 rounded-full">
                <AlertIcon />
              </div>
            </div>
          </div>
          <div className="mt-6 mb-7 space-y-3">
            <AlertDialogTitle className="text-center text-[#374151] leading-8 text-2xl tracking-[-0.5px] font-medium">
              Remove User Confirmation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-sm leading-5 tracking-[-0.02px] text-[#6B7280]">
              Are you sure you want to remove this user? This action cannot be
              undone and the user's access will be permanently revoked.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center! justify-center! space-x-3">
          <AlertDialogCancel className="bg-white hover:bg-white shadow-[0px_0px_1px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] transition-all duration-75 rounded-[12px]! w-[136px] h-12  cursor-pointer text-[#1F2937] font-medium leading-6 text-base tracking-[-0.02px]">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onDelete(userId)}
            className="bg-[#EF4444] hover:bg-[#EF4444] shadow-[0px_0px_0px_1px_rgba(185,28,28,100),0_5px_6px_rgba(0,0,0,0.15),inset_0_1px_4px_rgba(255,255,255,0.90)] transition-all duration-75 rounded-[12px]! w-[136px] h-12  cursor-pointer text-white  font-medium leading-6 text-base tracking-[-0.02px]"
          >
            Delete user
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
