import Link from "next/link";
import TechIcon from "../Icons/TechIcon";
import { formatDate } from "src/utils";

export const BountyListView = ({ bounty }) => {
    return (
        <tr className="border border-color-2">
            <th scope="row" className="pl-6 border-0 py-7 pr-0">
                <Link href={`/bounties/${bounty.id}`}>
                    <a className="media min-width-px-235 align-items-center">
                        <div className="circle-36 mr-6">
                            <TechIcon language={bounty.languages[0]} small={true} />
                        </div>
                        <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                            {bounty.title}
                        </h4>
                    </a>
                </Link>
            </th>
            <td className="table-y-middle py-7 min-width-px-235 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    <span className="text-primary">
                        <i className="fas fa-coins pr-3" />
                    </span>
                    {bounty.bounty_value}
                    <span className="text-hit-gray pl-1">{bounty.bounty_currency}</span>
                </h3>
                <div className="media justify-content-md-start">
                    <p className="font-weight-font-weight-normal font-size-4 text-hit-gray mb-0">
                        ~<span className="text-black-2 pl-1">{bounty.bounty_value_usd} $</span>
                    </p>
                </div>
            </td>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    {formatDate(bounty.created_at)}
                </h3>
            </td>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <div className="">
                    <a
                        href="/#"
                        className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                        onClick={(e) => {
                            e.preventDefault();
                            gContext.toggleApplicationModal();
                        }}
                    >
                        Details
                    </a>
                </div>
            </td>
        </tr>
    )
}
