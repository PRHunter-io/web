import React from 'react';
import PageWrapper from '../components/PageWrapper';

const EmailVerifySuccess = () => {
  return (
    <>
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
          <div className="container">
            <div className="mb-20">
              <h3 className="text-center">Success</h3>
              <div className="row">
                <p className="text-center">Email verified successfully.</p>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default EmailVerifySuccess;
