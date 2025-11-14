import { cn } from "@/src/lib/utils";
import React from "react";

type BorderPosition = "top" | "bottom" | "left" | "right" | "both";

/**
 * SectionBorder Component
 * Renders a 1px border that spans full width, overflowing grid columns
 * Uses ::before and ::after pseudo-elements for top and bottom borders
 *
 * @param position - 'top' | 'bottom' | 'both' (default: 'both')
 * @param className - Optional custom Tailwind classes
 *
 * @example
 * // Both borders (top and bottom)
 * <div className={SectionBorder.wrapper()}>
 *   Content here
 * </div>
 *
 * // Top border only
 * <div className={SectionBorder.wrapper('top')}>
 *   Content here
 * </div>
 *
 * // Bottom border only
 * <div className={SectionBorder.wrapper('bottom')}>
 *   Content here
 * </div>
 */

const createBorderClass = (position: BorderPosition = "both"): string => {
  const baseClass =
    "relative before:absolute after:absolute before:left-0 after:left-0 before:w-screen after:w-screen before:h-px after:h-px before:bg-(--pattern-fg) after:bg-(--pattern-fg) before:-translate-x-1/2 after:-translate-x-1/2 before:left-1/2 after:left-1/2";

  const positionClass =
    position === "top"
      ? "before:top-0 before:block after:hidden"
      : position === "bottom"
      ? "before:hidden after:bottom-0 after:block"
      : "before:top-0 after:bottom-0 before:block after:block";

  return cn(baseClass, positionClass);
};

/**
 * Wrapper function to apply border styles to any element
 * @param position - 'top' | 'bottom' | 'both' (default: 'both')
 * @returns CSS class string for the element
 *
 * @example
 * <section className={SectionBorder.wrapper('top')}>
 *   Your content
 * </section>
 */
const wrapper = (position: BorderPosition = "both", className?: string) => {
  return cn(createBorderClass(position), className);
};

/**
 * SectionBorderWrapper Component
 * Pre-built component that wraps content with full-width borders
 * Useful when you want a component instead of just a class string
 */
const SectionBorderWrapper: React.FC<{
  position?: BorderPosition;
  children: React.ReactNode;
  className?: string;
}> = ({ position = "both", children, className }) => {
  return <div className={wrapper(position, className)}>{children}</div>;
};

export const SectionBorder = {
  wrapper,
  SectionBorderWrapper,
};
