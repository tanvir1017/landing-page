"use client";
import GithubIcon from "@/components/assets/svgs/github";
import GoogleIcon from "@/components/assets/svgs/google";
import SiteLogo from "@/components/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient, githubSignIn, googleSignIn } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, LoaderPinwheel } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const SignInComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await authClient.signIn.email(
        {
          email,
          password,
        },
        {
          onRequest: (_ctx) => {
            setLoading(true);
          },
          onSuccess: (ctx) => {
            setLoading(false);
            toast.success("Sign in successful");
            //redirect("/");
          },
          onError: (ctx) => {
            // display the error message
            setLoading(false);
            toast.error(ctx.error.message);
          },
        }
      );
    } catch (error) {
      setLoading(false);
      toast.error(`${(error as Error).message || "Sign in failed"}`);
    }
  };

  return (
    <div className="relative">
      <div className="pt-10">
        {/* Sign in page header */}
        <div className="border border-t-0 border-slate-200 flex items-center justify-center py-10">
          <div className="max-w-md text-center space-y-4">
            <Link href="/" className="block">
              <SiteLogo className="w-36!  mx-auto" />
            </Link>
            <h2 className="font-medium text-4xl leading-12 tracking-[-0.5px] text-center align-middle text-[#2E2E2E]">
              Sign In to your account
            </h2>

            <p className="text-slate-500 text-[18px] font-[400px]">
              Unlock exclusive access to premium components and design
              resources.
            </p>
          </div>
        </div>

        {/* 3 columns grid layout */}
        <div className="grid grid-cols-3 [&>div]:border-l [&>div]:border-slate-200 [&>div]:p-[60px]">
          <div className="col-span-1"></div>
          <div className="col-span-1" id="sign-in-page">
            <div className="bg-[#F3F4F6] p-3 rounded-[34px]">
              <div className="">
                {/* OAuth Buttons */}
                <div className="space-y-3 mb-6">
                  {/* Google Button */}
                  <Button
                    onClick={googleSignIn}
                    className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium cursor-pointer "
                  >
                    <GoogleIcon />
                    Continue with Google
                  </Button>

                  {/* GitHub Button */}
                  <Button
                    onClick={githubSignIn}
                    className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium cursor-pointer "
                  >
                    <GithubIcon />
                    Continue with Github
                  </Button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-px bg-[#E5E7EB]" />
                  <span className="text-xs text-[#525866] font-medium">
                    Or continue with
                  </span>
                  <div className="flex-1 h-px bg-[#E5E7EB]" />
                </div>

                {/* Form */}
                <div className="bg-white rounded-3xl p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                  <form onSubmit={handleSignIn} className="space-y-5">
                    {/* Email Input */}
                    <div className="relative">
                      <label className="mb-2 block text-[#374151]">Email</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 rounded-lg border border-[#D1D5DB] px-4 placeholder:text-slate-400  pr-10"
                        required
                      />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                      <label className="mb-2 block">Password</label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-11 rounded-lg border border-[#D1D5DB] px-4 placeholder:text-slate-400  pr-10"
                          required
                        />

                        <Button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-xs text-slate-500 font-medium bg-white hover:bg-white absolute right-2 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}{" "}
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </div>
                    </div>

                    {/* Forgot password link */}
                    <div className="pb-1">
                      <p>
                        Forgot password?
                        <button
                          onClick={() => toast.info("Not impended yet!!")}
                          className="text-primary ml-1 cursor-pointer"
                          type="button"
                        >
                          Reset here
                        </button>
                      </p>
                    </div>

                    {/* Sign In Button */}
                    <Button
                      className={cn(
                        "font-medium shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,0.5),7px_7px_20px_0px_rgba(0,0,0,0.1),4px_4px_5px_0px_rgba(0,0,0,0.1)] outline-none text-[15px] bg-primary border-blue-700 border-2 w-full rounded-[12px] py-6 hover:bg-none cursor-pointer",
                        {
                          "cursor-progress": loading,
                        }
                      )}
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? (
                        <>
                          <LoaderPinwheel className="animate-spin animate text-slate-50" />{" "}
                          sign in...{" "}
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </form>

                  {/* Sign up link */}
                  <div className="mt-5 text-center">
                    <p>
                      Don't have an account?{" "}
                      <Link
                        href="/sign-up#sign-up-page"
                        className="text-primary ml-1"
                      >
                        Create account
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        <div className="border-b h-[123px]">
          <div className="border pt-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
