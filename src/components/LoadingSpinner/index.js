import { Spinner } from 'react-bootstrap';

export const LoadingSpinner = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <Spinner animation="border" role="status" />
      <p className="visually-hidden pt-6 pl-5">Loading...</p>
    </div>
  );
};
