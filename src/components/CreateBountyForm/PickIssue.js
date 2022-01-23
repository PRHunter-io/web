import { Select } from "@/components/Core";
import { useIssues } from "@/lib/swr";
import { useEffect, useState } from "react";
import { BountyService } from "./service"
import Link from "next/link";

export const PickIssue = ({ repository, issue, setIssue }) => {

  const { issues, isLoading, error } = useIssues(repository?.full_name)
  const [existingBountyForIssue, setExistingBountyForIssue] = useState(null)

  const renderIssuePicker = (options, disabled = false) => (
    <div className="mb-8">
      <fieldset disabled={disabled}>
        <span className="text-muted mb-4">Issue</span>
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
      </fieldset>
    </div>
  )

  useEffect(async () => {
    try{
      await BountyService.checkIfIssueExists(issue)
    } catch(err){
      if (err?.response?.status === 409) {
        let data = err.response.data
        console.log(data)
        setExistingBountyForIssue(data)
      }
    }
    
  }, [issue])


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
        <span className="text-danger mt-4">
          We couldn't find any issues on this repository. Please create a Github issue first, then come back here to create a bounty.
        </span>
      </>
    )
  }

  if (error) return (
    <>
      {renderIssuePicker([])}
      <span className="text-danger mt-4">
        {error.message}: {error.info.message}
      </span>
    </>
  )

  if (existingBountyForIssue) return (
    <>
      {renderIssuePicker([])}
      <span className="text-danger mt-4">
      Looks like this issue already has an active bounty. 
      Click <Link href={`/bounties/${existingBountyForIssue.id}`}> here </Link> to go to the bounty
      </span>
    </>
  )

  const options = issues.map(issue => ({
    value: issue,
    label: issue.title
  }))
  return renderIssuePicker(options, false)
}