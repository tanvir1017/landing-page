"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { usePathname } from "next/navigation";

const components: {
  title: string;
  href: string;
  description: string;
  icon: string;
}[] = [
  {
    title: "Application",
    href: "/",
    description:
      "Components crafted for build all kind of modern webapps and sites.",
    icon: "/images/dashboard.svg",
  },
  {
    title: "Dashboard",
    href: "/",
    description: "Build data-rich modern backends, dashboards and admin panels",
    icon: "/images/dashboard.svg",
  },
  {
    title: "AI Components",
    href: "/",
    description: "All you need to create stunning AI tools & landing pages",
    icon: "/images/dashboard.svg",
  },
  {
    title: "Marketing",
    href: "/",
    description:
      "All you need to create stunning and high-converting landing pages",
    icon: "/images/dashboard.svg",
  },
  {
    title: "E-commerce",
    href: "/",
    description: "Components and Pages need to build complete online store UI",
    icon: "/images/dashboard.svg",
  },
  {
    title: "Core Components",
    href: "/",
    description:
      "Core UI Components to kickstart any web projects - Open-source",
    icon: "/assets/dashboard.svg",
  },
];

export function Navigation() {
  const isMobile = useIsMobile();

  const pathName = usePathname();
  if (["/sign-in", "/sign-up"].includes(pathName)) return null;

  return (
    <NavigationMenu viewport={isMobile} className="max-w-full">
      <NavigationMenuList className="flex-wrap w-full h-[83px] space-x-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:rounded-xl p-1.5">
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-10 -mt-10 rounded-[20px]!">
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Templates</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Products</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; icon: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="p-4 rounded-[14px]">
        <Link
          href={href}
          className="flex flex-row justify-start items-start rounded-[14px] space-y-1"
        >
          <Image
            src={icon}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto"
          />

          <div className="mt-1">
            <p className="text-sm leading-none font-medium">{title}</p>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
