import BountyTable from "@/components/Dashboard/bounty-table";
import React, { useContext, useEffect } from "react";
import PageWrapper from "@/components/PageWrapper";
import GlobalContext from "src/context/GlobalContext";
import Router from "next/router";

const DashboardMain = () => {

  const gContext = useContext(GlobalContext);

  useEffect(() => {
    if (!gContext.signedIn) {
      Router.push("/")
    }
  });


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
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Completed bounties (0)</h3>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                <span>Looks like you don't have any completed bounties yet.</span>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardMain;
