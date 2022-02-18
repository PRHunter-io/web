import React from 'react';
import { MyTextInput, MySelect, MyDatePicker } from '../fields';
import { bountyCurrency } from '@/utils/filters';
import { FieldTooltip } from '@/components/FieldTooltip';

export const PaymentsForm = ({ repository, issue }) => {
  return (
    <>
      <fieldset disabled={issue === null || repository.existingBounty}>
        <div className="row">
          <div className="col-lg-6">
            <MySelect
              label="Currency (Blockchain)"
              name="currency"
              tooltip="The platform on which the contract will be created"
            >
              {bountyCurrency.values.map((exp) => (
                <option key={exp.value} value={exp.value}>
                  {exp.label}
                </option>
              ))}
            </MySelect>
          </div>
          <div className="col-lg-6">
            <MyDatePicker
              label="Expiration date"
              name="expirationDate"
              tooltip="Minimum bounty duration is 7 days. You will have to lock in your funds in the smart contract for that period"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <MyTextInput
              label="Bounty amount"
              name="bountyAmount"
              type="number"
              tooltip="Enter the bounty value in the selected currency. Make sure you have such amount available in your wallet, as you will have to deposit it into the smart contract."
            />
          </div>
          <div className="col-lg-6">
            <span className="text-muted pr-2 mb-4">
              Estimated USD value:
              <FieldTooltip
                icon="fa-question-circle"
                text="The current USD value of the bounty"
              />
            </span>
            <p className="h-px-48 mb-6">0$</p>
          </div>
        </div>
      </fieldset>
    </>
  );
};
