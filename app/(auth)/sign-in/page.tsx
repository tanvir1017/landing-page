import SignInComponent from "@/components/pages/auth/sign-in";
import { checkSessionAndRedirect } from "@/lib/isSesssionAvailable";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const isLoggedIn = await checkSessionAndRedirect();

  if (isLoggedIn) redirect("/");
  return <SignInComponent />;
};

export default SignInPage;
