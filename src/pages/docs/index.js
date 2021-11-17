
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


                            - Creating a bounty


                            - Updating a bounty


                            - Rejecting a bounty



                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}