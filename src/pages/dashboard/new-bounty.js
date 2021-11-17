import React, { useState } from "react";

import PageWrapper from "../../components/PageWrapper";
import { Select } from "../../components/Core";
import CreateBountyForm from "../../components/CreateBountyForm/CreateBountyForm";
import fetcher from "src/utils/fetcher";
import useSWR from "swr";

const defaultTypes = [
  { value: "b2b", label: "B2B" },
  { value: "saas", label: "SAAS" },
  { value: "b2b", label: "b2b" },
];

const defaultEmployees = [
  { value: "10-50", label: "10-50" },
  { value: "50-100", label: "50-100" },
  { value: "100-500", label: "100-500" },
  { value: "500-2000", label: "500-2000" },
];

const defaultLocations = [
  { value: "bd", label: "Bangladesh" },
  { value: "sp", label: "Singapore" },
  { value: "tl", label: "Thailand" },
  { value: "de", label: "Germany" },
];

const NewBounty = () => {
  const [readyToPostBounty, setReadyToPostBounty] = useState(false);
  // const getRepos = async () => {
  //   const token = localStorage.getItem('ACCESS_TOKEN');
  //   const url = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/repo`;
  //   console.log(token);

  //   try {
  //     // const res = await fetch(url, {
  //     //   headers: {
  //     //     Accept: 'application/json',
  //     //     Authorization: `Bearer ${token}`,
  //     //     'Content-Type': 'application/json'
  //     //   },
  //     // });
  //     const res = await fetch('/api/repos', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       data: token
  //     });

  //     const repos = await res.json();
  //     console.log(repos)
  //   } catch (err) {
  //     console.log('nope', err);
  //     return false;
  //   }
  // };

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
                  <h5 className="font-size-6 font-weight-semibold mb-11">
                    Create new bounty
                  </h5>
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-13 pb-13">
                    {/* {readyToPostBounty ? <CreateBountyForm />
                      :
                      <button
                        onClick={() => setReadyToPostBounty(true)}
                      >
                        Let's create a bounty!
                      </button>
                    } */}
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
