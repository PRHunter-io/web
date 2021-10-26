import React from "react";
import Link from "next/link";

import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";

import imgF from "../../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../../assets/image/svg/icon-calendar-grey.svg";
import iconS from "../../assets/image/svg/icon-suitecase.svg";
import iconC from "../../assets/image/svg/icon-user.svg";

import imgB1 from "../../assets/image/l1/png/feature-brand-1.png";
import { formatBountyValue } from "../../hooks/formatBountyValue";

const calculateDays = date => {
  const currentDate = new Date();
  const parsedDate = Date.parse(date);
  const issueDate = new Date(parsedDate);

  const differenceInTime = currentDate.getTime() - issueDate.getTime();

  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays.toFixed();
};

export const BountiesListRegular = ({ data, error }) => {
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      {data.map((bounty) => (

        <div className="mb-8" key={bounty.id}>
          {/* <!-- Single Featured Job --> */}
          <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
            <div className="row">
              <div className="col-md-6">
                <div className="media align-items-center">
                  <div className="square-72 d-block mr-8">
                    <img src={imgF1} alt="" />
                  </div>
                  <div>
                    <h3 className="mb-0">
                      <Link href={`/bounties/${bounty.id}`}>
                        <a className="font-size-6 heading-default-color">
                          {bounty.title}
                        </a>
                      </Link>
                    </h3>
                    <a
                      href={bounty.bounty_url}
                      target="_BLANK"
                      className="font-size-3 text-default-color line-height-2"
                    >
                      Check Github issue
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-right pt-7 pt-md-5">
                <div className="media justify-content-md-end">
                  <div className="image mr-5 mt-2">
                    <img src={imgF} alt="" />
                  </div>
                  <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                    <span className="text-black-2">{bounty.bounty_value}</span> {bounty.bounty_currency}
                  </p>
                </div>
                <div className="media justify-content-md-end">
                  <p className="font-weight-bold font-size-4 text-hit-gray mb-0">
                    <span className="text-black-2">{bounty.bounty_value_usd}</span> {bounty.bounty_currency_sec}
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-8">
              <div className="col-md-7">
                <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                  {bounty.languages.map((language, index) => (
                    <li key={index}>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                          {language}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-5">
                <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                  <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                    <span
                      className="mr-4"
                      css={`margin-top: -2px;`}
                    >
                      <img src={iconS} alt="" />
                    </span>
                    <span className="font-weight-semibold">
                      {bounty.bounty_type}
                    </span>
                  </li>
                  <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                    <span
                      className="mr-4"
                      css={`margin-top: -2px;`}
                    >
                      <img src={iconC} alt="" />
                    </span>
                    <span className="font-weight-semibold">
                      {bounty.experience}
                    </span>
                  </li>
                  <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                    <span
                      className="mr-4"
                      css={`margin-top: -2px;`}
                    >
                      <img src={iconL} alt="" />
                    </span>
                    <span className="font-weight-semibold">
                      {calculateDays(bounty.created_at)}d ago
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </>
  )
}

export const BountiesListGrid = ({ data, error }) => {
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className="row justify-content-center">
      {data.map((bounty) => (
        <div className="col-12 col-lg-6" key={bounty.id}>
          <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
            <div className="d-block mb-7">
              <Link href="/#">
                <a>
                  <img src={imgB1} alt="" />
                </a>
              </Link>
            </div>
            <a
              href={bounty.bounty_url}
              target="_BLANK"
              className="font-size-3 d-block mb-0 text-gray"
            >
              Check Github issue
            </a>
            <h2 className="mt-n4">
              <Link href={`/bounties/${bounty.id}`}>
                <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                  {bounty.title}
                </a>
              </Link>
            </h2>
            <ul className="list-unstyled mb-1 card-tag-list">
              <li>
                <Link href="/#">
                  <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                    <i className="fa fa-briefcase mr-2"></i>{" "}
                    {bounty.bounty_type}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                    <i className="fas fa-user-tie mr-2"></i>{" "}
                    {bounty.experience}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                    <i className="fa fa-dollar-sign mr-2"></i>{" "}
                    {bounty.bounty_value}
                  </a>
                </Link>
              </li>
            </ul>
            <p className="mb-7 font-size-4 text-gray line-clamp">
              {bounty.body}
            </p>
          </div>
        </div>
      ))
      }
    </div>
  )
}
