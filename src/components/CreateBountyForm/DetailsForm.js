import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import styled from "styled-components";
import { languages, bountyCurrency, bountyType, experienceLevel } from "@/utils/filters";
import { Select } from '../Core';
import { FormikSelect } from '../FormikSelect';

const ValueInput = styled.input`
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
`;

export const DetailsForm = () => {

    const initialValues = {
        title: "",
        // experience: experienceLevel.values[0].label,
        bounty_type: "",
        languages: "",
        bounty_value: "",
        bounty_currency: "",
        problem_statement: "",
        acceptance_criteria: ""
    };

    const BountySchema = Yup.object().shape({
        title: Yup.string().required("Title is required").min("Minimum 10 characters").max("Maximum 100 characters"),
        experience: Yup.string().required("Experience is required"),
    });

    const submitForm = async (values) => {
        // await signUp(values.email, values.password)
        // router.push("/dashboard")
        // gContext.toggleSignUpModal();
    };

    const options = [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'C', label: 'C' }
    ]

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={BountySchema}
            onSubmit={submitForm}
        >
            <div className="mt-12">
                <span className="text-muted mb-4">Bounty details</span>

                <Form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        submitBounty()
                    }}
                >
                    <fieldset>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="bounty-title"
                                        className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                                    >
                                        Bounty Title <i className="far fa-file-alt pl-1 text-primary" />
                                    </label>
                                    <Field type="text" name="title" />
                                    <ErrorMessage name="text" component="div" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="select2"
                                        className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                                    >
                                        Experience <i className="fas fa-signal pl-1 text-primary" />
                                    </label>
                                    <Field name="experience" component={FormikSelect} options={options} />
                                    {/* {experienceLevel.values.map((exp) => (
                                                    <option key={exp.value} value={exp.value}>{exp.value}</option>
                                                ))} */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group position-relative">
                                            <label
                                                htmlFor="select3"
                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                                            >
                                                Bounty Type <i className="fas fa-briefcase pl-1 text-primary" />
                                            </label>
                                            <Select
                                                options={bountyType.values}
                                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                                border={false}
                                                queryValue={true}
                                                value={values.bounty_type}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group position-relative">
                                            <label
                                                htmlFor="select4"
                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                                            >
                                                Language <i className="fas fa-code pl-1 text-primary" />
                                            </label>
                                            <Select
                                                options={languages.values}
                                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                                border={false}
                                                queryValue={true}
                                                value={values.languages}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="bounty-title"
                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                                            >
                                                Bounty Value <i className="fas fa-coins pl-1 text-primary" />
                                            </label>
                                            <ValueInput
                                                type="number"
                                                className="form-control h-px-48"
                                                id="bounty-title"
                                                placeholder="Set your bounty price"
                                                value={values.bounty_value}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="select5"
                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                                            >
                                                Bounty currency <i className="fas fa-link pl-1 text-primary" />
                                            </label>
                                            <Select
                                                options={bountyCurrency.values}
                                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                                border={false}
                                                queryValue={true}
                                                value={values.bounty_currency}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="aboutTextarea"
                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                                            >
                                                Problem Statement <i className="fas fa-user-cog pl-1 text-primary" />
                                            </label>
                                            <textarea
                                                name="textarea"
                                                id="aboutTextarea"
                                                cols="30"
                                                rows="7"
                                                className="border border-mercury text-gray w-100 pt-4 pl-6"
                                                placeholder="Describe your problem"
                                                value={values.problem_statement}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="aboutTextarea"
                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                                            >
                                                Acceptance Criteria <i className="fas fa-user-check pl-1 text-primary" />
                                            </label>
                                            <textarea
                                                name="textarea"
                                                id="aboutTextarea"
                                                cols="30"
                                                rows="7"
                                                className="border border-mercury text-gray w-100 pt-4 pl-6"
                                                placeholder="Set clear expectations"
                                                value={values.acceptance_criteria}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                </div> */}
                        <div className="row">
                            <div className="col-md-12">
                                <button
                                    disabled={true}
                                    className="btn-submit text-uppercase btn btn-lg btn-primary"
                                >
                                    Create Bounty!
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </Form>
            </div>
        </Formik>
    );
}