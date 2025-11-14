"use client";

import GithubIcon from "@/src/assets/svgs/github";
import GoogleIcon from "@/src/assets/svgs/google";
import SiteLogo from "@/src/assets/svgs/Logo";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { authClient, githubSignIn, googleSignIn } from "@/src/lib/auth-client";
import { cn } from "@/src/lib/utils";
import { Eye, EyeOff, LoaderPinwheel } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const SignUpComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await authClient.signUp.email(
        {
          name,
          email,
          password,
        },
        {
          onRequest: (_ctx) => {
            setLoading(true);
          },
          onSuccess: (ctx) => {
            setLoading(false);
            toast.success("Sign up successful");
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
      toast.error(`${(error as Error).message || "Sign up failed"}`);
    }
  };
  return (
    <div className="relative">
      {/* Borders */}
      <div className="">
        {/* Sign up page header */}
        <div className="border border-t-0 border-slate-200 flex items-center justify-center py-10">
          <div className="max-w-md text-center space-y-4 px-4 md:px-0">
            <Link href="/" className="flex items-center justify-center">
              <SiteLogo className="w-36! " />
            </Link>

            <h2 className="font-medium text-2xl md:text-4xl leading-8 md:leading-12 tracking-[-0.5px] text-center align-middle text-[#2E2E2E]">
              Sign Up to your account
            </h2>

            <p className="text-slate-500 text-base md:text-[18px] font-[400px]">
              Unlock exclusive access to premium components and design
              resources.
            </p>
          </div>
        </div>

        {/* Desktop Layout - 3 columns grid (hidden on mobile) */}
        <div className="hidden md:grid xl:grid-cols-3 grid-cols-1 [&>div]:border-l [&>div]:border-slate-200 [&>div]:p-[60px]">
          <div className="col-span-1"></div>
          <div className="col-span-1" id="sign-up-page">
            <div className="bg-[#F3F4F6] p-3 rounded-[34px]">
              <div className="">
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
                    {/* Name Input */}
                    <div className="relative">
                      <label className="mb-2 block text-[#374151]">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 rounded-lg border border-[#D1D5DB] px-4 placeholder:text-slate-400  pr-10"
                        required
                      />
                    </div>

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

                    {/* Sign Up Button */}
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
                          signing up...{" "}
                        </>
                      ) : (
                        "Sign Up"
                      )}
                    </Button>
                  </form>

                  {/* Sign up link */}
                  <div className="mt-5 text-center">
                    <p>
                      Already have an account?
                      <Link
                        href="/sign-in#sign-in-page"
                        className="text-primary ml-1"
                      >
                        Login Now
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/* Mobile Layout - Shown on mobile devices */}
        <div className="md:hidden px-4 py-8">
          <div
            className="bg-[#F3F4F6] p-3 md:p-4 rounded-2xl md:rounded-[34px]"
            id="sign-up-page"
          >
            <div className="">
              <div className="space-y-3 mb-6">
                {/* Google Button */}
                <Button
                  onClick={googleSignIn}
                  className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium cursor-pointer"
                >
                  <GoogleIcon />
                  <span className="text-sm md:text-base">
                    Continue with Google
                  </span>
                </Button>

                {/* GitHub Button */}
                <Button
                  onClick={githubSignIn}
                  className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium cursor-pointer"
                >
                  <GithubIcon />
                  <span className="text-sm md:text-base">
                    Continue with Github
                  </span>
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
              <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <form onSubmit={handleSignIn} className="space-y-5">
                  {/* Name Input */}
                  <div className="relative">
                    <label className="mb-2 block text-[#374151] text-sm">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-10 md:h-11 rounded-lg border border-[#D1D5DB] px-4 placeholder:text-slate-400 pr-10 text-sm"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="mb-2 block text-[#374151] text-sm">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-10 md:h-11 rounded-lg border border-[#D1D5DB] px-4 placeholder:text-slate-400 pr-10 text-sm"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <label className="mb-2 block text-sm">Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-10 md:h-11 rounded-lg border border-[#D1D5DB] px-4 placeholder:text-slate-400 pr-10 text-sm"
                        required
                      />

                      <Button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-xs text-slate-500 font-medium bg-white hover:bg-white absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Sign Up Button */}
                  <Button
                    className={cn(
                      "font-medium shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,0.5),7px_7px_20px_0px_rgba(0,0,0,0.1),4px_4px_5px_0px_rgba(0,0,0,0.1)] outline-none text-sm md:text-[15px] bg-primary border-blue-700 border-2 w-full rounded-lg md:rounded-[12px] py-5 md:py-6 hover:bg-none cursor-pointer",
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
                        <span className="text-xs md:text-base">
                          signing up...
                        </span>
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </form>

                {/* Sign up link */}
                <div className="mt-5 text-center">
                  <p className="text-sm">
                    Already have an account?
                    <Link
                      href="/sign-in#sign-in-page"
                      className="text-primary ml-1"
                    >
                      Login Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b h-[123px] hidden md:block">
          <div className="border pt-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
