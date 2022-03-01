import Offcanvas from '@/components/Offcanvas';
import PageWrapper from '@/components/PageWrapper';
import GlobalContext from '@/context/GlobalContext';
import { device } from '@/utils/breakpoints';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

export default function Documentation() {
  const [sidebarList, setSidebarList] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    gContext.toggleStickyPage(true);
    return () => {
      gContext.toggleStickyPage(false);
    };
  }, []);

  return (
    <>
      <NextSeo
        title="Documentation | PRHunter"
        description="A short description goes here."
      />
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-10 position-relative">
          <div className="container position-relative">
            <div className="mb-10">
              <div className="row">
                <div className="col-xl-8">
                  <h3 className="text-center mb-10">Documentation</h3>
                  <div className="mb-10">
                    <ChapterTitle>PRHunter Github Application</ChapterTitle>
                    <Section>
                      <SectionTitle
                        id="installing-the-app"
                        setSidebarList={setSidebarList}
                      >
                        Installing the application
                      </SectionTitle>
                      <p>
                        In order to create and manage bounties on PRHunter, you
                        need to install the PRHunter Github App.
                      </p>
                      <p className="font-weight-bold">
                        <Link href="https://github.com/apps/prhunter-io">
                          You can find the app here.
                        </Link>
                      </p>
                      <p>
                        The app needs permission to read repository data and
                        modify PR's in order to work correctly. Once the app is
                        installed, you can create and manage bounties for all
                        repositories that have been access to.
                      </p>
                    </Section>
                    <Section>
                      <SectionTitle
                        id="updating-the-app"
                        setSidebarList={setSidebarList}
                      >
                        Updating the application
                      </SectionTitle>
                      <p>
                        If you have installed the app but have not given it
                        necessary permissions to a repository you wish to post
                        bounty for, you can modify the permissions accordingly.
                        Just please make sure you're not removing permissions to
                        any repositories that you have active bounties with.
                      </p>
                    </Section>
                    <Section>
                      <SectionTitle
                        id="deleting-the-app"
                        setSidebarList={setSidebarList}
                      >
                        Deleting the application
                      </SectionTitle>
                      <p>
                        If you remove the application from your account, we will
                        no longer be able to monitor any of your active bounties
                        and pay out the bounty upon completion.
                      </p>
                      <p>
                        If you don't have any active bounties this action is
                        harmless, however uninstalling the app with bounties
                        active will be considered potentially fraudulent
                        behaviour.
                      </p>
                    </Section>
                  </div>
                  <div className="mb-10">
                    <ChapterTitle>Bounties</ChapterTitle>
                    <Section>
                      <SectionTitle
                        id="creating-bounties"
                        setSidebarList={setSidebarList}
                      >
                        Creating a bounty
                      </SectionTitle>
                      <p>
                        In order to create a bounty, go to the Dashboard from
                        the user menu in the top right corner after signing in
                        and click "Post a new bounty". Pick a repository and an
                        issue for which you wish to set up a bounty and fill in
                        the form details.
                      </p>
                      <p>
                        After you fill in the bounty details, you will be
                        required to deposit the bounty amount to the smart
                        contract for a certain period (1 week minimum). The
                        funds will be stored in the smart contract and will be
                        payed out to whoever completes the bounty. If the bounty
                        is not completed within that time period, the funds will
                        be returned to the original metamask wallet.
                      </p>
                      <p>
                        The bounty submitter will be the one paying the gas
                        fees.
                      </p>
                      <p>
                        Please read the "Completing bounties" section to see the
                        details on what is currently considered as bounty
                        completion terms.
                      </p>
                    </Section>
                    <Section>
                      <SectionTitle
                        id="operational-fee"
                        setSidebarList={setSidebarList}
                      >
                        Operational fee
                      </SectionTitle>
                      <p>
                        PRHunter maintains the bounty contracts which are
                        created by our users. This means that we periodically
                        interact with all smart contracts and perform action if
                        necessary. These actions include: <br />
                        <br />
                        - Paying out a completed bounty <br />
                        - Returning the bounty value to the owner upon
                        expiration <br />
                        <br />
                        Unfortunately the transaction fees for these operations
                        can get quite expensive. On top of that, we need to
                        support deploying updated contract factories as well as
                        the hosting and development of the platform. For the
                        reasons described here, we include an operional fee on
                        all bounties:
                        <p />
                        <p>
                          - flat 0.008 ETH/BNB for bounties &lt; 0.25 ETH/BNB{' '}
                          <br />- 3% for bounties &gt; 0.25 ETH/BNB
                        </p>
                        <p>
                          We'd love to lower or get rid of the fees totally, but
                          given the current state of the blockchain ecosystem we
                          don't see that being possible. We're looking into
                          using L2 and other chains as a means for lowering the
                          transaction fees. For now, we recommend using BNB
                          instead of ETH as the fees are much lower on that
                          chain.
                        </p>
                      </p>
                    </Section>
                    <Section>
                      <SectionTitle
                        id="eth-fees"
                        setSidebarList={setSidebarList}
                      >
                        Ethereum transaction costs
                      </SectionTitle>
                      <p>
                        With current state of Ethereum, transaction costs can be
                        quite extensive. We've built this project with the
                        future in mind, however until Eth 2.0 is released along
                        with other improvements, the cost of using Ethereum for
                        running smart contracts is substantial.
                      </p>
                      <p>
                        With this in mind, we've added support for Binance Smart
                        Chain - it's EVM compatible, which means that it works
                        exactly (for the most part) as Ethereum does, however it
                        does have much lower transaction fees. We encourage our
                        users to use BSC and its token, BNB, if then wish to
                        reduce the cost of their bounties.
                      </p>
                    </Section>
                    <Section>
                      <SectionTitle
                        id="updating-bounties"
                        setSidebarList={setSidebarList}
                      >
                        Updating a bounty
                      </SectionTitle>
                      <p>Updating a bounty is currently not possible.</p>
                    </Section>
                    <Section>
                      <SectionTitle
                        id="withdrawing-bounties"
                        setSidebarList={setSidebarList}
                      >
                        Withdrawing a bounty
                      </SectionTitle>
                      <p>
                        It is possible to withdraw a bounty, however the funds
                        will only be returned to your account once the bounty
                        period is over. We will be closely monitoring the
                        activity of our users to catch any fraudelent behaviour
                        (such as withdrawing a bounty only to accept the PR and
                        keep the funds)
                      </p>
                    </Section>
                    <Section>
                      <SectionTitle
                        id="completing-bounties"
                        setSidebarList={setSidebarList}
                      >
                        Completing bounties
                      </SectionTitle>
                      <p>
                        First of all, make sure you are registered on PRHunter
                        and have linked your Github account as well as added a
                        Metamask/web3 wallet address. <br />
                        <br />
                      </p>
                      <p>
                        In order to complete a bounty, fork the repository of
                        the linked issue and submit a PR to the original repo.
                        Make sure to copy the bounty ID from the bounty view and
                        post it in the body of the Pull Request.
                      </p>
                      <p>
                        If the PR is successfully linked to the bounty, a
                        comment will be posted on the Pull Request.
                      </p>
                      <p>
                        When the pull request is merged, the bounty value will
                        be sent from the bounty contract to the address
                        configured in your PRHunter account.
                      </p>
                    </Section>
                  </div>
                  <p>
                    Looking for more docs? Please check out the{' '}
                    <Link href="/faq">FAQ</Link> or{' '}
                    <Link href="/contact">contact us directly</Link>, we'll be
                    happy to help
                  </p>
                </div>
                <div className="d-none d-xl-block col-xl-4 position-relative">
                  <DocsMenu sidebarList={sidebarList} />
                </div>
              </div>
            </div>
            <MobileOnly>
              <Offcanvas
                show={isShown}
                onHideOffcanvas={() => setIsShown((prev) => !prev)}
                customLogo={<h4 className="text-primary mt-6">Docs Menu</h4>}
              >
                <DocsMenu
                  sidebarList={sidebarList}
                  hideMenu={setIsShown}
                  mobile
                />
              </Offcanvas>
              <OpenButton
                onClick={() => setIsShown((prev) => !prev)}
              ></OpenButton>
            </MobileOnly>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

const MobileOnly = styled.div`
  position: relative;
  z-index: 1000;

  @media ${device.xl} {
    display: none;
  }
`;

const StickyList = styled.ul`
  list-style: none;
  position: ${(props) => (props.mobile ? 'static' : 'sticky')};
  padding-left: ${(props) => (props.mobile ? '0' : 'revert')};
  top: 160px;
`;

const OpenButton = styled.button`
  position: fixed;
  right: 25px;
  bottom: 25px;
  height: 45px;
  width: 45px;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z' fill='%2300b074'/%3E%3C/svg%3E");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: none;
`;

const DocsMenu = ({ sidebarList, hideMenu, mobile }) => (
  <StickyList mobile={mobile}>
    {sidebarList.map((item) => (
      <li key={item.id} className="py-2">
        <AnchorLink
          offset="100"
          href={`#${item.id}`}
          onClick={() => {
            if (mobile) {
              hideMenu((prev) => !prev);
            }
          }}
        >
          {item.title}
        </AnchorLink>
      </li>
    ))}
  </StickyList>
);

const ChapterTitle = (props) => <h4 className="mb-10">{props.children}</h4>;

const SectionTitle = ({ id, children, setSidebarList }) => {
  useEffect(() => {
    setSidebarList((prevState) => [
      ...prevState,
      {
        id: id,
        title: children,
      },
    ]);
  }, []);

  return (
    <h5 className="mb-5" id={id}>
      {children}
    </h5>
  );
};

const Section = (props) => <div className="mb-15">{props.children}</div>;
