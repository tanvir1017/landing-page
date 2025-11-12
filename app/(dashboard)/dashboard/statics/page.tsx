import StaticsCardsComponent from "@/components/dashboard/statics-card/cards";
import { UserTable } from "@/components/dashboard/users/user-table";
import Container from "@/components/shared/container";
import { checkSessionAndRedirect } from "@/lib/isSesssionAvailable";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const isLogged = await checkSessionAndRedirect();

  if (!isLogged) redirect("/sign-in");
  return (
    <Container>
      <div className="bg-[#F3F4F6] min-h-screen space-y-[30px] p-10">
        <StaticsCardsComponent />
        <UserTable />
      </div>
    </Container>
  );
};

export default DashboardPage;
