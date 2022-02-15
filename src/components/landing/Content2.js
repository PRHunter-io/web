import React from 'react';
import Link from 'next/link';
import imgC1 from 'public/images/image/l3/png/content-1-img1.png';
import imgC2 from 'public/images/image/l3/png/content-1-img2.png';
import imgM from 'public/images/image/l3/png/media-img1.png';
import Image from 'next/image';

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="pt-13 pt-lg-30 pb-lg-30">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-xl-6 col-lg-6 col-md-8 col-xs-10"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="position-relative px-xl-20 pr-md-15 pr-9">
                {/* <!-- content img start --> */}
                <Image src={imgC1} alt="" className="w-100 rounded-4" />
                {/* <!-- content img end --> */}
                {/* <!-- abs-content start --> */}
                <div className="abs-content pos-abs-br mb-30 mr-8 rounded-4 rotate-n10 border-10 border-white shadow-2">
                  <Image
                    src={imgC2}
                    alt=""
                    className="rounded-4 border-white border-width-3"
                  />
                </div>
                {/* <!-- abs-content end --> */}
              </div>
            </div>
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-11"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-2 start --> */}
              <div className="content-2 pl-xl-10 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-xl-10 pr-xxl-0">
                {/* <!-- content section title start --> */}
                <h2 className="font-size-8 mb-7 pr-xs-13  pr-md-0 pr-sm-8">
                  Looking for a <span className="text-green">coding gig</span>?
                </h2>
                <p className="text-default-color font-size-5 mb-7 mb-lg-12 pr-xxl-13 pr-lg-0 pr-md-10">
                  With us you can earn money for submitting your work to
                  Bounties created by other users. No long term commitment, no
                  screening. Simply write code and submit it.
                </p>
                {/* <!-- content section title end --> */}
                {/* <!-- content-2 btn start --> */}
                <Link href="/#">
                  <a className="text-green font-weight-bold text-uppercase font-size-3">
                    Learn More <i className="fas fa-arrow-right ml-3"></i>
                  </a>
                </Link>
                {/* <!-- content-2 btn end --> */}
                {/* <!-- media start --> */}
                <div className="media mb-9 mt-9 mt-lg-15 pr-sm-10 pr-md-18 pr-xl-20">
                  {/* <!-- media img start --> */}
                  <div className="media-img">
                    <Image src={imgM} alt="" className="circle-48" />
                  </div>
                  {/* <!-- media img start --> */}
                  {/* <!-- media body start --> */}
                  <div className="media-body pl-7">
                    <p className="mb-0 font-size-4 heading-default-color mb-7">
                      "Crypto power comes to life thanks to PRHunter. Thanos did
                      nothing wrong, the lamp is a lie. Sorry, what was I
                      talking about? ”
                    </p>
                    <h6 className="mb-0 font-size-4">Davis Jones</h6>
                    <p className="font-size-3 text-default-color">
                      The one that was promised
                    </p>
                  </div>
                  {/* <!-- media body start --> */}
                </div>
                {/* <!-- media end --> */}
              </div>
              {/* <!-- content-2 end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
