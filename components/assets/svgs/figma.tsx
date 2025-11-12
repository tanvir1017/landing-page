import { cn } from "@/lib/utils";

const FigmaIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M12 12C12 10.3428 13.3428 9 15 9C16.6572 9 18 10.3428 18 12C18 13.6572 16.6572 15 15 15C13.3428 15 12 13.6572 12 12Z"
        fill="#1ABCFE"
      />
      <path
        d="M6 18C6 16.3428 7.3428 15 9 15H12V18C12 19.6572 10.6572 21 9 21C7.3428 21 6 19.6572 6 18Z"
        fill="#0ACF83"
      />
      <path
        d="M12 3V9H15C16.6572 9 18 7.6572 18 6C18 4.3428 16.6572 3 15 3H12Z"
        fill="#FF7262"
      />
      <path
        d="M6 6C6 7.6572 7.3428 9 9 9H12V3H9C7.3428 3 6 4.3428 6 6Z"
        fill="#F24E1E"
      />
      <path
        d="M6 12C6 13.6572 7.3428 15 9 15H12V9H9C7.3428 9 6 10.3428 6 12Z"
        fill="#A259FF"
      />
    </svg>
  );
};

export default FigmaIcon;
