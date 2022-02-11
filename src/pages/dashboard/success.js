import React from 'react';

import PageWrapper from '../../components/PageWrapper';
import Link from 'next/link';
import landingPic3 from 'public/images/landing-pic-3.jpeg';
import Image from 'next/image';

const Success = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: 'profile',
          isFluid: true,
          bgClass: 'bg-default',
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
                  {/* <h5 className="font-size-6 font-weight-semibold mb-6 text-primary">
                                        Create a new bounty
                                    </h5> */}
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-13 pb-13">
                    <div className="d-flex flex-column align-items-center">
                      <h2 className="text-muted text-center">
                        Your bounty has been created!
                      </h2>

                      <Image
                        src={landingPic3}
                        alt=""
                        data-aos="zoom-in"
                        data-aos-duration="6500"
                        data-aos-delay="300"
                        className="w-100 rounded-4 my-3"
                      />

                      <Link href="/bounties">
                        <a className="line-height-reset btn-submit btn-xl text-uppercase btn btn-primary px-7">
                          Browse bounties
                        </a>
                      </Link>
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
export default Success;
