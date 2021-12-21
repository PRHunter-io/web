import { useEffect, useState } from "react";
import { Select } from "@/components/Core";
import { CreateBountyService } from "@/lib/create-bounty";

const PickIssue = ({ bountyData, setBountyData }) => {
  const [issuesOptions, setIssuesOptions] = useState(false);

  useEffect(() => {
    setBountyData(prevState => (
      {
        ...prevState,
        issue_number: false
      }
    ))

  }, [issuesOptions])

  useEffect(() => {
    if (!bountyData.repo_name) return;

    const repoName = bountyData.repo_name;
    CreateBountyService.getAvailableIssues(repoName, setIssuesOptions);
  }, [bountyData.repo_name])

  return (
    <>
      {issuesOptions && issuesOptions[0] !== 'empty' ?
        <Select
          options={issuesOptions}
          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 mt-6"
          border={false}
          placeholder={'Pick issue'}
          queryValue={true}
          onChange={e => setBountyData({
            ...bountyData,
            issue_number: e.value
          })
          }
        />
        :
        <>
          {
            issuesOptions[0] === 'empty' ?
              <small className="d-block mt-7 text-primary">
                List of active issues for this repository is empty.
              </small>
              : ''
          }
        </>
      }

    </>
  );
}

export default PickIssue;