import React from 'react';

import PageWrapper from '../../components/PageWrapper';
import Link from 'next/link';
import landingPic3 from 'public/images/landing-pic-3.jpeg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  const { bounty_id } = router.query;
  const bountyLink = `/bounties/${bounty_id}`;

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
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-13 pb-13">
                    <div className="d-flex flex-column align-items-center">
                      <h4 className="text-muted">
                        Success, your bounty has been created!
                      </h4>
                      <Image
                        src={landingPic3}
                        alt=""
                        data-aos="zoom-in"
                        data-aos-duration="6500"
                        data-aos-delay="300"
                        className="w-100 rounded-4 my-3"
                      />
                    </div>

                    <div>
                      <p className="mt-4">
                        Right now the smart contract for your bounty is being
                        deployed. It usually takes less than a minute for a
                        bounty to be deployed on the blockchain, but it could
                        take a few minutes if the network is busy.
                      </p>
                      <p>
                        You can see all of your bounties in the{' '}
                        <Link href="/dashboard">dashboard</Link>. Once it is
                        deployed successfully, you can also inspect it on the
                        blockchain.
                      </p>
                      <div className="d-flex flex-column align-items-center">
                        <Link href={bountyLink}>
                          <a className="line-height-reset btn-submit btn-xl text-uppercase btn btn-primary px-7">
                            Click here to go to the bounty
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
      </PageWrapper>
    </>
  );
};
export default Success;
