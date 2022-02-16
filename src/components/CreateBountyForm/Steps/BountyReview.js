import React from 'react';
import {
  BountyBody,
  BountyDetails,
  BountyHeader,
} from 'src/pages/bounties/[id]';

export const BountyReview = ({ repository, values }) => {
  const repo_owner = repository.full_name.split('/')[0];
  const repo_name = repository.full_name.split('/')[1];
  const currentDate = Date.now();

  const bounty = {
    acceptance_criteria: values.acceptanceCriteria,
    bounty_currency: values.currency,
    bounty_type: values.bountyType,
    bounty_value: values.bountyAmount,
    bounty_value_usd: 'todo',
    created_at: currentDate,
    experience: values.experience,
    languages: [values.language],
    problem_statement: values.problemStatement,
    repo_name: repo_name,
    repo_owner: repo_owner,
    tags: [],
    title: values.title,
  };

  return (
    <div className="row">
      <div className="col-12 mb-8">
        <div className="bg-white rounded-4 border border-mercury shadow-9">
          <BountyHeader bounty={bounty} />
          <BountyDetails bounty={bounty} />
          <BountyBody bounty={bounty} />
        </div>
      </div>
    </div>
  );
};
