import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();
export const googleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log("🚀 ~ signIn ~ data:", data);
};

export const githubSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log("🚀 ~ githubSignIn ~ data:", data);
};
