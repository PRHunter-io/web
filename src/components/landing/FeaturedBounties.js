import React from "react";
import Link from "next/link";
import { FeaturedBountyView } from "./FeaturedBountyVIew";
import { useFeaturedBounties } from "@/lib/swr";
import { LoadingSpinner } from "../LoadingSpinner";

const FeaturedBounties = () => {
  const { bounties, isLoading, isError } = useFeaturedBounties()

  if (isLoading) return (
    <PageWrapperInternal>
      <LoadingSpinner />
    </PageWrapperInternal>
  )

  if (isError) return (
    <PageWrapperInternal>
      <div>
        No featured bounties
      </div>
    </PageWrapperInternal>
  )

  console.log(bounties)

  return (
    <PageWrapperInternal>
      {bounties.map(bounty => <FeaturedBountyView key={bounty.id} bounty={bounty}/>)}
    </PageWrapperInternal>
  )
};

const PageWrapperInternal = (props) => (
  <>
    {/* <!-- FeaturedJobs Area -->  */}
    <div className="pt-11 pt-lg-27 pb-7 pb-lg-26 bg-black-2 dark-mode-texts">
      <div className="container">
        {/* <!-- Section Top --> */}
        <div className="row align-items-center pb-14">
          {/* <!-- Section Title --> */}
          <div className="col-12 col-xl-6 col-lg-6">
            <div className="text-center text-lg-left mb-13 mb-lg-0">
              <h2 className="font-size-9 font-weight-bold">Featured Bounties</h2>
            </div>
          </div>
          {/* <!-- Section Button --> */}
          <div className="col-12 col-xl-6 col-lg-6">
            <div className="text-center text-lg-right">
              <Link href="/bounties">
                <a className="btn btn-outline-white text-uppercase">
                  Explore All
                </a>
              </Link>
            </div>
          </div>
          {/* <!-- Section Button End --> */}
        </div>
        {/* <!-- End Section Top --> */}
        <div className="row justify-content-center">
          {/* <FeaturedBountyView /> */}
          {props.children}
        </div>
      </div>
    </div>
  </>
)

export default FeaturedBounties;
