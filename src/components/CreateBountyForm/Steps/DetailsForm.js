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
              icon="far fa-file-alt pl-1 text-primary"
              placeholder=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <MySelect label="Bounty type" name="bountyType">
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
            <MySelect label="Language" name="language">
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
            <MySelect label="Experience required" name="experience">
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
      </fieldset>
    </>
  );
};
