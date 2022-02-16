import React from 'react';
import { MyTextInput, MySelect } from '../fields';
import { bountyCurrency } from '@/utils/filters';

export const PaymentsForm = ({ repository, issue }) => {
  return (
    <>
      <fieldset disabled={issue === null || repository.existingBounty}>
        <div className="row">
          <div className="col-lg-12">
            <MySelect label="Currency (Blockchain)" name="currency">
              {bountyCurrency.values.map((exp) => (
                <option key={exp.value} value={exp.value}>
                  {exp.label}
                </option>
              ))}
            </MySelect>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <MyTextInput
              label="Bounty amount"
              name="bountyAmount"
              type="number"
            />
          </div>
          <div className="col-lg-6">
            <span className="text-muted pr-2 mb-4">Estimated USD value: </span>
            <p className="h-px-48 mb-6">0$</p>
          </div>
        </div>
      </fieldset>
    </>
  );
};
