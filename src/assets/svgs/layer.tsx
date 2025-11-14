import { cn } from "@/src/lib/utils";

const LayerIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <g filter="url(#filter0_i_14604_24197)">
        <path
          d="M11.6959 18L4.96087 21.351C3.84638 21.906 3.84638 23.5065 4.96087 24.0615L17.3359 30.219C17.7559 30.4275 18.2464 30.4275 18.6649 30.219L31.0399 24.0615C32.1544 23.5065 32.1544 21.9045 31.0399 21.351L24.3049 18M11.6959 18L4.96087 14.649C3.84638 14.094 3.84638 12.4935 4.96087 11.9385L17.3359 5.78095C17.5425 5.67885 17.7699 5.62573 18.0004 5.62573C18.2309 5.62573 18.4582 5.67885 18.6649 5.78095L31.0399 11.9385C32.1544 12.4935 32.1544 14.094 31.0399 14.649L24.3049 18M11.6959 18L17.3359 20.8065C17.7559 21.015 18.2464 21.015 18.6649 20.8065L24.3049 18"
          stroke="#9CA3AF"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_14604_24197"
          x="2.875"
          y="4.37573"
          width="30.25"
          height="27.7495"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.121569 0 0 0 0 0.160784 0 0 0 0 0.215686 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_14604_24197"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LayerIcon;
