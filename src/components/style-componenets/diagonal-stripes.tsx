import { cn } from "@/src/lib/utils";
import React from "react";

type DiagonalPosition = "left" | "right";
type BorderPosition = "top" | "bottom";

// Pattern constant for reusable diagonal pattern
const DIAGONAL_PATTERN =
  "bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed";

const DiagonalPatternWrapper: React.FC<{
  className?: string;
  children: React.ReactNode;
  position?: DiagonalPosition;
}> = ({ children, className, position = "left" }) => {
  return (
    <div
      className={cn(
        "relative grid min-h-dvh  sm:grid-cols-[4.5rem_2.5rem_auto_2.5rem_4.5rem] grid-rows-[1fr_1px_auto_1px_1fr]  [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10",
        className
      )}
    >
      <DiagonalChildren>{children}</DiagonalChildren>
      <DiagonalStripes position={position} side="first" />
      <DiagonalStripes position={position} side="second" />
      {/* <DiagonalBorder position="top" />
      <DiagonalBorder position="bottom" /> */}
    </div>
  );
};

const DiagonalChildren: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "col-start-3 row-start-3 max-w-full flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * DiagonalStripes Component
 * Renders diagonal striped pattern for left/right sides of sections
 *
 * @param position - 'left' or 'right' determines which side the stripes appear
 * @param side - 'first' or 'second' for multiple stripe dividers
 * @param className - Optional custom Tailwind classes
 * @param children - Optional content inside the stripes
 *
 * @example
 * <DiagonalStripes position="left" side="first" />
 * <DiagonalStripes position="right" side="second" className="custom-class" />
 */
const DiagonalStripes: React.FC<{
  position?: DiagonalPosition;
  side?: "first" | "second";
  children?: React.ReactNode;
  className?: string;
}> = ({ position = "left", side = "first", children, className }) => {
  // Position styles based on left/right configuration
  const positionStyles =
    position === "left"
      ? side === "first"
        ? "-right-px col-start-2 row-span-full row-start-1 border-x"
        : "-left-px col-start-4 row-span-full row-start-1 border-x"
      : side === "first"
      ? "-left-px col-start-4 row-span-full row-start-1 border-x"
      : "-right-px col-start-2 row-span-full row-start-1 border-x";

  return (
    <div
      className={cn(
        "relative border-x-(--pattern-fg)",
        positionStyles,
        DIAGONAL_PATTERN,
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * DiagonalBorder Component
 * Renders horizontal borders (top or bottom) with pattern styling
 *
 * @param position - 'top' or 'bottom' determines border placement
 * @param className - Optional custom Tailwind classes
 *
 * @example
 * <DiagonalBorder position="top" />
 * <DiagonalBorder position="bottom" className="opacity-50" />
 */
const DiagonalBorder: React.FC<{
  position?: BorderPosition;
  className?: string;
}> = ({ position = "bottom", className }) => {
  const positionStyles =
    position === "bottom"
      ? "-bottom-px row-start-2 relative col-span-full bg-red-500 col-start-1 h-px"
      : "-top-px col-span-full col-start-1 row-start-4 h-px";

  return <div className={cn("bg-(--pattern-fg)", positionStyles, className)} />;
};

export const DiagonalPattern = {
  DiagonalPatternWrapper,
  DiagonalChildren,
  DiagonalStripes,
  DiagonalBorder,
};
