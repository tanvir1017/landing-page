import { cn } from "@/src/lib/utils";

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <g filter="url(#filter0_i_16106_20667)">
        <path
          d="M4 12H11.75M7.99928 8L4.00195 11.9999L7.99928 16M9.75 4.99609V4.25C9.75 3.42157 10.4216 2.75 11.25 2.75H17.25C18.0784 2.75 18.75 3.42157 18.75 4.25V19.75C18.75 20.5784 18.0784 21.25 17.25 21.25H11.25C10.4216 21.25 9.75 20.5784 9.75 19.75V19"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_16106_20667"
          x="3.25"
          y="2"
          width="16.25"
          height="20.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.5" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.121569 0 0 0 0 0.160784 0 0 0 0 0.215686 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_16106_20667"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default LogoutIcon;
