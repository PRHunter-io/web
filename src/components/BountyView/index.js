import Link from 'next/link';
import TechIcon from '../Icons/TechIcon';

const calculateDays = (date) => {
  const currentDate = new Date();
  const parsedDate = Date.parse(date);
  const issueDate = new Date(parsedDate);

  const differenceInTime = currentDate.getTime() - issueDate.getTime();

  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays.toFixed();
};

export const BountyView = ({ bounty }) => {
  const githubUrl = `https://github.com/${bounty.repo_owner}/${bounty.repo_name}/issues/${bounty.issue_number}`;
  const fullRepoName = `${bounty.repo_owner}/${bounty.repo_name}#${bounty.issue_number}`;
  return (
    <div className="mb-8" key={bounty.id}>
      {/* <!-- Single Featured Job --> */}
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
        <div className="row">
          <div className="col-md-6">
            <div className="media align-items-center">
              <div className="square-72 d-block mr-8">
                <TechIcon language={bounty.languages[0]}></TechIcon>
              </div>
              <div>
                <h3 className="mb-0">
                  <Link href={`/bounties/${bounty.id}`}>
                    <a className="font-size-6 heading-default-color">
                      {bounty.title}
                    </a>
                  </Link>
                </h3>
                <div className="media align-items-center">
                  <a
                    href={githubUrl}
                    className="font-size-3 text-gray line-height-2"
                  >
                    <i className="devicon-github-original mr-1"></i>
                    {fullRepoName}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-right pt-7 pt-md-5">
            <div className="media justify-content-md-end">
              <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                <span className="text-black-2">
                  <span className="text-primary">
                    <i className="fas fa-coins pr-3" />
                  </span>
                  {bounty.bounty_value}
                  <span className="text-hit-gray pl-1">
                    {bounty.bounty_currency}
                  </span>
                </span>
              </p>
            </div>
            <div className="media justify-content-md-end">
              <p className="font-weight-bold font-size-4 text-hit-gray mb-0">
                ~
                <span className="text-black-2 pl-1">
                  {bounty.bounty_value_usd} $
                </span>
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
                <i className="fas fa-briefcase pr-3" />
                <span className="font-weight-semibold">
                  {bounty.bounty_type}
                </span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <i className="fas fa-signal pr-3" />
                <span className="font-weight-semibold">
                  {bounty.experience}
                </span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <i className="fas fa-calendar pr-3" />
                <span className="font-weight-semibold">
                  {calculateDays(bounty.created_at)}d ago
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
