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
import useFetchData from "@/hooks/useFetchData"; // Import the custom hook
import { T_MenuItem } from "@/types"; // Import the types
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export function Navigation() {
  const isMobile = useIsMobile();
  const pathName = usePathname();

  const url = "https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu";
  const { data: menuData, loading, error } = useFetchData<T_MenuItem[]>(url);

  // Skip rendering for sign-in and sign-up pages
  if (["/sign-in", "/sign-up"].includes(pathName)) return null;

  // Handle loading, error, and display the menu data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Find the 'components' column in the API response with type-safe filtering
  const componentsColumn = menuData?.find((item) => item.id === "components");

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
                    icon={`/assets/${component.icon}.svg`} // Assuming the icons are located in the /assets folder
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
        {menuData?.map(
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
