import { Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import Router from 'next/router';
import { useApi } from '@/context/ApiServiceContext';


export const ContactForm = () => {

    const { post } = useApi()

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const ContactFormSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email().required("Email is required"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required().min(50, "Message must be at least 50 characters"),
    });

    const submitForm = async (values) => {
        try {
            let contactDto = {
                name: values.name,
                sender_email_address: values.email,
                subject: values.subject,
                message: values.message,
            }
            await post('contact', contactDto)
            Router.push("/contact/success");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ContactFormSchema}
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
                    <form onSubmit={handleSubmit} >
                        <div className="row">
                            <div className="col-12 mb-7">
                                <label
                                    htmlFor="name"
                                    className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Very Rich Investor"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    required
                                />
                            </div>

                            <div className="col-lg-6 mb-7">
                                <label
                                    htmlFor="email"
                                    className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                    E-mail
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ceo@ycombinator.io"
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    required
                                />
                            </div>
                            <div className="col-lg-6 mb-7">
                                <label
                                    htmlFor="subject"
                                    className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Investment offer"
                                    id="subject"
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}
                                    required
                                />
                            </div>
                            <div className="col-lg-12 mb-7">
                                <label
                                    htmlFor="message"
                                    className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Type your message"
                                    className="form-control h-px-144"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                    required
                                ></textarea>
                            </div>
                            
                            <div className="col-lg-12 pt-4">
                            {errors.name && touched.name && <div className="alert alert-danger font-size-3">{errors.name}</div>}
                            {errors.email && touched.email && <div className="alert alert-danger font-size-3">{errors.email}</div>}
                            {errors.subject && touched.subject && <div className="alert alert-danger font-size-3">{errors.subject}</div>}
                            {errors.message && touched.message && <div className="alert alert-danger font-size-3">{errors.message}</div>}
                                <button
                                    type="submit"
                                    className="btn btn-primary text-uppercase w-100 h-px-48"
                                    disabled={isSubmitting}
                                >
                                    Send Now
                                </button>
                            </div>
                        </div>
                    </form>
                );
            }}
        </Formik>
    )
}