import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <section className={cn("max-w-[88.2%] mx-auto w-full", className)}>
      {children}
    </section>
  );
}
