
import PageWrapper from '@/components/PageWrapper';
import { NextSeo } from 'next-seo';

export default function Documentation() {
    return (
        <>
            <NextSeo
                title="Thank you for install PRHunter! | PRHunter"
                description="Learn about the next steps here"
            />
            <PageWrapper>
                <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
                    <div className="container">
                        <div className="mb-20">
                            <h3>Thank you for installing PRHunter!</h3>
                            <p>
                                You can now create and manage bounties on PRHunter.
                            </p>
                            <p>
                                If you don't have an account yet, please sign in with your Github Account
                            </p>
                            <p>
                                If you already have an account, please <a href="/docs#creating-bounties"> see the docs on creating bounties </a>
                            </p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}