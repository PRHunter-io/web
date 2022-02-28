import { Spinner } from 'react-bootstrap';

export const LoadingSpinner = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <Spinner animation="border" variant="primary" role="status" />
      <p className="invisible position-absolute pt-6 pl-5">Loading...</p>
    </div>
  );
};
