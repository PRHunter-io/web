import BountyTable from "@/components/Dashboard/bounty-table";
import CompletedBountyTable from "@/components/Dashboard/completed-bounty-table";
import PageWrapper from "@/components/PageWrapper";

const DashboardMain = () => {

  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <BountyTable />
            <CompletedBountyTable />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardMain;
