import { cn } from "@/src/lib/utils";

const ThemeIcon = ({ className }: { className?: string }) => {
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
        d="M9.59875 18.48C4.69447 18.48 0.71875 14.5042 0.71875 9.59997C0.71875 4.69569 4.69447 0.719971 9.59875 0.719971M9.59875 18.48C14.503 18.48 18.4788 14.5042 18.4788 9.59997C18.4788 4.69569 14.503 0.719971 9.59875 0.719971M9.59875 18.48V0.719971M9.59875 5.15997H17.2113M9.59875 14.04H17.2113M9.59875 9.59997H17.8337"
        stroke="#9CA3AF"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ThemeIcon;
