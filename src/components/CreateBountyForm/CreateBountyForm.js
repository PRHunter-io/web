import { useEffect, useState } from "react";
import styled from "styled-components";
import { PickRepo, ProvideData } from ".";
import PickIssue from "./Steps/PickIssue";

const FormContainer = styled.div`
`;

const CreateBountyForm = ({ setFormCompleted }) => {
  const [bountyData, setBountyData] = useState(false);

  return (
    <FormContainer>
      <h2 className="text-muted mb-6">Pick issue</h2>

      <PickRepo
        bountyData={bountyData}
        setBountyData={setBountyData}
      />
      <PickIssue
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