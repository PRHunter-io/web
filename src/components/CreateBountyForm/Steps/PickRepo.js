import { useEffect, useState } from "react";
import { Select } from "@/components/Core";
import { authService } from "@/services/auth.service"

const PickRepo = ({ setFormStep, bountyData, setBountyData }) => {
  const [pickedData, setPickedData] = useState({
    repo_name: bountyData.repo_name ? bountyData.repo_name : undefined,
    issue_number: bountyData.issue_number >= 0 ? bountyData.issue_number : undefined
  });

  const [repoOptions, setRepoOptions] = useState(bountyData.repoOptions ? bountyData.repoOptions : false);

  const [issuesOptions, setIssuesOptions] = useState(bountyData.issuesOptions ? bountyData.issuesOptions : false);

  const apiUrl = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

  const getRepoData = async (issuesUrl) => {
    const token = authService.getAccessToken();
    const url = issuesUrl ? issuesUrl : `${apiUrl}/repo`;
    let optionsArr = [];
    if (!token) return;
    console.log('reqUrl', url);
    console.log('bearerToken', token);

    try {
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      const data = await res.json();
      if (issuesUrl) {
        data.forEach(element => {
          optionsArr.push({
            value: element.id,
            label: element.title
          });
        });

        setIssuesOptions(optionsArr)
      } else {
        data.forEach(element => {
          optionsArr.push({
            value: element.full_name,
            label: element.name
          });
        });

        setRepoOptions(optionsArr)
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (bountyData.repoOptions) return;

    getRepoData();
  }, [])

  const moveToNextStep = () => {
    setBountyData(prevState => (
      {
        ...prevState,
        repoOptions,
        issuesOptions,
        repo_name: pickedData.repo_name,
        issue_number: pickedData.issue_number
      }
    ))
    setFormStep(1);
  }

  useEffect(() => {
    if (!pickedData.repo_name) return;

    // API RETURNS ERROR CODE 500, 401 IN MESSAGE, YET BEARER IS DEFINED
    const repoName = pickedData.repo_name;
    const repoNameLowercase = repoName.toLowerCase();
    const issueUrl = `${apiUrl}/repo/${repoNameLowercase}/issues`;
    getRepoData(issueUrl);

    // getRepoData('/api/issues');
  }, [pickedData.repo_name])

  const handleRepoPick = (e) => {
    setPickedData({
      ...pickedData,
      repo_name: e.value
    })
  }

  return (
    <>
      <h2 className="text-muted">Pick issue</h2>
      {repoOptions ?
        <>
          <Select
            options={repoOptions}
            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
            border={false}
            placeholder={'Pick repository'}
            queryValue={bountyData.repo_name !== undefined ? bountyData.repo_name : true}
            onChange={e => handleRepoPick(e)}
          />
        </>
        :
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden"></span>
        </div>
      }
      {issuesOptions ?
        <>
          <Select
            options={issuesOptions}
            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 mt-6"
            border={false}
            placeholder={'Pick issue'}
            queryValue={bountyData.issue_number !== undefined ? bountyData.issue_number : true}
            onChange={e => {
              setPickedData({
                ...pickedData,
                issue_number: e.value
              })
              moveToNextStep();
            }
            }
          />
        </>
        :
        <></>
      }

    </>
  );
}

export default PickRepo;