import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useAuth } from 'src/context/AuthUserContext';

export const SignInForm = () => {
  const [showPass, setShowPass] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const { signIn } = useAuth();

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const initialValues = {
    email: '',
    password: '',
    termsCheck: false,
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(10, 'Minimum 10 characters'),
    termsCheck: Yup.boolean().required(),
  });

  const submitForm = async (values) => {
    await signIn(values.email, values.password, setLoginError);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = formik;
        return (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <label
                htmlFor="email"
                className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
              >
                E-mail
              </label>
              <Field
                type="email"
                className="form-control"
                placeholder="example@gmail.com"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <small className="text-danger">{errors.email}</small>
              ) : null}
            </div>
            <div className="form-group">
              <label
                htmlFor="password"
                className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
              >
                Password
              </label>
              <div className="position-relative">
                <Field
                  type={showPass ? 'password' : 'text'}
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  className="blank-btn show-password pos-abs-cr fas mr-6 text-black-2"
                  onClick={(e) => {
                    e.preventDefault();
                    togglePassword();
                  }}
                >
                  <span className="d-none">none</span>
                </button>
              </div>
              {errors.password && touched.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>
            <div className="form-group d-flex flex-wrap justify-content-end">
              <button
                type="button"
                className="blank-btn font-size-3 text-dodger line-height-reset"
              >
                Forgot your password?
              </button>
            </div>
            <div className="form-group mb-8">
              <button
                type="submit"
                className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                data-cy="log-in-button"
              >
                Log in
              </button>
              {loginError && (
                <small className="text-danger">{loginError}</small>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
