import React from 'react';
import { MyTextInput, MySelect, MyTextArea } from '../fields';
import { languages, bountyType, experienceLevel } from '@/utils/filters';

export const DetailsForm = ({ repository, issue }) => {
  return (
    <>
      <fieldset disabled={issue === null || repository.existingBounty}>
        <div className="row">
          <div className="col-lg-12">
            <MyTextInput
              label="Bounty title"
              name="title"
              type="text"
              placeholder=""
              tooltip="Bounty title should be short and concise"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <MySelect
              label="Bounty type"
              name="bountyType"
              tooltip="Try to pick a category which best fits the problem"
            >
              {bountyType.values.map((exp) => (
                <option key={exp.value} value={exp.value}>
                  {exp.label}
                </option>
              ))}
            </MySelect>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <MySelect
              label="Language"
              name="language"
              tooltip="If there are multiple languages involved, pick the most used one"
            >
              {languages.values.map((exp) => (
                <option key={exp.value} value={exp.value}>
                  {exp.label}
                </option>
              ))}
            </MySelect>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <MySelect
              label="Experience required"
              name="experience"
              tooltip="This determines the target audience for the bounty, please take into consideration the repository complexity as well"
            >
              {experienceLevel.values.map((exp) => (
                <option key={exp.value} value={exp.value}>
                  {exp.value}
                </option>
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
              tooltip="If you're having trouble describing the problem, have a look at some of the completed bounties"
            />
          </div>
          <div className="col-lg-12">
            <MyTextArea
              label="Acceptance criteria"
              name="acceptanceCriteria"
              type="text"
              tooltip="Ideally, the acceptance criteria consist of no more than 3 bullet points"
              placeholder="Please specify what solution you would find acceptable. The more details you put here, the better."
            />
          </div>
        </div>
      </fieldset>
    </>
  );
};
