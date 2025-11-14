import { StyledButtons } from "@/src/components/style-componenets/styled-buttons";
import { cn } from "@/src/lib/utils";
import { T_FeatureItem } from "@/types";

const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-flow-row md:grid-flow-col justify-items-stretch items-center space-x-20 md:p-0 p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const SectionImage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("md:justify-self-start  p-0 md:p-4", className)}>
      {children}
    </div>
  );
};

const SectionContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("pl-0 md:pl-[60px]", className)}>{children}</div>;
};

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        `text-[28px] md:text-[40px] text-[#1F2937] font-medium leading-8 md:leading-12 tracking-[-1.6px] max-w-full md:max-w-lg`,
        className
      )}
    >
      {children}
    </h3>
  );
};

const FeatureSection = ({
  items,
  className,
}: {
  items: T_FeatureItem[];
  className?: string;
}) => {
  return (
    <div className={cn("mt-8 space-y-6 md:max-w-xl max-w-full", className)}>
      {items.map(({ Icon, description }, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0"
        >
          <StyledButtons.Icons className="shadow-[0px_5px_10px_2px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-12">
            {Icon}
          </StyledButtons.Icons>

          <div>
            <p className="text-[#374151] text-base leading-6 tracking-[-0.2px]">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const FeaturesSection = {
  SectionWrapper,
  SectionContent,
  SectionImage,
  SectionTitle,
  FeatureSection,
};
