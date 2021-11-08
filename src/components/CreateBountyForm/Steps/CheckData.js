const CheckData = ({ nextFormStep, bountyData }) => {

  const confirmData = async () => {
    try {
      const res = await fetch('/api/submit-bounty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: bountyData
      });

      const repos = await res.json();
      console.log(repos);
      console.log(bountyData);
      nextFormStep();

    } catch (err) {
      return false;
    }
  };

  return (
    <div>
      <h1>Is everything git?</h1>
      <button
        onClick={confirmData}
      >
        It is, create bounty!
      </button>
    </div>
  );
}

export default CheckData;