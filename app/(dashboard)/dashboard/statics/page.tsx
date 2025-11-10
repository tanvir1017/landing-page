import StaticsCardsComponent from "@/components/dashboard/statics-card/cards";
import { UserTable } from "@/components/dashboard/users/user-table";

const DashboardPage = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen px-[212px] pt-10 space-y-[30px]">
      <StaticsCardsComponent />
      <UserTable />
    </div>
  );
};

export default DashboardPage;
