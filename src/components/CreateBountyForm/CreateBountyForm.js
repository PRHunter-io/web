import { Form, Formik } from 'formik';
import { useState } from 'react';
import { DetailsForm } from './Steps/DetailsForm';
import { useRouter } from 'next/router';
import { BountyService } from './service';
import { languages, bountyType, experienceLevel } from '@/utils/filters';
import { PaymentsForm } from './Steps/PaymentsForm';
import { BountyReview } from './Steps/BountyReview';
import { getUnixTime } from 'date-fns';
import Stepper from '../Stepper';
import { validationSchema } from './FormModel/validationSchema';
import { PickerForm } from './Steps/PickerForm';
import { useApi } from '@/context/ApiServiceContext';

const steps = [
  'Pick issue',
  'Bounty details',
  'Payment details',
  'Review your bounty',
];

export const CreateBountyForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [repository, setRepository] = useState(null);
  const [commision, setCommision] = useState(0.08);
  const [totalBountyValue, setTotalBountyValue] = useState(commision);
  const [issue, setIssue] = useState(null);
  const [createError, setCreateError] = useState(null);
  const isLastStep = currentStep === steps.length - 1;
  const router = useRouter();
  const { post } = useApi();

  function renderStepContent(step, values) {
    switch (step) {
      case 0:
        return (
          <PickerForm
            repository={repository}
            issue={issue}
            setRepository={setRepository}
            setIssue={setIssue}
          />
        );
      case 1:
        return <DetailsForm repository={repository} issue={issue} />;
      case 2:
        return (
          <PaymentsForm
            currency={values.currency}
            bountyValue={values.bountyAmount}
            commision={commision}
            setCommision={setCommision}
            totalBountyValue={totalBountyValue}
            setTotalBountyValue={setTotalBountyValue}
            repository={repository}
            issue={issue}
          />
        );
      case 3:
        return (
          <BountyReview
            totalBountyValue={totalBountyValue}
            commision={commision}
            repository={repository}
            issue={issue}
            values={values}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  const submitForm = async (details) => {
    if (isLastStep) {
      setCreateError(null);
      const repo_owner = repository.full_name.split('/')[0];
      const repo_name = repository.full_name.split('/')[1];
      const newBountyDto = {
        repo_owner: repo_owner,
        repo_name: repo_name,
        issue_number: issue.number,
        title: details.title,
        problem_statement: details.problemStatement,
        acceptance_criteria: details.acceptanceCriteria,
        languages: [details.language],
        tags: [],
        experience: details.experience,
        bounty_type: details.bountyType,
        bounty_value: totalBountyValue,
        bounty_currency: details.currency,
        expires_at: getUnixTime(details.expirationDate),
      };
      try {
        const bountyId = await BountyService.createNewBounty(
          newBountyDto,
          post
        );
        router.push(`/dashboard/success?bounty_id=${bountyId}`);
      } catch (error) {
        setCreateError(error.message);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      {currentStep < steps.length && (
        <>
          <Stepper steps={steps} currentStep={currentStep} />

          <Formik
            initialValues={{
              title: '',
              bountyType: bountyType.values.map((exp) => exp.value)[0],
              language: languages.values.map((exp) => exp.value)[0],
              experience: experienceLevel.values.map((exp) => exp.value)[0],
              problemStatement: '',
              acceptanceCriteria: '',
              currency: 'ETH',
              bountyAmount: '0.01',
              expirationDate: '',
            }}
            validationSchema={validationSchema[currentStep]}
            onSubmit={async (values) => {
              await submitForm(values);
            }}
          >
            {({ isSubmitting, values }) => {
              return (
                <Form>
                  {renderStepContent(currentStep, values)}

                  <div className="row justify-content-end pr-6">
                    {currentStep > 0 && (
                      <button
                        className="text-uppercase btn btn-sm btn-outline-primary mr-3"
                        type="button"
                        onClick={(e) => {
                          e.target.blur();
                          setCurrentStep(currentStep - 1);
                        }}
                      >
                        back
                      </button>
                    )}
                    <button
                      disabled={
                        isSubmitting || !issue || repository.existingBounty
                      }
                      className="btn-submit text-uppercase btn btn-sm btn-primary  position-relative"
                      type="submit"
                      onClick={(e) => {
                        e.target.blur();
                      }}
                    >
                      {isSubmitting && (
                        <span
                          className="spinner-grow position-absolute"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}
                      {isLastStep ? 'Submit' : 'next'}
                    </button>
                  </div>
                  {createError && (
                    <div className="error mt-4 mb-4">{createError}</div>
                  )}
                  {isSubmitting && (
                    <div className="info mt-4 mb-4 text-md-right">
                      Note: Please check your metamask extension if nothing
                      happens
                    </div>
                  )}
                </Form>
              );
            }}
          </Formik>
        </>
      )}
    </>
  );
};
