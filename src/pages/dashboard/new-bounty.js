import React, { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "src/context/AuthUserContext";
import { CreateBountyForm } from "@/components/CreateBountyForm/CreateBountyForm";

const NewBounty = () => {
  const router = useRouter()
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [])

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
        <div
          className="dashboard-main-container mt-24 mt-lg-31"
          id="dashboard-body"
        >
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9">
                  <h5 className="font-size-6 font-weight-semibold mb-6 text-primary">
                    Create a new bounty
                  </h5>
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-13 pb-13">
                    <CreateBountyForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default NewBounty;
