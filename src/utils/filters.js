export const experienceLevel = {
  heading: 'Experience level',
  fieldType: 'SELECT',
  query: 'experience',
  values: [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
  ],
};

export const bountyStatus = {
  heading: 'Bounty Status',
  fieldType: 'SELECT',
  query: 'bounty_status',
  values: [
    { value: 'PENDING', label: 'Pending' },
    { value: 'ACTIVE', label: 'Active' },
    { value: 'COMPLETED', label: 'Completed' },
    { value: 'EXPIRED', label: 'Expired' },
    { value: 'FAILED', label: 'Failed' },
    { value: 'CANCELLED', label: 'Canceled' },
  ],
};

export const bountyType = {
  heading: 'Bounty Type',
  fieldType: 'CHECKBOX',
  query: 'bounty_type',
  values: [
    { value: 'Feature', label: 'Feature' },
    { value: 'Bug', label: 'Bug' },
    { value: 'Housekeeping', label: 'Housekeeping' },
    { value: 'Meta', label: 'Meta' },
    { value: 'Other', label: 'Other' },
  ],
};

export const languages = {
  heading: 'Language',
  fieldType: 'SELECT',
  query: 'language',
  values: [
    { value: 'javascript', label: 'Javascript' },
    { value: 'html', label: 'HTML' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'scala', label: 'Scala' },
    { value: 'dotnet', label: '.NET' },
    { value: 'dotnetcore', label: '.NET Core' },
    { value: 'cpp', label: 'C++' },
    { value: 'android', label: 'Android' },
    { value: 'swift', label: 'Swift' },
    { value: 'go', label: 'Go' },
  ],
};

export const bountyCurrency = {
  heading: 'Currency / Blockchain',
  fieldType: 'CHECKBOX',
  query: 'currency',
  values: [
    { value: 'ETH', label: 'Ethereum (ETH)' },
    { value: 'BNB', label: 'Binance Smart Chain (BNB)' },
  ],
};

export const bountyValues = {
  heading: 'Bounty Value',
  fieldType: 'DOUBLESELECT',
  query: 'bountyValues',
  values: [
    {
      value: 50,
      label: '50 USD',
    },
    {
      value: 100,
      label: '100 USD',
    },
    {
      value: 250,
      label: '250 USD',
    },
    {
      value: 500,
      label: '500 USD',
    },
    {
      value: 1000,
      label: '1000 USD',
    },
    {
      value: 2000,
      label: '2000 USD',
    },
  ],
};

const allFiltersArr = [
  bountyType,
  bountyStatus,
  experienceLevel,
  languages,
  bountyCurrency,
  bountyValues,
];

export default allFiltersArr;
