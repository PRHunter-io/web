import React, { useState } from "react";

import PageWrapper from "@/components/PageWrapper";
import { useUserData as useUserData } from "@/lib/swr";
import { UserData } from "@/components/Dashboard/user-data";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "src/context/AuthUserContext";


const DashboardSettings = () => {
  const { userData, isLoading, isError } = useUserData()
  const { user } = useAuth();
  const router = useRouter()

  useEffect(() => {
    if(!user) {
      router.push("/")
    }
  }, [])

  if (isLoading) return (
    <PageWrapperInternal>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </PageWrapperInternal>
  )

  if (isError) return (
    <PageWrapperInternal>
      <div>
        Error
      </div>
    </PageWrapperInternal>
  )

  return (
    <PageWrapperInternal>
      <UserData userData={userData} />
    </PageWrapperInternal>
  )
};

const PageWrapperInternal = props => (
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
        {props.children}
      </div>
    </PageWrapper>
  </>
)

export default DashboardSettings;
