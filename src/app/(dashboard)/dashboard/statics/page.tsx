import StaticsCardsComponent from "@/src/components/dashboard/statics-card/cards";
import { UserTable } from "@/src/components/dashboard/users/user-table";
import Container from "@/src/components/shared/container";
import { checkSessionAndRedirect } from "@/src/lib/isSesssionAvailable";
import { redirect } from "next/navigation";

const DashboardPage = async ({}) => {
  const isLogged = await checkSessionAndRedirect();

  if (!isLogged) redirect("/sign-in");
  return (
    <Container className="max-w-full -mt-px">
      <div className="bg-sec min-h-dvh md:space-y-[30px] space-y-[15px] md:p-10 p-4">
        <StaticsCardsComponent />
        <UserTable />
      </div>
    </Container>
  );
};

export default DashboardPage;
