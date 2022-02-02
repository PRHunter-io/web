import { useState } from "react";
import { DetailsForm } from "./DetailsForm";
import { PickIssue } from "./PickIssue";
import { PickRepo } from "./PickRepo";

export const CreateBountyForm = () => {
  const [repository, setRepository] = useState(null)
  const [issue, setIssue] = useState(null)

  return (
    <>
      <PickRepo setRepository={setRepository} setIssue={setIssue} />
      <PickIssue repository={repository} setIssue={setIssue} issue={issue} />
      <DetailsForm repository={repository} issue={issue} />
    </>
  );
}
