import * as Yup from 'yup';
import {
  languages,
  bountyCurrency,
  bountyType,
  experienceLevel,
} from '@/utils/filters';

export const validationSchema = [
  false,
  Yup.object().shape({
    title: Yup.string()
      .min(15, 'At least 15 characters are required')
      .max(100, 'Must be 100 characters or less')
      .required('Title is required'),
    bountyType: Yup.string()
      .oneOf(bountyType.values.map((exp) => exp.value))
      .required('Bounty type is required'),
    language: Yup.string()
      .oneOf(languages.values.map((exp) => exp.value))
      .required('Language is required'),
    experience: Yup.string()
      .oneOf(experienceLevel.values.map((exp) => exp.value))
      .required('Experience is required'),
    problemStatement: Yup.string()
      .min(15, 'At least 15 characters are required')
      .max(2000, 'Must be 2000 characters or less')
      .required('Problem statement is required'),
    acceptanceCriteria: Yup.string()
      .min(15, 'At least 15 characters are required')
      .max(2000, 'Must be 2000 characters or less')
      .required('Acceptance criteria are required'),
  }),
  Yup.object().shape({
    currency: Yup.string()
      .oneOf(bountyCurrency.values.map((exp) => exp.value))
      .required('Currency is required'),
    bountyAmount: Yup.number()
      .min(0.01, 'Amount too small')
      .max(1000, 'Amount too large')
      .required('Bounty amount is required'),
  }),
];
