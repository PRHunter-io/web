import fetcher from "src/utils/fetcher";
import useSWR from "swr";

const PickIssue = ({ nextFormStep, bountyData, setBountyData }) => {
  const { data, error } = useSWR(
    "/api/issues",
    fetcher
  );

  const moveToNextStep = () => {
    setBountyData(prevState => (
      {
        ...prevState,
        picie: 'jo!'
      }
    ))
    nextFormStep();
  }

  return (
    <div>
      <button
        onClick={moveToNextStep}
      >
        Next step
      </button>
      <h1>Pick Issue!</h1>
    </div>
  );
}

export default PickIssue;