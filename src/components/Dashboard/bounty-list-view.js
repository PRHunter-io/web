import Link from "next/link";
import Image from "next/image";

import imgP1 from"public/images/image/table-one-profile-image-1.png";

export const BountyListView = () => {
    return (
        <tr className="border border-color-2">
            <th scope="row" className="pl-6 border-0 py-7 pr-0">
                <Link href="/candidate-profile">
                    <a className="media min-width-px-235 align-items-center">
                        <div className="circle-36 mr-6">
                            <Image src={imgP1} alt="" className="w-100" />
                        </div>
                        <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                            Nicolas Bradley
                        </h4>
                    </a>
                </Link>
            </th>
            <td className="table-y-middle py-7 min-width-px-235 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    Senior Project Manager
                </h3>
            </td>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    12 July, 2020
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
                        View Application
                    </a>
                </div>
            </td>
            <td className="table-y-middle py-7 min-width-px-110 pr-0">
                <div className="">
                    <Link href="/contact">
                        <a className="font-size-3 font-weight-bold text-green text-uppercase">
                            Contact
                        </a>
                    </Link>
                </div>
            </td>
            <td className="table-y-middle py-7 min-width-px-100 pr-0">
                <div className="">
                    <Link href="/#">
                        <a className="font-size-3 font-weight-bold text-red-2 text-uppercase">
                            Reject
                        </a>
                    </Link>
                </div>
            </td>
        </tr>
    )
}
