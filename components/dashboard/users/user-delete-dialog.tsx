import AlertIcon from "@/components/assets/svgs/alert";
import { StyledButtons } from "@/components/style-componenets/styled-buttons";
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

      <AlertDialogContent className="p-10 rounded-[34px]">
        <AlertDialogHeader>
          <div className="flex items-center justify-center">
            <div className="bg-linear-to-b from-red-100/75 rounded-full p-5">
              <div className="bg-white shadow p-5 rounded-full">
                <AlertIcon />
              </div>
            </div>
          </div>
          <div className="mt-6 mb-7 space-y-3">
            <AlertDialogTitle className="text-center">
              Remove User Confirmation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-sm text-[#6B7280]">
              Are you sure you want to remove this user? This action cannot be
              undone.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center justify-center space-x-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onDelete(userId)}
            className="bg-[#EF4444] text-white hover:bg-[#D32F2F]"
          >
            Delete user
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
