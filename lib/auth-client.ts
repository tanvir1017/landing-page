import { createAuthClient } from "better-auth/client";
import { redirect } from "next/navigation";

export const authClient = createAuthClient({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://tanvir1017-pimjo.vercel.app"
      : "http://localhost:3000",
});
export const googleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  if (data) {
    redirect("/dashboard/statics");
  }
};

export const githubSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });

  if (data) {
    redirect("/dashboard/statics");
  }
};

export const logout = async () => {
  try {
    // Assuming `authClient.signOut()` is asynchronous and returns a promise
    await authClient.signOut();
  } catch (error) {
    throw new Error((error as Error).message); // You can throw the error to be caught by the toast promise
  }
};
