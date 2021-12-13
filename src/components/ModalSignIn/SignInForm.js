import { Formik } from 'formik';
import React, { useContext, useState } from 'react'
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { useAuth } from 'src/context/AuthUserContext';
import GlobalContext from 'src/context/GlobalContext';

export const SignInForm = () => {

    const [showPass, setShowPass] = useState(true);
    const gContext = useContext(GlobalContext);
    const router = useRouter()
    const { signIn } = useAuth();
    
    const togglePassword = () => {
        setShowPass(!showPass);
    };

    const initialValues = {
        email: "",
        password: "",
        termsCheck: false,
    };

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email().required("Name is required"),
        password: Yup.string()
            .required("Password is required")
            .min(10, "Minimum 10 characters"),
        termsCheck: Yup.boolean().required()
    });

    const submitForm = async (values) => {
        await signIn(values.email, values.password)
        router.push("/dashboard")
        gContext.toggleSignInModal();
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
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e)}}>
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
                                    type={showPass ? "password" : "text"}
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
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
                                        togglePassword();
                                    }}
                                >
                                    <span className="d-none">none</span>
                                </a>
                            </div>
                        </div>
                        <div className="form-group d-flex flex-wrap justify-content-end">
                           
                            <a
                                href="/#"
                                className="font-size-3 text-dodger line-height-reset"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <div className="form-group mb-8">
                            <button type="submit" className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                                Log in{" "}
                            </button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    )
}