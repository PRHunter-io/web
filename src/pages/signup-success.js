import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

import imgF1 from "public/images/image/l2/png/featured-job-logo-1.png";
import imgB1 from "public/images/image/l1/png/feature-brand-1.png";
import imgB2 from "public/images/image/l1/png/feature-brand-4.png";
import imgB3 from "public/images/image/l1/png/feature-brand-5.png";
import imgB4 from "public/images/image/l3/png/github-mark.png";
import imgB5 from "public/images/image/l3/png/universal.png";

const CandidateProfile = () => {
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 mt-13 dark-mode-texts">
                <div className="mb-9">
                  <Link href="/#">
                    <a className="d-flex align-items-center ml-4">
                      <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                      <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Back
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- back Button End --> */}
            <div className="row ">
              {/* <!-- Company Profile --> */}
              <div className="col-12">
                <div className="bg-white rounded-4 pt-11 shadow-9">
                  {/* <!-- Tab Section Start --> */}
                  <Tab.Container id="left-tabs-example" defaultActiveKey="jobs">
                    {/* <!-- Tab Content --> */}
                    <Tab.Content className="pl-12 pt-10 pb-7 pr-12 pr-xxl-24">
                      Thanks for installing PRHunter! You can now set bounties on your PR's from our web app.
                       <Link href="/#"> Click here to add a bounty</Link>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </Tab.Container>
                </div>
              </div>
              {/* <!-- Company Profile End --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
