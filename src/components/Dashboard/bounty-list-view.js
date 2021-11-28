import Link from "next/link";
import Image from "next/image";

import imgP1 from "public/images/image/table-one-profile-image-1.png";
import TechIcon from "../Icons/TechIcon";

export const BountyListView = ({ bounty }) => {
    return (
        <tr className="border border-color-2">
            <th scope="row" className="pl-6 border-0 py-7 pr-0">
                <Link href="/candidate-profile">
                    <a className="media min-width-px-235 align-items-center">
                        <div className="circle-36 mr-6">
                            <TechIcon language={bounty.languages[0]} />
                        </div>
                        <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                            {bounty.title}
                        </h4>
                    </a>
                </Link>
            </th>
            <td className="table-y-middle py-7 min-width-px-235 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    {bounty.bounty_value_usd}
                </h3>
            </td>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    {bounty.created_at}
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
