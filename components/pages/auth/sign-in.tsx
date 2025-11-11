"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignInComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      {/* Borders */}
      <div className="h-[123px] border">
        <div className="border pb-10"></div>
      </div>
      {/* Borders */}
      <div className="">
        {/* Sign in page header */}
        <div className="border border-t-0 border-slate-200 flex items-center justify-center py-10">
          <div className="max-w-md text-center  space-y-4">
            <Image
              src="/assets/Logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="mx-auto"
            />

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
                    onClick={signIn}
                    className="cursor-pointer w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium"
                  >
                    <Image
                      src="/assets/google-logo.svg"
                      alt="google"
                      width={20}
                      height={20}
                    />
                    Continue with Google
                  </Button>

                  {/* GitHub Button */}
                  <button className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium">
                    <Image
                      src="/assets/github.svg"
                      alt="google"
                      width={20}
                      height={20}
                    />
                    Continue with Github
                  </button>
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
                        <Link
                          href="/forgot-password"
                          className="text-primary ml-1"
                        >
                          Reset here
                        </Link>
                      </p>
                    </div>

                    {/* Sign In Button */}
                    <Button
                      className="font-medium shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,0.5),7px_7px_20px_0px_rgba(0,0,0,0.1),4px_4px_5px_0px_rgba(0,0,0,0.1)] outline-none text-[15px] bg-primary border-blue-700 border-2 w-full rounded-[12px] py-6 hover:bg-none"
                      type="submit"
                    >
                      Sign In
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
