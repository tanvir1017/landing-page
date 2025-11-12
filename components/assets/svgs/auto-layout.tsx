import { cn } from "@/lib/utils";

const AutoLayoutIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M8.75 0.75V16.75M0.75 8.75H8.75M2.25 16.75H15.25C16.0784 16.75 16.75 16.0784 16.75 15.25V2.25C16.75 1.42157 16.0784 0.75 15.25 0.75H2.25C1.42157 0.75 0.75 1.42157 0.75 2.25V15.25C0.75 16.0784 1.42157 16.75 2.25 16.75Z"
        stroke="#9CA3AF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AutoLayoutIcon;
