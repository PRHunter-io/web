import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown'

import Image from "next/image"
import imgP from "public/images/image/l3/png/pro-img.png";
import { useWindowSize } from "src/hooks";

export const ProfileControls = () => (
    <div className="header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center">
        <div>
            <Link href="/#">
                <a className="px-3 ml-7 font-size-7 notification-block flex-y-center position-relative">
                    <i className="fas fa-bell heading-default-color"></i>
                    <span className="font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white">
                        3
                    </span>
                </a>
            </Link>
        </div>
        <div>
            <Dropdown className="show-gr-dropdown py-5">
                <Dropdown.Toggle
                    as="a"
                    className="proile media ml-7 flex-y-center"
                >
                    <div className="circle-40">
                        <Image src={imgP} alt="" />
                    </div>
                    <i className="fas fa-chevron-down heading-default-color ml-6"></i>
                </Dropdown.Toggle>
                <ProfileMenu />
            </Dropdown>
        </div>
    </div>
)

const ProfileMenu = () => {
    return (
        <ProfileMenuHeader>
            <Link href="/dashboard">
                <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                    Dashboard
                </a>
            </Link>
            <Link href="/dashboard/settings">
                <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                    Settings
                </a>
            </Link>
            <Link href="/logout"  >
                <a className=" dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                    Log Out
                </a>
            </Link>
        </ProfileMenuHeader>
    )
}

const ProfileMenuHeader = (props) => {

    const size = useWindowSize();

    if (size.width <= 991) {
        return (<Dropdown.Menu
            className={"gr-menu-dropdown border-0 border-width-2 py-2 w-auto bg-default"}
            key=""
        >
            {props.children}
        </Dropdown.Menu>)
    } else {
        return (
            <div
                className="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default"
                key="2"
            >{props.children}</div>)
    }
}
