import React from "react";
import { useRouter } from "next/router"
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";

import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import iconD from "../../assets/image/svg/icon-dolor.svg";
import iconB from "../../assets/image/svg/icon-briefcase.svg";
import iconC from "../../assets/image/svg/icon-user-tie.svg";
import { bountiesUrl } from "./";
import { formatBountyValue } from "../../hooks/formatBountyValue";

// SSR
export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${bountiesUrl}/${params.id}`)

  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}

const formatDate = date => {
  const formattedDate = new Date(date).toLocaleString('en-ZA', { year: 'numeric', month: 'long', day: '2-digit' });

  return formattedDate;
}

const Bounty = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
          <div className="container">
            <div className="row justify-content-center">
              {/* <!-- back Button --> */}
              <div className="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts">
                <div className="mb-9">
                  <button
                    className="d-flex align-items-center ml-4 button-link"
                    onClick={() => router.back() ? router.back() : router.replace('/bounties')}
                  >
                    <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                    <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                      Back to bounties list
                    </span>
                  </button>
                </div>
              </div>
              {/* <!-- back Button End --> */}
              <div className="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
                <div className="bg-white rounded-4 border border-mercury shadow-9">
                  {/* <!-- Single Featured Job --> */}
                  <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row">
                      <div className="col-md-6">
                        {/* <!-- media start --> */}
                        <div className="media align-items-center">
                          {/* <!-- media logo start --> */}
                          <div className="square-72 d-block mr-8">
                            <img src={imgF1} alt="" />
                          </div>
                          {/* <!-- media logo end --> */}
                          {/* <!-- media texts start --> */}
                          <div>
                            <h3 className="font-size-6 mb-0">
                              {data.title}
                            </h3>
                            <a href={data.bounty_url} className="font-size-3 text-gray line-height-2">
                              Check Github issue
                            </a>
                          </div>
                          {/* <!-- media texts end --> */}
                        </div>
                        {/* <!-- media end --> */}
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
                        {/* <!-- media date start --> */}
                        <div className="media justify-content-md-end">
                          <p className="font-size-4 text-gray mb-0">
                            {formatDate(data.created_at)}
                          </p>
                        </div>
                        {/* <!-- media date end --> */}
                      </div>
                    </div>
                    <div className="row pt-9">
                      <div className="col-12">
                        {/* <!-- card-btn-group start --> */}
                        <div className="card-btn-group">
                          <Link href="/#">
                            <a className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5">
                              Apply to this job
                            </a>
                          </Link>
                          <Link href="/#">
                            <a className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5">
                              <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                              Save bounty
                            </a>
                          </Link>
                        </div>
                        {/* <!-- card-btn-group end --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Featured Job --> */}
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row mb-7">
                      <div className="col-md-4 mb-md-0 mb-6">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={iconD} alt="" />
                          </div>
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                            {data.bounty_value} {data.bounty_currency} <small>({formatBountyValue(data.bounty_value_sec, 2)}{data.bounty_currency_sec})</small>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={iconC} alt="" />
                          </div>
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                            {data.experience}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 pl-lg-0">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={iconB} alt="" />
                          </div>
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                            {data.bounty_type}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-lg-0 mb-8">
                        <div className="tags">
                          <h6 className="font-size-5 text-black-2 font-weight-semibold mb-0">
                            Tech Stack:
                          </h6>
                          {/* <p className="font-size-4 text-gray mb-3">
                            Tech Stack
                          </p> */}
                          <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
                            {data.languages.map((language, index) => (
                              <li key={index} className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                {language}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
                    <div className="row">
                      <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                        <div className="">
                          <span className="font-size-4 font-weight-semibold text-black-2 mb-7">
                            Description:
                          </span>
                          <p className="font-size-4 text-black-2 mb-7">
                            {data.body}
                          </p>
                          <Link href="/#">
                            <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6">
                              Apply to this job
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
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
export default Bounty;
