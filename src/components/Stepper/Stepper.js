import styled from 'styled-components';

const SingleStep = styled.div`
  pointer-events: none;

  span {
    width: 2em;
    height: 2em;
    background-color: ${({ finished, theme }) =>
      finished ? theme.colors.primary : theme.colors.darkShade};
    border-radius: 50%;
    color: white;
    transition: background-color 0.4s, color 0.4s, border 0.4s;
  }
`;

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between mb-6 mb-lg-0">
      {steps &&
        steps.map((step, index) => (
          <SingleStep
            className="mb-4 mb-lg-10"
            key={index}
            finished={index <= currentStep}
            current={index === currentStep}
          >
            <span className="d-inline-flex align-items-center justify-content-center mr-3">
              {index + 1}
            </span>
            {step}
          </SingleStep>
        ))}
    </div>
  );
};

export default Stepper;
