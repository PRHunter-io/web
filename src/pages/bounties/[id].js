import React from 'react';
import { useRouter } from 'next/router';
import PageWrapper from '../../components/PageWrapper';
import TechIcon from '@/components/Icons/TechIcon';
import { formatDate } from 'src/utils';
import { formatStatus } from '@/utils/formatStatus';
import ClipboardButton from '@/components/ClipboardButton';
import { useUsdPricing } from '@/lib/crypto-pricing';

const bountiesUrl = process.env.NEXT_PUBLIC_INTERNAL_API_URL + '/bounty';

// SSR
export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${bountiesUrl}/${params.id}`);

  const bounty = await res.json();

  if (!bounty.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bounty,
    },
  };
};

export const BountyHeader = ({ bounty, isPreview }) => {
  const githubUrl = `https://github.com/${bounty.repo_owner}/${bounty.repo_name}/issues/${bounty.issue_number}`;
  const fullRepoName = `${bounty.repo_owner}/${bounty.repo_name}#${bounty.issue_number}`;
  return (
    <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
      <div className="row">
        <div className="col-md-8">
          <div className="media align-items-center">
            <div className="square-72 d-block mr-8">
              <TechIcon language={bounty.languages[0]} />
            </div>
            <div>
              <h3 className="font-size-6 mb-0 text-break">{bounty.title}</h3>
              <div className="media align-items-center">
                <a
                  href={githubUrl}
                  className="font-size-3 text-gray line-height-2 text-break"
                >
                  <i className="devicon-github-original mr-1"></i>
                  {fullRepoName}
                </a>
              </div>
              {!isPreview && (
                <ClipboardButton
                  bountyId={bounty.id}
                  tooltip="In order to link the bounty with user's pull request, you must copy and paste bounty ID into the Pull Request title"
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4 text-right pt-7 pt-md-0 mt-md-n1">
          {/* <!-- media date start --> */}
          <div className="media justify-content-md-end">
            <p className="font-size-4 text-gray mb-0">
              <small className="d-block text-left text-md-right text-hit-gray">
                Created at:
              </small>
              {formatDate(bounty.created_at)}
            </p>
          </div>
          {!isPreview && (
            <div className="media justify-content-md-end">
              <p className="mt-3 pt-4 h5 border-top border-primary">
                Status: {formatStatus(bounty.bounty_status)}
              </p>
            </div>
          )}
          {/* <!-- media date end --> */}
        </div>
      </div>
    </div>
  );
};

const SimpleBounty = ({ label, value, iconClass }) => (
  <div className="col-md-4 mb-lg-0 mb-6">
    <span className="font-size-4 d-block mb-2 text-gray">{label}</span>
    <h6 className="font-size-5 text-black-2 font-weight-semibold">
      <span className="text-primary">
        <i className={`${iconClass} pr-3`} />
      </span>
      {value}
    </h6>
  </div>
);

export const BountyDetails = ({ bounty }) => {
  const { getUsdPrice } = useUsdPricing();

  return (
    <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
      <div className="row mb-md-7">
        <div className="col-md-4 mb-lg-0 mb-6">
          <div className="media justify-content-md-start">
            <span className="font-size-4 d-block mb-2">Bounty value</span>
          </div>
          <div className="media justify-content-md-start">
            <div className="font-weight-bold font-size-7 text-hit-gray mb-0">
              <h5 className="text-black-2">
                <span className="text-primary">
                  <i className="fas fa-coins pr-3" />
                </span>
                {bounty.bounty_value}
                <span className="text-hit-gray pl-1">
                  {bounty.bounty_currency}
                </span>
              </h5>
            </div>
          </div>
          <div className="media justify-content-md-start">
            <p className="font-weight-bold font-size-4 text-hit-gray mb-0">
              ~
              <span className="text-black-2 pl-1">
                {getUsdPrice(bounty.bounty_value, bounty.bounty_currency)} $
              </span>
            </p>
          </div>
        </div>
        <SimpleBounty
          label="Expires"
          value={formatDate(bounty.expires_at)}
          iconClass="fas fa-clock"
        />
        <SimpleBounty
          label="Experience required"
          value={bounty.experience}
          iconClass="fas fa-signal"
        />
      </div>
      <div className="row">
        <SimpleBounty
          label="Bounty Type"
          value={bounty.bounty_type}
          iconClass="fas fa-briefcase"
        />
        <SimpleBounty
          label="Blockchain"
          value={
            (bounty.bounty_currency === 'ETH' && 'Ethereum') ||
            (bounty.bounty_currency === 'BNB' && 'Binance Smart Chain')
          }
          iconClass="fas fa-link"
        />
      </div>
      <div className="row mt-9">
        <div className="col-12 mb-lg-0 mb-8">
          <div className="tags">
            <h6 className="font-size-5 text-black-2 font-weight-semibold mb-0">
              Technologies used:
            </h6>
            <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
              {bounty.languages.map((language, index) => (
                <li
                  key={index}
                  className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2"
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BountyBody = ({ bounty }) => (
  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts border-bottom border-width-1 border-default-color">
    <div className="row">
      <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
        <div>
          <span className="font-size-4 font-weight-semibold text-black-2 mb-7">
            Problem statement:
          </span>
          <p className="font-size-4 text-black-2 mb-7">
            {bounty.problem_statement}
          </p>
        </div>
      </div>
      <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
        <div>
          <span className="font-size-4 font-weight-semibold text-black-2 mb-7">
            Acceptance criteria:
          </span>
          <p className="font-size-4 text-black-2 mb-7">
            {bounty.acceptance_criteria}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Bounty = ({ bounty }) => {
  const router = useRouter();
  return (
    <>
      <PageWrapper headerConfig={{ button: 'profile' }}>
        <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
          <div className="container">
            <div className="row justify-content-center">
              {/* <!-- back Button --> */}
              <div className="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts">
                <div className="mb-9">
                  <button
                    className="d-flex align-items-center ml-4 button-link"
                    onClick={() =>
                      router.back()
                        ? router.back()
                        : router.replace('/bounties')
                    }
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
                  <BountyHeader bounty={bounty} />
                  <BountyDetails bounty={bounty} />
                  <BountyBody bounty={bounty} />
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
