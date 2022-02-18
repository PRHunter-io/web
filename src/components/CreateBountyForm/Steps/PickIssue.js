import { Select } from '@/components/Core';
import { useIssues } from '@/lib/swr';
import { useEffect, useState } from 'react';
import { BountyService } from '../service';
import Link from 'next/link';
import { FieldTooltip } from '@/components/FieldTooltip';

export const PickIssue = ({ repository, setRepository, issue, setIssue }) => {
  const { issues, isLoading, error } = useIssues(repository?.full_name);
  const [existingBountyForIssue, setExistingBountyForIssue] = useState(null);

  const renderIssuePicker = (options, disabled = true, errorMsg) => (
    <div className="mb-8">
      <fieldset disabled={disabled}>
        <span className="text-muted mb-4">
          Issue
          <FieldTooltip
            icon="fa-question-circle"
            text="Pick an issue you'd like to create a bounty for"
          />
        </span>
        <Select
          options={options}
          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100"
          border={false}
          placeholder={'Pick issue'}
          value={
            issue
              ? {
                  value: issue,
                  label: issue.title,
                }
              : false
          }
          isDisabled={disabled}
          onChange={(e) => setIssue(e.value)}
        />
      </fieldset>
      {errorMsg ? <span className="text-danger mt-4">{errorMsg}</span> : ''}
    </div>
  );

  useEffect(async () => {
    if (repository) {
      try {
        await BountyService.checkIfIssueExists(issue);
        setExistingBountyForIssue(null);
        setRepository((prevState) => ({ ...prevState, existingBounty: false }));
      } catch (err) {
        if (err?.response?.status === 409) {
          let data = err.response.data;
          setExistingBountyForIssue(data);
          setRepository((prevState) => ({
            ...prevState,
            existingBounty: true,
          }));
        }
      }
    }
  }, [issue]);

  if (!repository || isLoading) return renderIssuePicker([]);

  if (issues.length === 0) {
    return renderIssuePicker(
      [],
      true,
      "We couldn't find any issues on this repository. Please create a Github issue first, then come back here to create a bounty."
    );
  }

  if (error)
    return renderIssuePicker(
      [],
      true,
      `${error.message}: ${error.info.message}`
    );

  const options = issues.map((issue) => ({
    value: issue,
    label: issue.title,
  }));

  if (existingBountyForIssue) {
    const ErrorMsg = () => (
      <>
        Looks like this issue already has an active/pending bounty. Click{' '}
        <Link href={`/bounties/${existingBountyForIssue.id}`}> here </Link> to
        go to the bounty.
      </>
    );

    return renderIssuePicker(options, false, <ErrorMsg />);
  }

  return renderIssuePicker(options, false);
};
