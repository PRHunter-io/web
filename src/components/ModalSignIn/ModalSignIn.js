import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import Image from 'next/image'

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ButtonAccount = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  opacity: 0.7;
  transition: opacity .3s;
  &:focus {
    outline: none;
  }
  &:focus-visible,
  &:hover {
    opacity: 1;
  }
`

const ModalSignIn = (props) => {
  const [showPass, setShowPass] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const gContext = useContext(GlobalContext);

  const handleClose = () => {
    gContext.toggleSignInModal();
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.signInModalVisible}
      onHide={gContext.toggleSignInModal}
    >
      <Modal.Body className="p-0">
        <button
          type="button"
          className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
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
                    {isRegistering ? 'Create a free account today' : 'Welcome Back'}
                  </h3>
                  <p className="mb-0 font-size-4 text-white">
                    {isRegistering ? 'Create your account to continue and explore new jobs.' : 'Log in to continue your account and explore new jobs.'}
                  </p>
                </div>
                <div className="border-top border-default-color-2 mt-auto">
                  <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">295</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        New jobs posted today
                      </p>
                    </div>
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">14</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        New companies registered
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
                      href={process.env.NEXT_PUBLIC_EXTERNAL_API_URL + '/oauth2/authorization/github'}
                      className="font-size-4 font-weight-semibold position-relative text-white bg-black h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-github pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        {isRegistering ? 'Import from Github' : 'Log in with Github'}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="or-devider">
                  <span className="font-size-3 line-height-reset ">Or</span>
                </div>
                <form action="/">
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPass ? "password" : "text"}
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                      />
                      <a
                        href="/#"
                        className={`show-password pos-abs-cr fas mr-6 text-black-2${showPass ? "" : " show"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          togglePassword();
                        }}
                      >
                        <span className="d-none">none</span>
                      </a>
                    </div>
                  </div>
                  {isRegistering ?
                    <div className="form-group">
                      <label
                        htmlFor="password2"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Confirm Password
                      </label>
                      <div className="position-relative">
                        <input
                          type={showPass ? "password" : "text"}
                          className="form-control"
                          id="password2"
                          placeholder="Enter password"
                        />
                        <a
                          href="/#"
                          className={`show-password pos-abs-cr fas mr-6 text-black-2${showPass ? "" : " show"}`}
                          onClick={(e) => {
                            e.preventDefault();
                            togglePassword();
                          }}
                        >
                          <span className="d-none">none</span>
                        </a>
                      </div>
                    </div> : ''
                  }
                  <div className="form-group d-flex flex-wrap justify-content-between">
                    {isRegistering ?
                      <label
                        htmlFor="terms-check"
                        className="gr-check-input d-flex  mr-3"
                      >
                        <input
                          className="d-none"
                          type="checkbox"
                          id="terms-check"
                        />
                        <span className="checkbox mr-5"></span>
                        <span className="font-size-3 mb-0 line-height-reset d-block">
                          Agree to the{" "}
                          <a href="/#" className="text-primary">
                            Terms &amp; Conditions
                          </a>
                        </span>
                      </label> :
                      <label
                        htmlFor="remember-password"
                        className="gr-check-input d-flex  mr-3"
                      >
                        <input
                          className="d-none"
                          type="checkbox"
                          id="remember-password"
                        />
                        <span className="checkbox mr-5"></span>

                        <span className="font-size-3 mb-0 line-height-reset mb-1 d-block">
                          Remember password
                        </span>
                      </label>
                    }
                    <a
                      href="/#"
                      className="font-size-3 text-dodger line-height-reset"
                    >
                      Forget Password
                    </a>
                  </div>
                  <div className="form-group mb-8">
                    <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                      {isRegistering ? 'Sign up' : 'Log in'}
                    </button>
                  </div>
                  <p className="font-size-4 text-center heading-default-color">
                    {isRegistering ? 'Do you have an account? ' : 'Don’t have an account? '}
                    <ButtonAccount
                      type="button"
                      className="text-primary"
                      onClick={() => setIsRegistering(!isRegistering)}
                    >
                      {isRegistering ? 'Log in!' : 'Create a free account'}
                    </ButtonAccount>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};


export default ModalSignIn;
