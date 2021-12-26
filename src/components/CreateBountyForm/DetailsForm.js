import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyTextArea } from "./fields";
import { BountyService } from "./service"
import { languages, bountyCurrency, bountyType, experienceLevel } from "@/utils/filters";
import { useRouter } from "next/router";

export const DetailsForm = ({ repository, issue }) => {

  const [createError, setCreateError] = useState(null)
  const router = useRouter()

  const submitForm = async (details) => {
    const repo_owner = repository.full_name.split('/')[0];
    const repo_name = repository.full_name.split('/')[1];
    const newBountyDto = {
      repo_owner: repo_owner,
      repo_name: repo_name,
      issue_number: issue.number,
      title: details.title,
      problem_statement: details.problemStatement,
      acceptance_criteria: details.acceptanceCriteria,
      languages: [
        details.language
      ],
      tags: [],
      experience: details.experience,
      bounty_type: details.bountyType,
      bounty_value: details.bountyAmount,
      bounty_currency: details.currency
    }
    try {
      await BountyService.createNewBounty(newBountyDto);
      router.push("/dashboard/success")
    } catch (error) {
      console.log(error.response)
      setCreateError(error.response.data.message)
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          bountyType: bountyType.values.map(exp => exp.value)[0],
          language: languages.values.map(exp => exp.value)[0],
          experience: experienceLevel.values.map(exp => exp.value)[0],
          problemStatement: "",
          acceptanceCriteria: "",
          currency: "ETH",
          bountyAmount: "0.001",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(15, "At least 15 characters are required")
            .max(100, "Must be 100 characters or less")
            .required("Title is required"),
          bountyType: Yup.string()
            .oneOf(
              bountyType.values.map(exp => exp.value),
            )
            .required("Bounty type is required"),
          language: Yup.string()
            .oneOf(
              languages.values.map(exp => exp.value),
            )
            .required("Language is required"),
          experience: Yup.string()
            .oneOf(
              experienceLevel.values.map(exp => exp.value),
            )
            .required("Experience is required"),
          problemStatement: Yup.string()
            .min(15, "At least 15 characters are required")
            .max(100, "Must be 240 characters or less")
            .required("Problem statement is required"),
          acceptanceCriteria: Yup.string()
            .min(15, "At least 15 characters are required")
            .max(100, "Must be 240 characters or less")
            .required("Acceptance criteria are required"),
          currency: Yup.string()
            .oneOf(
              bountyCurrency.values.map(exp => exp.value),
            )
            .required("Currency is required"),
          bountyAmount: Yup.number().min(0.00001, "Amount too small").max(100, "Amount too large").required("Bounty amount is required")
        })}
        onSubmit={async values => {
          await submitForm(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <fieldset disabled={issue === null}>
              <div className="row">
                <div className="col-lg-12">
                  <MyTextInput
                    label="Bounty title"
                    name="title"
                    type="text"
                    icon="far fa-file-alt pl-1 text-primary"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <MySelect
                    label="Bounty type"
                    name="bountyType">
                    {bountyType.values.map((exp) => (
                      <option key={exp.value} value={exp.value}>{exp.label}</option>
                    ))}
                  </MySelect>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <MySelect
                    label="Language"
                    name="language">
                    {languages.values.map((exp) => (
                      <option key={exp.value} value={exp.value}>{exp.label}</option>
                    ))}
                  </MySelect>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <MySelect
                    label="Experience required"
                    name="experience"
                  >
                    {experienceLevel.values.map((exp) => (
                      <option key={exp.value} value={exp.value}>{exp.value}</option>
                    ))}
                  </MySelect>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <MyTextArea
                    label="Problem statement"
                    name="problemStatement"
                    type="text"
                    placeholder="Try to describe in a few sentences what is the nature of problem that needs to be solved. The Github issue descrption is a good place to start."
                  />
                </div>
                <div className="col-lg-12">
                  <MyTextArea
                    label="Acceptance criteria"
                    name="acceptanceCriteria"
                    type="text"
                    placeholder="Please specify what solution you would find acceptable. The more details you put here, the better."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <MySelect
                    label="Currency (Blockchain)"
                    name="currency">
                    {bountyCurrency.values.map((exp) => (
                      <option key={exp.value} value={exp.value}>{exp.label}</option>
                    ))}
                  </MySelect>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <MyTextInput
                    label="Bounty amount"
                    name="bountyAmount"
                    type="number" />
                </div>
                <div className="col-lg-6">
                  <span className="text-muted pr-2 mb-4">Estimated USD value: </span>
                  <p className="h-px-48 mb-6">0$</p>
                </div>
              </div>
              <div className="row justify-content-end">
                <button disabled={isSubmitting} className="btn-submit text-uppercase btn btn-lg btn-primary" type="submit">Create</button>
              </div>
            </fieldset>
            {createError && <div className="error mb-4">{createError}</div>}
          </Form>
        )}
      </Formik>
    </>
  );
};
