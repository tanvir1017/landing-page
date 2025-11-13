import { StyledButtons } from "@/components/style-componenets/styled-buttons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileNavbarSlider() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <StyledButtons.Icons className="h-8 w-8 rounded-md">
          <Menu className="size-4 text-[#1f2937]" />
        </StyledButtons.Icons>
      </SheetTrigger>
      <SheetContent className="w-full min-h-dvh">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <h2>hello</h2>
          </div>
          <div className="grid gap-3">
            <h2>hello</h2>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
