import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Typed from 'typed.js';

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);
  let globePattern = '/images/globe-pattern.png';

  React.useEffect(() => {
    const options = {
      strings: [
        'Javascript, React',
        'Kotlin, Android development',
        'Python, Machine learning',
        'Functional Programming',
        'Devops tasks',
      ],
      typeSpeed: 35,
      backSpeed: 15,
      shuffle: true,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative z-index-1 bg-squeeze pt-26 dark-mode-texts">
        <div className="pos-abs-tr h-100">
          <img src={globePattern} className="h-100" />
        </div>
        <div className="container position-static">
          <div className="row position-relative align-items-center position-static">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9 pt-lg-23 pb-lg-33 pb-md-28 pb-xs-26 pb-29 pt-md-20"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="row">
                <div className="col-xxl-8 col-xl-7 col-md-8 col-sm-10">
                  <div className="text-primary font-size-5 font-weight-semibold mb-7">
                    #28 bounties are available right now
                  </div>
                  <h1 className="font-size-11 mb-9 text-black-2">
                    Submit pull requests. Get paid in crypto.
                  </h1>
                  <p className="font-size-5">
                    PRHunter allows repository maintainers to pay programmers
                    for solving Github issues
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Hero Form --> */}
            <div className="col-lg-11 col-12 translateY-50 pos-abs-bl">
              <form
                action="/"
                className="search-form"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-8 py-7 pl-6">
                  <div className="filter-inputs">
                    <div className="form-group position-relative">
                      <div className="form-control focus-reset pl-13">
                        <span ref={el} />
                      </div>
                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                        <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                      </span>
                    </div>
                  </div>
                  <div className="button-block">
                    <Link href="/bounties">
                      <Button className="line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Search
                      </Button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- End Hero Form --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
