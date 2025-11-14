import { cn } from "@/src/lib/utils";

const AlertIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <g clip-path="url(#clip0_16106_25297)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.52 5.88439C20.7511 3.7529 23.828 3.75288 25.0588 5.88439L41.1612 33.7742C42.392 35.9064 40.8534 38.5713 38.3914 38.5713H6.18741C3.72544 38.5713 2.18663 35.9064 3.4176 33.7742L19.52 5.88439ZM20.9999 28.7477V31.3275H23.5789V28.7477H20.9999ZM20.9999 18.4318V26.1687H23.5789V18.4318H20.9999Z"
          fill="#EF4444"
        />
      </g>
      <defs>
        <clipPath id="clip0_16106_25297">
          <rect width="44.5714" height="44.5714" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AlertIcon;
