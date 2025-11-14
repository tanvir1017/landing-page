import { DM_Sans, Geist_Mono } from "next/font/google";
const dmSans = DM_Sans({
  weight: ["400", "500"],
  variable: "--font-dm-mono-sans",
  subsets: ["latin-ext"],
});

const geistMono = Geist_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono-sans",
  subsets: ["latin-ext"],
});

export { dmSans, geistMono };
