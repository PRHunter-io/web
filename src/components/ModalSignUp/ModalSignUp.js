import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import GlobalContext from '../../context/GlobalContext';
import { SignUpForm } from './SignUpForm';
import { useAuth } from 'src/context/AuthUserContext';

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignUp = (props) => {
  const gContext = useContext(GlobalContext);
  const { githubSignIn } = useAuth();

  const signUpWithGithub = async () => {
    await githubSignIn();
  };

  const handleClose = () => {
    gContext.toggleSignUpModal();
  };

  const toggleModal = () => {
    gContext.toggleSignInUp();
  };

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.signUpModalVisible}
      onHide={gContext.toggleSignUpModal}
    >
      <Modal.Body className="p-0">
        <button
          type="button"
          className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-6">
              <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                <div className="pb-9">
                  <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                    Create a free account today
                  </h3>
                  <p className="mb-0 font-size-4 text-white">
                    Create your account to manage and complete Bounties on
                    PRHunter.io
                  </p>
                </div>
                <div className="border-top border-default-color-2 mt-auto">
                  <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">295</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        Completed bounties
                      </p>
                    </div>
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">14</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        New bounties today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                <div className="row">
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      onClick={signUpWithGithub}
                      className="font-size-4 font-weight-semibold position-relative text-white bg-black h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-github pos-xs-abs-cl font-size-7 ml-xs-4"></i>{' '}
                      <span className="d-none d-xs-block">
                        Sign up with Github
                      </span>
                    </a>
                  </div>
                </div>
                <div className="or-devider">
                  <span className="font-size-3 line-height-reset">Or</span>
                </div>
                <SignUpForm />
                <p className="font-size-4 text-center heading-default-color">
                  Already have an account?{' '}
                  <a href="/#" onClick={toggleModal} className="text-primary">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalSignUp;
