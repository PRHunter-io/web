import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper';

const Faq = () => {
  const [openItem, setOpenItem] = useState(1);
  return (
    <>
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-md-7 pr-xl-15"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="">
                  <h3 className="font-size-9 font-weight-bold mb-7 mb-lg-13">
                    Frequently Asked Questions
                  </h3>
                  <p className="font-size-4 mb-2">
                    If you have any suggestions or would like to know more,
                    please don't hestitate to contact us. We'd love to hear from
                    you!
                  </p>
                  <Link href="/contact">
                    <a className="font-size-3 font-weight-bold text-green text-uppercase">
                      Send us a message
                    </a>
                  </Link>
                  <br />
                  <p className="font-size-4 mb-2 mt-6">
                    Our code is (mostly) open-source, so you can also
                    <span>
                      <Link href="https://github.com/PRHunter-io/web/discussions">
                        <a className="text-green">
                          start a discussion on Github.
                        </a>
                      </Link>{' '}
                      We plan on making all of our code open-source, but this
                      will take some time.
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="col-xl-6 col-md-11"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="faq-content pt-lg-4 pt-6">
                  <div
                    className="accordion rounded-10 border-green border-top-5 pl-1"
                    id="accordionExample"
                  >
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-1">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(1)}
                          aria-expanded={openItem === 1}
                        >
                          How does PRHunter.io work?
                        </button>
                      </div>
                      <Collapse in={openItem === 1}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Any registered user can create Bounties on PRHunter.
                            A Bounty is always linked to a Github issue in a
                            public repository managed by the user.
                            <br />
                            When creating a Bounty, the creator deposits the
                            reward in a smart contract. The smart contract will
                            monitor the activity on the issue - when a pull
                            request gets merged, the author of that pull request
                            will automatically receive the bounty.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-1">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(2)}
                          aria-expanded={openItem === 2}
                        >
                          What happens when an issue has multiple contributors?
                        </button>
                      </div>
                      <Collapse in={openItem === 2}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            We plan on supporting assignment of bounties to
                            specific PRHunter users. Once a user is assigned,
                            only that user is eligible for receiving the bounty
                            for the PR.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-1">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(3)}
                          aria-expanded={openItem === 3}
                        >
                          How do you handle fraud?
                        </button>
                      </div>
                      <Collapse in={openItem === 3}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            We plan on introducing a rating system for our users
                            - you will be able to rate and flag users which
                            perform fraudulent behaviour, such as closing issues
                            and copying the code from submitted PR's. In case of
                            multiple breaches, a user will be banned from
                            PRHunter. Because a PRHunter account must be linked
                            to a Github account, a banned user would have to
                            migrate all of his repositories to a new Github
                            account, which we believe to be enough of a
                            deterrent from cheating. A positive ranking and
                            history of sucessfully payed out bounties will go a
                            long way for estabilishing the credibility of Bounty
                            creators.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-1">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(4)}
                          aria-expanded={openItem === 4}
                        >
                          Do you support private repositories?
                        </button>
                      </div>
                      <Collapse in={openItem === 4}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            We currently only support public repositories. We
                            plan on supporting private repositories in the
                            future, where Bounty creators will be able to
                            whitelist hunters with access to their private
                            repositories.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-1">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(5)}
                          aria-expanded={openItem === 5}
                        >
                          Is a Github account required?
                        </button>
                      </div>
                      <Collapse in={openItem === 5}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. A Github account is required for both hunters
                            and creators, as all relevant activity takes place
                            on that platform.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-1">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(6)}
                          aria-expanded={openItem === 6}
                        >
                          Do you plan on supporting other sites such as Gitlab
                          or Bitbucket Cloud?
                        </button>
                      </div>
                      <Collapse in={openItem === 6}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            We currently do not have such plans. Most
                            open-source activity takes place on Github, so it's
                            a natural environment for PRHunter. We might
                            consider supporting them in the future, if the
                            demand is high enough.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                  <div className="border-bottom overflow-hidden">
                    <div className="mb-0 border-bottom-0" id="heading2-1">
                      <button
                        className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                        type="button"
                        onClick={() => setOpenItem(7)}
                        aria-expanded={openItem === 7}
                      >
                        How will you handle disputes between hunters and
                        creators?
                      </button>
                    </div>
                    <Collapse in={openItem === 7}>
                      <div className="pr-7">
                        <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                          We'll be moving towards automatic rating systems and
                          try to automate the dispute process as much as
                          possible. Initially, an in-app messaging platform will
                          be added, where Creators and Hunters will be able to
                          discuss the ongoing work on Bounties. In case of any
                          dispute, the messages will be used by our moderators
                          to resolve conflicts.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-1">
                    <button
                      className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                      type="button"
                      onClick={() => setOpenItem(8)}
                      aria-expanded={openItem === 8}
                    >
                      Which cryptocurrencies are supported?
                    </button>
                  </div>
                  <Collapse in={openItem === 8}>
                    <div className="pr-7">
                      <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                        ETH and BNB. We're investigating adding more chains to
                        the platform.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-1">
                    <button
                      className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                      type="button"
                      onClick={() => setOpenItem(9)}
                      aria-expanded={openItem === 9}
                    >
                      Does PRHunter charge any fees?
                    </button>
                  </div>
                  <Collapse in={openItem === 9}>
                    <div className="pr-7">
                      <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                        <Link href="/docs#operational-fee">
                          Operational fee docs
                        </Link>
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-1">
                    <button
                      className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                      type="button"
                      onClick={() => setOpenItem(10)}
                      aria-expanded={openItem === 10}
                    >
                      How do you handle payouts?
                    </button>
                  </div>
                  <Collapse in={openItem === 10}>
                    <div className="pr-7">
                      <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                        All users must link a Metamask wallet to their account.
                        When creating a Bounty, the Creator will have to deposit
                        the Bounty amount in the PRHunter Smart Contract. The
                        contract will pay out the Bounty amount to the Hunter's
                        Metamask wallet, once his PR is merged.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-1">
                    <button
                      className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                      type="button"
                      onClick={() => setOpenItem(11)}
                      aria-expanded={openItem === 11}
                    >
                      I want to try PRHunter out, but I don't want to use my
                      real funds
                    </button>
                  </div>
                  <Collapse in={openItem === 11}>
                    <div className="pr-7">
                      <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                        We have a test instance set up at{' '}
                        <Link href="https://staging.prhunter.io">
                          staging.prhunter.io
                        </Link>
                        , which contains upcoming features and is configured
                        with Ropsten ETH Testnet and BSC Testnet, so you can
                        play around with that if you want.
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Faq;
