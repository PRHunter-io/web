
import PageWrapper from '@/components/PageWrapper';
import { NextSeo } from 'next-seo';

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
                            <h3 className="text-center">Documentation</h3>

                            - Installing the PRHunter Github application

                            In order to create and manage bounties on PRHunter, you need to install the PRHunter Github App. 
                            Please install the app by going to the following url: 

                            You need to give the app permissions to all repositories for which you plan to create bounties. 

                            Once the app is installed, you can create and manage bounties for all repositories that have been access to.

                            // bounty management

                            - Creating a bounty

                            In order to create the bounty, go to the Dashboard from the user menu in the top right corner after signing in and click "Post a new bounty". 
                            Pick a repository and an issue for which you wish to set up a bounty and fill in the form details. 
                            Currently the bounty creation *does not* interact with actual smart contracts and is only for demonstration purposes. However, once the app is live additional steps will be required:
                            
                            After you fill in the bounty details, you will be required to deposit the bounty amount to the smart contract for a certain period (we're currently thinking about 2-3 weeks minimum).
                            The funds will be stored in the smart contract and will be payed out to whoever completes the bounty. If the bounty is not completed within that time period, the funds are returned to your metamask wallet, 
                            although you will have the option to resubmit the bounty.

                            The bounty submitter will be the one paying the gas fees. We're also planning a small maintenance fee to support the development of the platform. 

                            Please read the "Completing bounties" section to see the details on what is currently considered as bounty completion terms. 

                            - Updating a bounty


                            - Withdrawing a bounty


                            - Completing bounties

                            Unfortunately Github currently does not have an option to tie a PR with an issue 1-1 - you can have multiple PR's published and a merge of a PR is not synonomous with the solving of an issue. 
                            This is a limation we'll be trying to solve as elegantly as possible in future development effort, but for now we're going for the following conditions:

                            The first pull request to be *Accepted* or *Merged* by the submitter of the PR (or anyone with relevant access to the bounty) will automatically complete the bounty and 
                            pay out the reward to the PR submitter

                            This flow has a few flows, but it's enough to get the job done. The biggest limitation is that we need to know to which account the funds should be payed out, so
                            making sure that the submitter has his/hers Metamask wallet connected to PRHunter is absolutely essential. We will try to mitigate this later on, by collecting the bounty
                            in his name and safekeeping the funds until he connects his Github account. 



                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}