import { cn } from "@/lib/utils";

const SectionBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      <div className="md:col-span-4 space-y-3 md:space-y-[18px] pt-8 pb-8 pl-0 md:pt-20 md:pb-10 md:pl-10 ">
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

const Breaker = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("border-y h-20 bg-white z-10", className)}>
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
