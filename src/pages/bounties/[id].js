import React from "react";
import { useRouter } from "next/router"
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import imgF from "public/images/image/svg/icon-fire-rounded.svg";
import { formatBountyValue } from "../../hooks/formatBountyValue";
import TechIcon from "@/components/Icons/TechIcon";
import Image from 'next/image'

const bountiesUrl = process.env.NEXT_PUBLIC_INTERNAL_API_URL + '/bounty';

// SSR
export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${bountiesUrl}/${params.id}`)

  const bounty = await res.json();

  if (!bounty.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      bounty,
    },
  }
}

const formatDate = date => {
  const formattedDate = new Date(date).toLocaleString('en-ZA', { year: 'numeric', month: 'long', day: '2-digit' });

  return formattedDate;
}

const Bounty = ({ bounty }) => {
  const router = useRouter();
  const githubUrl = `https://github.com/${bounty.repo_owner}/${bounty.repo_name}`
  const fullRepoName = `${bounty.repo_owner}/${bounty.repo_name}`
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
                    <i className="fas fa-angle-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
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
                      <div className="col-md-8">
                        {/* <!-- media start --> */}
                        <div className="media align-items-center">
                          {/* <!-- media logo start --> */}
                          <div className="square-72 d-block mr-8">
                            <TechIcon language={bounty.languages[0]} />
                          </div>
                          {/* <!-- media logo end --> */}
                          {/* <!-- media texts start --> */}
                          <div>
                            <h3 className="font-size-6 mb-0">
                              {bounty.title}
                            </h3>
                            <div className="media align-items-center">
                              <a href={githubUrl} className="font-size-3 text-gray line-height-2">
                                <i className="devicon-github-original mr-1"></i>
                                {fullRepoName}
                              </a>
                            </div>

                          </div>
                          {/* <!-- media texts end --> */}
                        </div>
                        {/* <!-- media end --> */}
                      </div>
                      <div className="col-md-4 text-right pt-7 pt-md-0 mt-md-n1">
                        {/* <!-- media date start --> */}
                        <div className="media justify-content-md-end">
                          <p className="font-size-4 text-gray mb-0">
                            {formatDate(bounty.created_at)}
                          </p>
                        </div>
                        {/* <!-- media date end --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Featured Job --> */}
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row mb-7">
                      <div class="col-md-4 mb-lg-0 mb-10">
                        <div class="">
                          <span class="font-size-4 d-block mb-4 text-gray">Experience required</span>
                          <h6 class="font-size-5 text-black-2 font-weight-semibold mb-9">{bounty.experience}</h6>
                        </div>
                      </div>
                      <div class="col-md-4 mb-lg-0 mb-10">
                        <div class="">
                          <span class="font-size-4 d-block mb-4 text-gray">Bounty Type</span>
                          <h6 class="font-size-5 text-black-2 font-weight-semibold mb-9">{bounty.bounty_type}</h6>
                        </div>
                      </div>
                      <div className="col-md-4 text-right pt-7 pt-md-5">
                        <div className="media justify-content-md-end">
                          <div className="image mr-5 mt-2">
                            <Image src={imgF} alt="" />
                          </div>
                          <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                            <span className="text-black-2">{bounty.bounty_value}</span> {bounty.bounty_currency}
                          </p>
                        </div>
                        <div className="media justify-content-md-end">
                          <p className="font-weight-bold font-size-4 text-hit-gray mb-0">
                            <span className="text-black-2">{bounty.bounty_value_usd}</span> $
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
                            {bounty.languages.map((language, index) => (
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
                            {bounty.body}
                          </p>
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
