import React, { useContext } from 'react';
import Link from 'next/link';
import { Collapse } from 'react-bootstrap';
import GlobalContext from '../../context/GlobalContext';
import imgL1LogoBlack from '../../../public/images/logo-main-black.svg';
import { dashboardItems } from './dashboardItems';
import Image from 'next/image';

const Sidebar = () => {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <Collapse in={gContext.showSidebarDashboard}>
        <div className="dashboard-sidebar-wrapper pt-11" id="sidebar">
          <div className="brand-logo px-11">
            <Link href="/">
              <a>
                <Image src={imgL1LogoBlack} alt="" />
              </a>
            </Link>
          </div>
          <div className="my-15 px-11">
            <Link href="/dashboard/new-bounty">
              <a className="btn btn-primary btn-xl w-100 text-uppercase">
                <span className="mr-5 d-inline-block">+</span>Post a new bounty
              </a>
            </Link>
          </div>
          <ul className="list-unstyled dashboard-layout-sidebar">
            {dashboardItems.map((item, index) => {
              return (
                <li className="" key={index}>
                  <Link href={`/dashboard/${item.name}`}>
                    <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                      <i className={`${item.iconClass} mr-7`}></i>
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Collapse>
      <button
        id="sidebar-mobile-button"
        className="blank-btn"
        onClick={(e) => {
          e.target.blur();
          gContext.toggleSidebarDashboard();
        }}
      >
        <i className="icon icon-sidebar-2"></i>
      </button>
    </>
  );
};

export default Sidebar;
