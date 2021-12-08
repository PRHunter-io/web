import React, { useState } from "react";

import PageWrapper from "@/components/PageWrapper";
import { useUserData as useUserData } from "@/lib/swr";
import { UserData } from "@/components/Dashboard/user-data";
import { Spinner } from "react-bootstrap";
import { useContext, useEffect } from "react";
import GlobalContext from "src/context/GlobalContext";
import { useRouter } from "next/router";

const DashboardSettings = () => {
  const { userData, isLoading, isError } = useUserData()
  const [mounted, setMounted] = useState(false);

  const gContext = useContext(GlobalContext);
  const router = useRouter()

  useEffect(() => {
    setMounted(true);

    if (!gContext.signedIn) {
      if (!mounted) return;
      router.push("/")
    }
  }, [mounted])

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
