import { useCryptoPrices } from '@/lib/swr';
import React from 'react';
import {
  BountyBody,
  BountyDetails,
  BountyHeader,
} from 'src/pages/bounties/[id]';
import { BountyPaymentReview } from './BountyPaymentReview';

export const BountyReview = ({
  repository,
  issue,
  values,
  commision,
  totalBountyValue,
}) => {
  const repo_owner = repository.full_name.split('/')[0];
  const repo_name = repository.full_name.split('/')[1];
  const currentDate = Date.now();

  const { cryptoPrices, isLoading } = useCryptoPrices();

  const getUsdPrice = (param) => {
    if (isLoading) {
      return 0.0;
    } else {
      const value =
        cryptoPrices.filter((t) => t.currency == values.currency)[0].usd_value *
        param;
      return value;
    }
  };

  const bounty = {
    acceptance_criteria: values.acceptanceCriteria,
    bounty_currency: values.currency,
    bounty_type: values.bountyType,
    bounty_value: values.bountyAmount,
    bounty_value_usd: 'todo',
    created_at: currentDate,
    expires_at: values.expirationDate,
    experience: values.experience,
    languages: [values.language],
    problem_statement: values.problemStatement,
    repo_name: repo_name,
    repo_owner: repo_owner,
    issue_number: issue.number,
    tags: [],
    title: values.title,
  };

  console.log(values.bountyAmount);
  console.log(commision);
  console.log(totalBountyValue);

  return (
    <div className="row">
      <div className="col-12 mb-8">
        <div className="bg-white rounded-4 border border-mercury shadow-9">
          <BountyHeader bounty={bounty} isPreview={true} />
          <BountyDetails bounty={bounty} isPreview={true} />
          <BountyBody bounty={bounty} isPreview={true} />
          <BountyPaymentReview
            currency={bounty.currency}
            bountyValue={values.bountyAmount}
            commision={commision}
            totalBountyValue={totalBountyValue}
            getUsdPrice={getUsdPrice}
          />
        </div>
      </div>
    </div>
  );
};
