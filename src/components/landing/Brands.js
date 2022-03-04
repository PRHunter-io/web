import React from 'react';

import imgB1 from 'public/images/image/resized/linkedin.png';
import imgB2 from 'public/images/image/resized/upwork.png';
import imgB3 from 'public/images/image/resized/fiverr.png';
import imgB4 from 'public/images/image/resized/angellist.png';
import imgB5 from 'public/images/image/resized/freelancer.png';
import imgB6 from 'public/images/image/resized/indeed.png';
import Image from 'next/image';

const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="bg-black-2 dark-mode-texts pt-13 pt-lg-24 pb-12 pb-lg-23">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-9 text-center text-lg-left">
                <h5 className="font-size-5 font-weight-normal mt-10">
                  With us, you can forget about using these sites to find work:
                </h5>
              </div>
            </div>
          </div>
          {/* <!-- Brand Logos --> */}
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
            >
              <Image src={imgB1} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <Image src={imgB2} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <Image src={imgB3} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <Image src={imgB4} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <Image src={imgB5} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="1200"
            >
              <Image src={imgB6} alt="" />
            </div>
          </div>
          {/* <!-- End Brand Logos --> */}
        </div>
      </div>
    </>
  );
};

export default Brands;
