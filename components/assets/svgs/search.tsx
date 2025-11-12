import { cn } from "@/lib/utils";

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M14.3835 14.3831L17.7086 17.7081M16.4596 9.37412C16.4596 13.2852 13.2883 16.4558 9.3763 16.4558C5.46429 16.4558 2.29297 13.2852 2.29297 9.37412C2.29297 5.46304 5.46429 2.29248 9.3763 2.29248C13.2883 2.29248 16.4596 5.46304 16.4596 9.37412Z"
        stroke="#344054"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
