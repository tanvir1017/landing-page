import StaticsCardsComponent from "@/components/dashboard/statics-card/cards";
import { UserTable } from "@/components/dashboard/users/user-table";
import { checkSessionAndRedirect } from "@/lib/isSesssionAvailable";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const isLogged = await checkSessionAndRedirect();
  if (!isLogged) redirect("/sign-in");
  return (
    <div className="bg-[#F3F4F6] min-h-screen px-[212px] pt-10 space-y-[30px]">
      <StaticsCardsComponent />
      <UserTable />
    </div>
  );
};

export default DashboardPage;
