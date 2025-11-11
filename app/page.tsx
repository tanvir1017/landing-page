import HomePageComponents from "@/components/pages/home/home-page";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("🚀 ~ Home ~ session:", session);
  return (
    <>
      <div>{session?.user.name}</div>
      <HomePageComponents />
    </>
  );
}
