import { cn } from "@/src/lib/utils";

const SectionBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6  md:px-0 px-3">
      <div className="md:col-span-4 space-y-3 md:space-y-[18px] pt-8 pb-8 pl-0 md:pt-20 md:pb-10 md:pl-10">
        {children}
      </div>
      {/* Making extra spaces */}
      <div></div>
    </div>
  );
};

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl leading-10 max-w-full md:text-[40px] font-medium md:leading-12 tracking-[-1.6px] text-[#1F2937] md:max-w-xl",
        className
      )}
    >
      {children}
    </h2>
  );
};

const Subtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-[#6B7280] text-md md:text-lg leading-normal md:leading-7 tracking-[-0.2px] max-w-full md:max-w-[800px] w-full",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Breaker = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative before:absolute after:absolute before:w-screen after:w-screen before:h-20 after:h-20 before:bg-white after:bg-white before:-translate-x-1/2 after:-translate-x-1/2 before:left-1/2 after:left-1/2 before:top-0 after:top-0 before:block after:block z-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SectionHero = {
  SectionBody,
  Subtitle,
  Title,
  Breaker,
};
