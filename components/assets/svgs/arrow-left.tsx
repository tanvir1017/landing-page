import { cn } from "@/lib/utils";

function ArrowLeft({ className }: { className?: string }) {
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
        d="M0.75 5.74715L14.0845 5.74715M5.74666 0.75L0.750001 5.74984L5.74666 10.75"
        stroke="#344054"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowLeft;
