import { Formik } from 'formik';
import React, { useState } from 'react'
import * as Yup from "yup";
import Router from 'next/router';
import { useAuth } from 'src/context/AuthUserContext';

export const SignUpForm = () => {

    const [showPassFirst, setShowPassFirst] = useState(true);
    const [showPassSecond, setShowPassSecond] = useState(true);
    const { signUp } = useAuth();

    const togglePasswordFirst = () => {
        setShowPassFirst(!showPassFirst);
    };

    const togglePasswordSecond = () => {
        setShowPassSecond(!showPassSecond);
    };

    const initialValues = {
        email: "",
        password: "",
        passwordConfirmation: "",
    };

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email().required("Name is required"),
        password: Yup.string()
            .required("Password is required")
            .min(10, "Minimum 10 characters"),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const submitForm = async (values) => {
        let resp = await signUp(values.email, values.password)
        console.log(resp)
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
                    handleSubmit } = formik;
                return (
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e)}} >
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
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                required
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
                                    type={showPassFirst ? "password" : "text"}
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    required
                                />
                                <a
                                    href="/#"
                                    className="show-password pos-abs-cr fas mr-6 text-black-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        togglePasswordFirst();
                                    }}
                                >
                                    <span className="d-none">none</span>
                                </a>
                            </div>
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="passwordConfirmation"
                                className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                            >
                                Confirm Password
                            </label>
                            <div className="position-relative">
                                <input
                                    type={showPassSecond ? "passwordConfirmation" : "text"}
                                    className="form-control"
                                    id="passwordConfirmation"
                                    placeholder="Enter password"
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirmation}
                                    required
                                />
                                <a
                                    href="/#"
                                    className="show-password pos-abs-cr fas mr-6 text-black-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        togglePasswordSecond();
                                    }}
                                >
                                    <span className="d-none">none</span>
                                </a>
                            </div>
                        </div>
                        <div className="form-group d-flex flex-wrap justify-content-between mb-1">
                            <label
                                htmlFor="terms-check2"
                                className="gr-check-input d-flex  mr-3"
                            >
                                <input
                                    className="d-none"
                                    type="checkbox"
                                    id="terms-check2"
                                />
                                <span className="checkbox mr-5"></span>
                                <span className="font-size-3 mb-0 line-height-reset d-block">
                                    Agree to the{" "}
                                    <a href="/#" className="text-primary">
                                        Terms &amp; Conditions
                                    </a>
                                </span>
                            </label>
                        </div>
                        <div className="form-group mb-8">
                            <button
                             type="submit" className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase" disabled={isSubmitting}>
                                Sign Up{" "}
                            </button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    )



}