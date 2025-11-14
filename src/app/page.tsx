import HomePageComponents from "@/src/components/pages/home/home-page";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // // console.log("🚀 ~ Home ~ session:", session);
  // if (!session?.user)
  //   return (
  //     <div className="pl-[223px] bg-red-500 flex items-center space-x-2">
  //       <div>Not signed in</div>
  //       <Link href="/sign-in" className="bg-white text-black ">
  //         Login
  //       </Link>
  //     </div>
  //   );

  return (
    <>
      {/* <div className="pl-[223px] bg-black flex items-center space-x-2 py-10">
        <div className="max-w-sm animate-pulse ">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
      </div> */}
      <HomePageComponents />
    </>
  );
}
