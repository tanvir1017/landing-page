import React from "react";

const PatternWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative">
      {/* Left Pattern (fixed position) */}
      <div className="fixed left-[72px] top-0 bottom-0 w-10 border-x bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10"></div>

      {/* Right Pattern (fixed position) */}
      <div className="fixed right-[72px] top-0 bottom-0 w-10 border-x bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10"></div>

      {/* Main Content */}
      <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] ">
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default PatternWrapper;
