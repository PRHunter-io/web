import { useEffect, useState } from "react";
import styled from "styled-components";
import { BountySent, CheckData, PickRepo, ProvideData } from ".";

const FormContainer = styled.div`
`;

const CreateBountyForm = () => {
  const [formStep, setFormStep] = useState(0);
  const [bountyData, setBountyData] = useState(false);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <FormContainer>
      {formStep < 2 && (
        <div
          className="
          d-flex 
          align-items-center 
          justify-content-between
          mb-6
          "
        >
          <span className="py-3">
            Step {formStep + 1} of 2
          </span>

          {formStep > 0 && (
            <button
              className="line-height-reset btn-submit text-uppercase btn btn-primary"
              onClick={prevFormStep}
              type="button"
            >
              Back
            </button>
          )}
        </div>
      )}

      {formStep === 0 && (
        <PickRepo
          nextFormStep={nextFormStep}
          bountyData={bountyData}
          setBountyData={setBountyData}
        />
      )}
      {formStep === 1 && (
        <ProvideData
          nextFormStep={nextFormStep}
          bountyData={bountyData}
          setBountyData={setBountyData}
        />
      )}
      {/* {formStep === 2 && (
        <CheckData
          nextFormStep={nextFormStep}
          bountyData={bountyData}
        />
      )} */}

      {formStep > 1 && <BountySent />}
    </FormContainer>
  );
}

export default CreateBountyForm;