import { useEffect, useState } from "react";
import styled from "styled-components";
import { BountySent, CheckData, PickIssue, PickRepo, ProvideData } from ".";

const FormContainer = styled.div`
`;

const CreateBountyForm = () => {
  const [formStep, setFormStep] = useState(0);
  const [bountyData, setBountyData] = useState(false);

  useEffect(() => {
    if (bountyData) {
      console.log(bountyData);
    };
  });

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <FormContainer>
      {formStep < 3 && (
        <>
          <span>
            Step {formStep + 1} of 3
          </span>

          {formStep > 0 && (
            <button
              onClick={prevFormStep}
              type="button"
            >
              back
            </button>
          )}
        </>
      )}

      {formStep === 0 && (
        <PickRepo
          nextFormStep={nextFormStep}
          setBountyData={setBountyData}
        />
      )}
      {formStep === 1 && (
        <PickIssue
          nextFormStep={nextFormStep}
          setBountyData={setBountyData}
        />
      )}
      {formStep === 2 && (
        <ProvideData
          nextFormStep={nextFormStep}
          setBountyData={setBountyData}
        />
      )}
      {formStep === 3 && (
        <CheckData
          nextFormStep={nextFormStep}
          bountyData={bountyData}
        />
      )}

      {formStep > 3 && <BountySent />}
    </FormContainer>
  );
}

export default CreateBountyForm;