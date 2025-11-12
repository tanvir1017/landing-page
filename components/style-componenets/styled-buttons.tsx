import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Icons = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <Button
      {...props}
      className={cn(
        "bg-white hover:bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] transition-all duration-75 rounded-[9px]",
        className
      )}
    >
      {children}
    </Button>
  );
};

const PrimaryCTA = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <Button
      {...props}
      className={cn(
        "bg-[#3758F9] hover:bg-[#3758F9] shadow-[0px_0px_0px_1px_rgba(34,55,238,100),0_5px_6px_rgba(0,0,0,0.15),inset_0_1px_4px_rgba(255,255,255,0.90)] transition-all duration-75 rounded-3",
        className
      )}
    >
      {children}
    </Button>
  );
};

export const StyledButtons = {
  Icons,
  PrimaryCTA,
};
