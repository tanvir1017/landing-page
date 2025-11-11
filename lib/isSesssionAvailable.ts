"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const checkSessionAndRedirect = async (): Promise<boolean> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) true;
  return false;
};
