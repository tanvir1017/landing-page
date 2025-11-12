import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.BETTER_AUTH_URL_PROD
      : process.env.BETTER_AUTH_URL || "http://localhost:3000",
});
export const googleSignIn = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};

export const logout = async () => {
  try {
    // Assuming `authClient.signOut()` is asynchronous and returns a promise
    await authClient.signOut();
  } catch (error) {
    throw new Error((error as Error).message); // You can throw the error to be caught by the toast promise
  }
};
export const githubSignIn = async () => {
  await authClient.signIn.social({
    provider: "github",
  });
};
