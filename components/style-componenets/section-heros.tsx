import { cn } from "@/lib/utils";

const SectionBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-6">
          <div className="col-span-4 space-y-[18px] pt-20 pb-10 pl-10">
            {children}
          </div>
          {/* Making extra spaces */}
          <div></div>
        </div>
      </div>
    </div>
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
        "text-[#6B7280] text-lg leading-7 tracking-[-0.2px] max-w-[800px] w-full",
        className
      )}
    >
      {children}
    </p>
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
        "text-[40px] font-medium leading-12 tracking-[-1.6px] text-[#1F2937] max-w-xl",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const SectionHero = {
  SectionBody,
  Subtitle,
  Title,
};
