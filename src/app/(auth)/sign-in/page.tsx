import SignInComponent from "@/src/components/pages/auth/sign-in";
import { checkSessionAndRedirect } from "@/src/lib/isSesssionAvailable";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const isLoggedIn = await checkSessionAndRedirect();

  if (isLoggedIn) redirect("/");
  return <SignInComponent />;
};

export default SignInPage;
