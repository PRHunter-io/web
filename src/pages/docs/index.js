
import PageWrapper from '@/components/PageWrapper';
import { NextSeo } from 'next-seo';
import Link from "next/link";

export default function Documentation() {
    return (
        <>
            <NextSeo
                title="Documentation | PRHunter"
                description="A short description goes here."
            />
            <PageWrapper>
                <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
                    <div className="container">
                        <div className="mb-20">
                            <div className="row">
                                <div className='col-xl-8'>
                                    <h3 className="text-center mb-10">Documentation</h3>
                                    <div className="mb-10">
                                        <ChapterTitle>PRHunter Github Application</ChapterTitle>
                                        <Section>
                                            <SectionTitle id="installing-the-app">Installing the application</SectionTitle>
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
                                            <SectionTitle id="updating-the-app">Updating the application</SectionTitle>
                                            <p>
                                                If you have installed the app but have not given it necessary permissions to a repository you wish to post bounty for, you can modify the permissions accordingly. Just please make sure you're not removing permissions to any repositories that you have active bounties with.
                                            </p>
                                        </Section>
                                        <Section>
                                            <SectionTitle id="deleting-the-app">Deleting the application</SectionTitle>
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
                                            <SectionTitle id="creating-bounties">Creating a bounty</SectionTitle>
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
                                            <SectionTitle id="updating-bounties">Updating a bounty</SectionTitle>
                                            <p>
                                                Updating a bounty is not possible, since we don't want submitters to mess with acceptance criteria and/or bounty value.
                                            </p>
                                        </Section>
                                        <Section>
                                            <SectionTitle id="withdrawing-bounties">Withdrawing a bounty</SectionTitle>
                                            <p>
                                                It is possible to withdraw a bounty, however the funds will only be returned to your account once the bounty period is over. We will be closely monitoring the activity of our users to catch any fraudelent behaviour
                                                (such as withdrawing a bounty only to accept the PR and keep the funds)
                                            </p>
                                        </Section>
                                        <Section>
                                            <SectionTitle id="completing-bounties">Completing bounties</SectionTitle>
                                            <p>
                                                Unfortunately Github currently does not have an option to tie a PR with an issue 1-1 - you can have multiple PR's published and a merge of a PR is not synonomous with the solving of an issue.
                                                This is a limation we'll be trying to solve as elegantly as possible in future development effort, but for now we're going for the following conditions:
                                            </p>
                                            <p>
                                                The first pull request to be <span className='font-weight-bold'>Accepted</span> or  <span className='font-weight-bold'>Merged</span> by the submitter of the PR (or anyone with relevant access to the bounty) will automatically complete the bounty and
                                                pay out the reward to the PR submitter
                                            </p>
                                            <p>
                                                This flow has a few flows, but it's enough to get the job done. The biggest limitation is that we need to know to which account the funds should be payed out, so
                                                making sure that the submitter has his/hers Metamask wallet connected to PRHunter is absolutely essential. We will try to mitigate this later on, by collecting the bounty
                                                in his name and safekeeping the funds until he connects his Github account.
                                            </p>
                                        </Section>
                                    </div>
                                    <p>
                                        Looking for more docs? Please check out the <Link href="/faq">FAQ</Link> or <Link href="/contact">contact us directly</Link>, we'll be happy to help
                                    </p>

                                </div>
                                <div className='col-xl-4'>
                                    Sidemenu
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </PageWrapper>
        </>
    )
}

const ChapterTitle = (props) => (
    <h4 className='mb-10'>{props.children}</h4>
)

const SectionTitle = (props) => (
    <h5 className="mb-5" id={props.id}>
        {props.children}
    </h5>
)

const Section = (props) => (
    <div className="mb-15">
        {props.children}
    </div>
)
