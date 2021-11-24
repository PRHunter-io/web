import { useEffect, useState } from "react";
import { Select } from "@/components/Core";

const PickRepo = ({ nextFormStep, bountyData, setBountyData }) => {
  const [pickedData, setPickedData] = useState({
    repo_name: bountyData.repo_name ? bountyData.repo_name : undefined,
    issue_number: bountyData.issue_number >= 0 ? bountyData.issue_number : undefined
  });

  const [repoOptions, setRepoOptions] = useState(bountyData.repoOptions ? bountyData.repoOptions : false);

  const [issuesOptions, setIssuesOptions] = useState(bountyData.issuesOptions ? bountyData.issuesOptions : false);

  // API ISSUE !!!
  // const url = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/repo`;

  // const getRepos = async () => {
  //   const token = localStorage.getItem('ACCESS_TOKEN');
  //   try {
  //     const res = await fetch(url, {
  //       headers: {
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       },
  //     });

  //     const repos = await res.json();
  //     console.log(repos);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   if (bountyData.repoOptions) return;

  //   getRepos();
  // }, [])

  const getRepoData = async (issuesUrl) => {
    const url = issuesUrl ? issuesUrl : '/api/repos';

    const token = localStorage.getItem('ACCESS_TOKEN');
    let optionsArr = [];

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
    nextFormStep();
  }

  useEffect(() => {
    if (!pickedData.repo_name) return;

    getRepoData('/api/issues');
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
            onChange={e => setPickedData({
              ...pickedData,
              issue_number: e.value
            })}
          />
          <button
            onClick={moveToNextStep}
            disabled={pickedData.issue_number === undefined ? true : false}
            className='line-height-reset mt-6 btn-submit text-uppercase btn btn-primary'
          >
            next step
          </button>
        </>
        :
        <></>
      }

    </>
  );
}

export default PickRepo;