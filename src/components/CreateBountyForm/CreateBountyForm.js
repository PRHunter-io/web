import { useEffect, useState } from "react";
import styled from "styled-components";
import { PickRepo, ProvideData } from ".";

const FormContainer = styled.div`
`;

const CreateBountyForm = ({ setFormCompleted }) => {
  const [bountyData, setBountyData] = useState(false);

  return (
    <FormContainer>
      <PickRepo
        bountyData={bountyData}
        setBountyData={setBountyData}
      />
      {bountyData.issue_number && (
        <ProvideData
          key={`${bountyData.repo_name},${bountyData.issue_number}`}
          bountyData={bountyData}
          setBountyData={setBountyData}
          setFormCompleted={setFormCompleted}
        />
      )}
    </FormContainer>
  );
}

export default CreateBountyForm;