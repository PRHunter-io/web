import { useEffect, useState } from "react";
import { Select } from "@/components/Core";
import { CreateBountyService } from "@/lib/create-bounty";

const PickRepo = ({ bountyData, setBountyData }) => {
  const [repoOptions, setRepoOptions] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      CreateBountyService.getAvailableRepos(setRepoOptions);
    };

    setIsMounted(true);
  }, [isMounted])

  const RepoSelect = () => {
    return (
      <Select
        options={repoOptions}
        className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
        border={false}
        placeholder={'Pick repository'}
        queryValue={bountyData.repo_name ? bountyData.repo_name : true}
        onChange={e => setBountyData({
          ...bountyData,
          repo_name: e.value
        })
        }
      />
    )
  }

  return (
    <>
      {repoOptions ?
        <RepoSelect />
        :
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
      }
    </>
  );
}

export default PickRepo;