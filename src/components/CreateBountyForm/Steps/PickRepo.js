import { useEffect, useState } from "react";
import { Select } from "@/components/Core";
import { authService } from "@/services/auth.service"

const PickRepo = ({ bountyData, setBountyData }) => {
  const [pickedData, setPickedData] = useState({});
  const [repoOptions, setRepoOptions] = useState(false);
  const [issuesOptions, setIssuesOptions] = useState(false);

  useEffect(() => {
    setBountyData(prevState => (
      {
        ...prevState,
        issuesOptions,
        repo_name: pickedData.repo_name,
        issue_number: false
      }
    ))

  }, [issuesOptions])

  const apiUrl = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

  const getRepoData = async (issuesUrl) => {
    const token = authService.getAccessToken();
    const url = issuesUrl ? issuesUrl : `${apiUrl}/repo`;
    let optionsArr = [];
    if (!token) return;

    try {
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      const data = await res.json();
      setPickedData({
        ...pickedData,
        issue_number: false
      })

      if (issuesUrl) {
        if (data.length > 0) {
          data.forEach(element => {
            optionsArr.push({
              value: element.number,
              label: element.title
            });
          });
        } else {
          optionsArr = ['empty'];
        }

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

  const moveToFinalStep = () => {
    setBountyData(prevState => (
      {
        ...prevState,
        repoOptions,
        issuesOptions,
        repo_name: pickedData.repo_name,
        issue_number: pickedData.issue_number,
      }
    ))
  }

  useEffect(() => {
    if (!pickedData.repo_name) return;
    const repoName = pickedData.repo_name;
    const issueUrl = `${apiUrl}/repo/${repoName}/issues`;
    getRepoData(issueUrl);
  }, [pickedData.repo_name])

  useEffect(() => {
    moveToFinalStep();
  }, [pickedData.issue_number])

  return (
    <>
      <h2 className="text-muted mb-6">Pick issue</h2>
      {repoOptions ?
        <>
          <Select
            options={repoOptions}
            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
            border={false}
            placeholder={'Pick repository'}
            queryValue={true}
            onChange={e => setPickedData({
              ...pickedData,
              repo_name: e.value
            })
            }
          />
        </>
        :
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
      }
      {issuesOptions && issuesOptions[0] !== 'empty' ?
        <>
          <Select
            key={issuesOptions[0].label}
            options={issuesOptions}
            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 mt-6"
            border={false}
            placeholder={'Pick issue'}
            queryValue={true}
            onChange={e => setPickedData({
              ...pickedData,
              issue_number: e.value
            })
            }
          />
        </>
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

export default PickRepo;