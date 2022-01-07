
import Offcanvas from '@/components/Offcanvas';
import PageWrapper from '@/components/PageWrapper';
import GlobalContext from '@/context/GlobalContext';
import { device } from '@/utils/breakpoints';
import { NextSeo } from 'next-seo';
import Link from "next/link";
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
        }
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
                                <div className='col-xl-8'>
                                    <h3 className="text-center mb-10">Documentation</h3>
                                    <div className="mb-10">
                                        <ChapterTitle>PRHunter Github Application</ChapterTitle>
                                        <Section>
                                            <SectionTitle
                                                id="installing-the-app"
                                                setSidebarList={setSidebarList}
                                            >Installing the application</SectionTitle>
                                            <p>
                                                In order to create and manage bounties on PRHunter, you need to install the PRHunter Github App.
                                            </p>
                                            <p className="font-weight-bold">
                                                <Link href="https://github.com/apps/prhunter-io">
                                                    You can find the app here.
                                                </Link>
                                            </p>
                                            <p>
                                                The app needs permission to read repository data and modify PR's in order to work correctly. Once the app is installed, you can create and manage bounties for all repositories that have been access to.
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
                                                If you have installed the app but have not given it necessary permissions to a repository you wish to post bounty for, you can modify the permissions accordingly. Just please make sure you're not removing permissions to any repositories that you have active bounties with.
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
                                                If you remove the application from your account, we will no longer be able to monitor any of your active bounties and pay out to the submitters.
                                            </p>
                                            <p>
                                                If you don't have any active bounties this action is harmless, however uninstalling the app with bounties active will be considered potentially fraudulent behaviour.
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
                                                In order to create a bounty, go to the Dashboard from the user menu in the top right corner after signing in and click "Post a new bounty".
                                                Pick a repository and an issue for which you wish to set up a bounty and fill in the form details.
                                                Currently the bounty creation *does not* interact with actual smart contracts and is only for demonstration purposes. However, once the app is live additional steps will be required:
                                            </p>
                                            <p>
                                                After you fill in the bounty details, you will be required to deposit the bounty amount to the smart contract for a certain period (we're currently thinking about 2-3 weeks minimum).
                                                The funds will be stored in the smart contract and will be payed out to whoever completes the bounty. If the bounty is not completed within that time period, the funds are returned to your metamask wallet,
                                                although you will have the option to resubmit the bounty.
                                            </p>
                                            <p>
                                                The bounty submitter will be the one paying the gas fees. We're also planning a small maintenance fee to support the development of the platform.
                                            </p>
                                            <p>
                                                Please read the "Completing bounties" section to see the details on what is currently considered as bounty completion terms.
                                            </p>
                                        </Section>
                                        <Section>
                                            <SectionTitle
                                                id="updating-bounties"
                                                setSidebarList={setSidebarList}
                                            >
                                                Updating a bounty
                                            </SectionTitle>
                                            <p>
                                                Updating a bounty is not possible, since we don't want submitters to mess with acceptance criteria and/or bounty value.
                                            </p>
                                        </Section>
                                        <Section>
                                            <SectionTitle
                                                id="withdrawing-bounties"
                                                setSidebarList={setSidebarList}
                                            >
                                                Withdrawing a bounty
                                            </SectionTitle>
                                            <p>
                                                It is possible to withdraw a bounty, however the funds will only be returned to your account once the bounty period is over. We will be closely monitoring the activity of our users to catch any fraudelent behaviour
                                                (such as withdrawing a bounty only to accept the PR and keep the funds)
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
                                                The first pull request to be <span className='font-weight-bold'>Accepted</span> or  <span className='font-weight-bold'>Merged</span> by the submitter of the PR (or anyone with relevant access to the repository) will automatically complete the bounty and
                                                pay out the reward to the PR submitter.
                                            </p>
                                            <p>
                                                Unfortunately Github currently does not have an option to tie a PR with an issue 1-1 - you can have multiple PR's published and a merge of a PR is not synonomous with the solving of an issue.
                                                This is a limation we'll be trying to solve as elegantly as possible in future development effort.
                                            </p>
                                        </Section>
                                    </div>
                                    <p>
                                        Looking for more docs? Please check out the <Link href="/faq">FAQ</Link> or <Link href="/contact">contact us directly</Link>, we'll be happy to help
                                    </p>

                                </div>
                                <div className='d-none d-xl-block col-xl-4 position-relative'>
                                    <DocsMenu sidebarList={sidebarList} />
                                </div>
                            </div>

                        </div>
                        <MobileOnly>
                            <Offcanvas
                                show={isShown}
                                onHideOffcanvas={() => setIsShown(prev => !prev)}
                                customLogo={<h4 className='text-primary mt-6'>Docs Menu</h4>}
                            >
                                <DocsMenu sidebarList={sidebarList} hideMenu={setIsShown} mobile />
                            </Offcanvas>
                            <OpenButton onClick={() => setIsShown(prev => !prev)}>
                            </OpenButton>
                        </MobileOnly>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}

const MobileOnly = styled.div`
    @media ${device.xl} {
        display:none;
    }
`

const StickyList = styled.ul`
    list-style: none;
    position: ${props => props.mobile ? "static" : "sticky"};
    padding-left: ${props => props.mobile ? "0" : "revert"};
    top: 160px;
`;

const OpenButton = styled.button`
    position: fixed;
    right: 25px;
    bottom: 25px;
    height: 45px;
    width: 45px;
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z' fill='%2300b074'/%3E%3C/svg%3E");    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    border: none;
`;

const DocsMenu = ({ sidebarList, hideMenu, mobile }) => (
    <StickyList mobile={mobile}>
        {
            sidebarList.map(item => (
                <li
                    key={item.id}
                    className='py-2'
                >
                    <AnchorLink
                        offset='100'
                        href={`#${item.id}`}
                        onClick={() => { if (mobile) { hideMenu(prev => !prev) } }}
                    >
                        {item.title}
                    </AnchorLink>
                </li>
            ))
        }
    </StickyList>
)

const ChapterTitle = (props) => (
    <h4 className='mb-10'>{props.children}</h4>
)

const SectionTitle = ({ id, children, setSidebarList }) => {
    useEffect(() => {
        setSidebarList(prevState => (
            [
                ...prevState,
                {
                    id: id,
                    title: children
                }
            ]
        ))
    }, [])

    return (
        <h5 className="mb-5" id={id}>
            {children}
        </h5>
    )
}

const Section = (props) => (
    <div className="mb-15">
        {props.children}
    </div>
)
