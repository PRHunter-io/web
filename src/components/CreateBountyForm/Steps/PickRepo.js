import { useState } from "react";
import fetcher from "src/utils/fetcher";
import useSWR from "swr";

const PickRepo = ({ nextFormStep, setBountyData }) => {
  const { data, error } = useSWR(
    "/api/repos",
    fetcher
  );

  const moveToNextStep = () => {
    setBountyData(prevState => (
      {
        ...prevState,
        jedzenie: 'tak'
      }
    ))
    nextFormStep();
  }

  return (
    <div>
      <button
        onClick={moveToNextStep}
      >
        next step
      </button>
      <h1>Pick Repo!</h1>
    </div>
  );
}

export default PickRepo;