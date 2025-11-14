import SignUpComponent from "@/src/components/pages/auth/sign-up";
import { checkSessionAndRedirect } from "@/src/lib/isSesssionAvailable";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const isLoggedIn = await checkSessionAndRedirect();
  if (isLoggedIn) redirect("/");
  return (
    <div>
      <SignUpComponent />
    </div>
  );
};

export default SignUpPage;
