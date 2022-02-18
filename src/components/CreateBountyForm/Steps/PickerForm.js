const { PickIssue } = require('./PickIssue');
const { PickRepo } = require('./PickRepo');

export const PickerForm = ({ repository, setRepository, issue, setIssue }) => {
  return (
    <>
      <PickRepo
        repository={repository}
        setRepository={setRepository}
        setIssue={setIssue}
      />
      <PickIssue
        repository={repository}
        setRepository={setRepository}
        setIssue={setIssue}
        issue={issue}
      />
    </>
  );
};
