import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";
export const auth = betterAuth({
  //database: new Database("./sqlite.db"),
  database: new Pool({
    connectionString: process.env.NEXT_PUBLIC_NEON_CONNECTION_STRING,
  }),
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  trustedOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://tanvir1017-pimjo.vercel.app",
    process.env.BETTER_AUTH_URL || "",
  ].filter(Boolean),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies()],
});
