"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { T_MenuItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export function Navigation({ megaMenu }: { megaMenu: T_MenuItem[] }) {
  const isMobile = useIsMobile();
  const componentsColumn = megaMenu?.find((item) => item.id === "components");

  return (
    <NavigationMenu viewport={isMobile} className="max-w-full">
      <NavigationMenuList className="flex-wrap w-full space-x-2">
        {componentsColumn?.columns && (
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:rounded-xl p-1.5">
              {componentsColumn.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-10 -mt-10 rounded-[20px]!">
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {componentsColumn.columns.map((component) => (
                  <ListItem
                    icon={`/assets/${component.icon}.svg`}
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
        )}

        {/* Rendering other menu items */}
        {megaMenu?.map(
          (item) =>
            item.id !== "components" && (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink asChild>
                  <Link href={item.href || "#"}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
        )}
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
          className="flex flex-row justify-start items-start rounded-[14px]"
        >
          <Image
            src={icon}
            alt="logo"
            width={24}
            height={24}
            className="mr-4"
          />

          <div className="space-y-2">
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
