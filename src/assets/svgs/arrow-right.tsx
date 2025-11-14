import { cn } from "@/src/lib/utils";

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M14.0845 5.74715L0.75 5.74715M9.08781 0.75L14.0845 5.74984L9.08781 10.75"
        stroke="#344054"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowRight;
