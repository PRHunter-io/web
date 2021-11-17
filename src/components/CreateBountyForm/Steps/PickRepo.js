import { useState } from "react";
import fetcher from "src/utils/fetcher";
import useSWR from "swr";

const PickRepo = ({ nextFormStep, setBountyData }) => {
  const [repo, setRepo] = useState(false);
  const { data, error } = useSWR(
    "/api/repos",
    fetcher
  );

  const moveToNextStep = () => {
    setBountyData(prevState => (
      {
        ...prevState,
        repo_name: repo
      }
    ))
    nextFormStep();
  }

  return (
    <>
      <h1>Pick Repo!</h1>
      <div className="list-group">
        {data ? data.map((item) => (
          <button
            key={item.id}
            className={repo === item.full_name ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}
            onClick={() => setRepo(item.full_name)}
            style={{
              outline: 'none'
            }}
          >
            {item.name}
          </button>
        )) :
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden"></span>
          </div>
        }
      </div>
      <button
        onClick={moveToNextStep}
        disabled={!repo ?? false}
        className='line-height-reset mt-6 btn-submit text-uppercase btn btn-primary'
      >
        next step
      </button>
    </>
  );
}

export default PickRepo;