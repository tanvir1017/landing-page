import Navbar from "@/src/components/shared/navbar/navbar";
import { auth } from "@/src/lib/auth";
import { dmSans } from "@/src/lib/fonts";
import { T_MenuItem } from "@/types";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Toaster } from "sonner";
import { DiagonalPattern } from "../components/style-componenets/diagonal-stripes";
import { getNavMenu } from "./actions/fetch-data";

// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  //title: "Pimjo Task ",
  title: "Landing Page",
  description:
    "The ultimate Figma to code platform for developers and designers. Seamlessly convert your Figma designs into clean, responsive code with Pimjo's AI-powered tools. Boost your productivity and streamline your workflow today.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const megaMenu = (await getNavMenu()) as T_MenuItem[];

  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased relative isolate `}>
        <Navbar session={session} megaMenu={megaMenu} />
        {/* <PatternWrapper>{children}</PatternWrapper> */}
        <DiagonalPattern.DiagonalPatternWrapper>
          {children}
        </DiagonalPattern.DiagonalPatternWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
