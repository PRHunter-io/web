import { useState } from "react";
import styled from "styled-components";
import { BountySent, PickRepo, ProvideData } from ".";

const FormContainer = styled.div`
`;

const CreateBountyForm = () => {
  const [formStep, setFormStep] = useState(0);
  const [bountyData, setBountyData] = useState(false);

  return (
    <FormContainer>
      {formStep !== 2 && (
        <PickRepo
          setFormStep={setFormStep}
          bountyData={bountyData}
          setBountyData={setBountyData}
        />
      )}
      {(formStep >= 1 && formStep !== 2) && (
        <ProvideData
          setFormStep={setFormStep}
          bountyData={bountyData}
          setBountyData={setBountyData}
        />
      )}

      {formStep > 1 && <BountySent />}
    </FormContainer>
  );
}

export default CreateBountyForm;