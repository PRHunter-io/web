// CHECK IF NEEDED

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
      nextFormStep();

    } catch (err) {
      return false;
    }
  };

  return (
    <div>
      <h2 className="text-muted">Is everything git?</h2>
      <button
        className='line-height-reset mt-6 btn-submit text-uppercase btn btn-primary'
        onClick={confirmData}
      >
        It is, create bounty!
      </button>
    </div>
  );
}

export default CheckData;