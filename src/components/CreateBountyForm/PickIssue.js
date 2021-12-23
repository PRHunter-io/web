import { useEffect, useState } from "react";
import { Select } from "@/components/Core";
import { CreateBountyService } from "@/lib/create-bounty";
import { useIssues } from "@/lib/swr";

export const PickIssue = ({ repository, setIssue }) => {

  const { issues, isLoading, error } = useIssues(repository?.full_name)

  const renderIssuePicker = (options, disabled = false) => (
    <div className="mb-8">
      <span className="text-muted mb-4">Issue:</span>
      <Select
        options={options}
        className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100"
        border={false}
        placeholder={'Pick issue'}
        queryValue={true}
        isDisabled={disabled}
        onChange={e => setIssue(e.value)
        }
      />
    </div>
  )

  if (!repository) {
    return renderIssuePicker([], true)
  }

  if (isLoading) return (
    renderIssuePicker([], false)
  )

  if (issues.length === 0) {
    return (
      <>
        {renderIssuePicker([], false)}
        <span className="mt-5">
          We couldn't find any issues on this repository. Please create a Github issue first, then come back here to create a bounty.
        </span>
      </>
    )
  }

  if (error) return (
    <>
      {renderIssuePicker([])}
      <span className="text-danger mt-5">
        {error.message}: {error.info.message}
      </span>
    </>
  )

  const options = issues.map(issue => ({
    value: issue,
    label: issue.title
  }))
  return renderIssuePicker(options, false)
}