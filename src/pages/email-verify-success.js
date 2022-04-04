import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthUserContext';
import PageWrapper from '../components/PageWrapper';

const EmailVerifySuccess = () => {
  const { checkEmailData } = useAuth();

  useEffect(() => {
    checkEmailData();
  }, []);

  return (
    <>
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-35 pt-sm-25 pt-23 pb-md-32 pb-sm-20 pb-17">
          <div className="container">
            <div className="text-center">
              <h1 className="text-primary">Success!</h1>
              <p>Email verified successfully.</p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default EmailVerifySuccess;
