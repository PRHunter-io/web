import Avatar from '@/components/Avatar';
import PageWrapper from '@/components/PageWrapper';
import { NextSeo } from 'next-seo';
import lmyslinski from '../../../public/images/about/lmyslinski.jpeg';
import imgP from 'public/images/person-fill.svg';

export default function AboutPage() {
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
              <h3 className="text-center">About</h3>
              <p>
                <Avatar picture={lmyslinski} alt="lmyslinsk" />
              </p>
              <p>Hi, I'm Łukasz and I'm the founder of PRHunter.io</p>
              <p></p>
              <p>
                Earlier this year, I worked on a different side project and I
                was looking for some help. I knew exactly what I wanted to get,
                I was looking for someone to write some code according to
                specification. I just wanted to pay X to whoever gets the job
                done. <br />
              </p>
              <p>
                And that's what PRHunter is all about. You publish Bounties on
                Github issues, someone solves these issues for you, you pay
                them.
              </p>

              <p>
                Do you have a side project but got stuck and would like someone
                to help you out? Go ahead and post a Bounty! Are you missing a
                critical feature in some open-source library that you've been
                waiting for ages? No problem, just fork it on Github and post a
                Bounty! Perhaps your company doesnt't have the time to patch all
                the holes in your code, because all of your devs are too busy?
                PRHunter should be able to help out with that too (one day)
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
