"use server";

export async function getNavMenu() {
  // Simulate fetching data from an API or database
  const url = "https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch navigation menu data");
  }
  const menuData = await response.json();
  return menuData;
}
