import TechIcon from "@/components/Icons/TechIcon";
import Link from "next/link";

const calculateDays = date => {
    const currentDate = new Date();
    const parsedDate = Date.parse(date);
    const issueDate = new Date(parsedDate);

    const differenceInTime = currentDate.getTime() - issueDate.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays.toFixed();
};

export const FeaturedBountyView = ({ bounty }) => {
    const githubUrl = `https://github.com/${bounty.repo_owner}/${bounty.repo_name}`
    const fullRepoName = `${bounty.repo_owner}/${bounty.repo_name}`
    return (
        <div
            className="col-12 col-lg-4 col-md-6 px-xxl-7"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            {/* <!-- Start Feature One --> */}
            <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="row">
                    <div className="d-block mb-7 col-md-6">
                        <TechIcon language={bounty.languages[0]}></TechIcon>
                    </div>
                    <div className="col-md-6 text-right pt-7 pt-md-5">
                        <div className="media justify-content-md-end">
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                                <span className="text-black-2">
                                    <span className="text-primary">
                                        <i className="fas fa-coins pr-3" />
                                    </span>
                                    {bounty.bounty_value}
                                    <span className="text-hit-gray pl-1">{bounty.bounty_currency}</span>
                                </span>
                            </p>
                        </div>
                        <div className="media justify-content-md-end">
                            <p className="font-weight-bold font-size-4 text-hit-gray mb-0">
                                ~<span className="text-black-2 pl-1">{bounty.bounty_value_usd} $</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Link href={githubUrl}>
                    <a className="font-size-3 d-block mb-2 text-gray">
                        {fullRepoName}
                    </a>
                </Link>
                <h2 className="mt-n4">
                    <Link href={`/bounties/${bounty.id}`}>
                        <span className="font-size-7 text-black-2 font-weight-bold mb-4">
                            {bounty.title}
                        </span>
                    </Link>
                </h2>
                <div className="col-md-12">
                    <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-start">
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
                <p className="mb-7 font-size-4 text-gray">
                    <div className="text-right">
                        <Link href="/#">
                            <a className="btn btn-green text-uppercase btn-medium rounded-3">
                                Details
                            </a>
                        </Link>
                    </div>

                </p>
            </div>
            {/* <!-- End Feature One --> */}
        </div>)
}