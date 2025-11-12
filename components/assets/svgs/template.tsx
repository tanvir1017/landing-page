import { cn } from "@/lib/utils";

const TemplateIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M12.6484 8.64941L0.648438 8.64941M6.64844 12.6499V8.64978M0.648438 1.7749L0.648438 11.5249C0.648437 12.1462 1.15212 12.6499 1.77344 12.6499H11.5234C12.1448 12.6499 12.6484 12.1462 12.6484 11.5249V1.7749C12.6484 1.15358 12.1448 0.649903 11.5234 0.649903L1.77344 0.649902C1.15212 0.649902 0.648438 1.15358 0.648438 1.7749Z"
        stroke="#6B7280"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TemplateIcon;
