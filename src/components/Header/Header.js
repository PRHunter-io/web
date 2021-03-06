import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Alert, Container } from 'react-bootstrap';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import GlobalContext from '../../context/GlobalContext';
import Offcanvas from '../Offcanvas';
import NestedMenu from '../NestedMenu';
import { device } from '../../utils';
import Logo from '../Logo';

import { ProfileControls } from './ProfileControls';
import { HeaderMenu } from './HeaderMenu';
import { useAuth } from 'src/context/AuthUserContext';
import classNames from 'classnames';

const ResendEmailBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
  }
`;

const SiteHeader = styled.header`
  .dropdown-toggle::after {
    opacity: 0;
  }

  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;

  @media ${device.lg} {
    position: fixed !important;
    transition: 0.6s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.6s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: '#fff';
    }
  }
`;

const ToggleButton = styled.button`
  color: ${({ dark, theme }) =>
    dark ? theme.colors.lightShade : theme.colors.heading}!important;
  border-color: ${({ dark, theme }) =>
    dark ? theme.colors.lightShade : theme.colors.heading}!important;
`;

const Header = () => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const { user, resendVerificationEmail } = useAuth();
  const emailData = gContext.emailData;
  const isEmailDataInvalid =
    emailData && user && (!emailData.email || !emailData.isEmailVerified);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const contextData = gContext.emailData;
    const localStorageData = JSON.parse(localStorage.getItem('emailData'));

    const compareEmails = contextData?.email !== localStorageData?.email;
    const compareIsEmailVerified =
      contextData?.isEmailVerified !== localStorageData?.isEmailVerified;

    (compareEmails || compareIsEmailVerified) &&
      gContext.setEmailData(JSON.parse(localStorage.getItem('emailData')));
  }, [gContext]);

  const headerClassNames = classNames(
    {
      [gContext.header.bgClass]: gContext.header.bgClass,
      'site-header--menu-left': gContext.header.align === 'left',
      'site-header--menu-right': gContext.header.align === 'right',
      'site-header--menu-center':
        gContext.header.align !== 'left' && gContext.header.align !== 'right',
      'dark-mode-texts': gContext.header.theme === 'dark',
      scrolling: showScrolling,
      'reveal-header':
        (gContext.header.reveal && showReveal) || isEmailDataInvalid,
      'bg-blackish-blue':
        gContext.header.reveal &&
        showReveal &&
        gContext.header.theme === 'dark',
    },
    'site-header site-header--sticky  site-header--absolute py-7 py-xs-0 sticky-header'
  );

  return (
    <>
      <SiteHeader className={headerClassNames}>
        <Container
          fluid={gContext.header.isFluid}
          className={gContext.header.isFluid ? 'pr-lg-9 pl-lg-9' : ''}
        >
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-0">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              <Logo />
            </div>
            <HeaderMenu />

            {user ? <ProfileControls /> : <SignInControls />}

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? 'collapsed' : ''
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={gContext.header.theme === 'dark' ? 1 : 0}
            >
              <i className="fas fa-bars"></i>
            </ToggleButton>
          </nav>
        </Container>
        {isEmailDataInvalid && (
          <Alert variant="warning" className="mb-0 rounded-0 text-center">
            {!emailData.email
              ? 'Please configure your email address'
              : !emailData.isEmailVerified && (
                  <>
                    Please confirm your email address. Click{' '}
                    <ResendEmailBtn onClick={resendVerificationEmail}>
                      here
                    </ResendEmailBtn>{' '}
                    to send confirmation email .
                  </>
                )}
          </Alert>
        )}
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu />
      </Offcanvas>
    </>
  );
};

const SignInControls = () => {
  const gContext = useContext(GlobalContext);
  return (
    <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
      <a
        className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
        data-cy="log-in-modal-button"
        onClick={(e) => {
          e.preventDefault();
          gContext.toggleSignInModal();
        }}
      >
        Log In
      </a>
      <a
        className={`btn btn-primary text-uppercase font-size-3`}
        onClick={(e) => {
          e.preventDefault();
          gContext.toggleSignUpModal();
        }}
      >
        Sign Up
      </a>
    </div>
  );
};

export default Header;
