import Avatar from '@/components/Avatar';
import PageWrapper from '@/components/PageWrapper';
import { NextSeo } from 'next-seo';
import lmyslinski from '../../../public/images/about/lmyslinski.jpeg';
import Link from 'next/link';

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
              <div className="row">
                <Avatar picture={lmyslinski} alt="lmyslinski" />
                <span className="mt-5 h6">
                  Hi, I'm Łukasz and I'm the founder of PRHunter.io
                </span>
              </div>
              <div className="mt-10">
                <p>
                  Earlier this year, as I worked on a different side project I
                  was looking for some help. I knew exactly what I wanted to
                  get, I was looking for someone to write some code according to
                  specification. I just wanted to pay X to whoever gets the job
                  done. <br />
                </p>
                <p>
                  And that's what PRHunter is all about. You publish Bounties on
                  Github issues, someone solves these issues for you, you pay
                  them.
                </p>
                <p>
                  Any feedback is welcome, don't hestitate to reach out on{' '}
                  <Link href="https://github.com/PRHunter-io/web/discussions">
                    Github
                  </Link>{' '}
                  or via the <Link href="/contact">Contact Form</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
