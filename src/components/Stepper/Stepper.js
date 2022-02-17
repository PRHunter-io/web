import { breakpoints } from '@/utils/breakpoints';
import styled from 'styled-components';

const SingleStep = styled.div`
  flex-grow: 1;
  font-size: 14px;
  /* pointer-events: none; */

  &:after {
    @media (min-width: ${breakpoints.lg}px) {
      content: '';
      display: block;
      height: 1px;
      border-top: 1px solid
        ${({ theme, finished }) =>
          finished ? theme.colors.primary : theme.colors.border};
      flex-grow: 1;
      margin: 0 5%;
      transition: border-color 0.4s;
    }
  }

  &:last-of-type {
    flex-grow: 0;

    &::after {
      display: none;
    }
  }

  span {
    flex-shrink: 0;
    width: 2em;
    height: 2em;
    background-color: ${({ current, theme }) =>
      current ? theme.colors.primary : theme.colors.darkShade};
    border-radius: 50%;
    color: white;
    transition: background-color 0.4s 0.2s;
  }
`;

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between mb-6 mb-lg-0">
      {steps &&
        steps.map((step, index) => (
          <SingleStep
            className="d-flex align-items-center mb-4 mb-lg-10"
            key={index}
            current={index <= currentStep}
            finished={index < currentStep}
          >
            <span className="d-flex align-items-center justify-content-center mr-3">
              {index + 1}
            </span>
            {step}
          </SingleStep>
        ))}
    </div>
  );
};

export default Stepper;
