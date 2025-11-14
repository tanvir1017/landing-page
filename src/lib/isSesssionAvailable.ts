"use server";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";

export const checkSessionAndRedirect = async (): Promise<boolean> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("🚀 ~ checkSessionAndRedirect ~ session:", session);

  if (session) {
    return true;
  }
  return false;
};
