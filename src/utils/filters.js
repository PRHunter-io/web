export const experienceLevel = [
  { value: "default", label: "All" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "expert", label: "Expert" },
];

export const bountyFilterType = {
  "query": "bounty_type",
  "values": [
    { value: "feature", label: "Feature" },
    { value: "bug", label: "Bug" },
    { value: "mentoring", label: "Mentoring" },
  ]
};

export const bountyFilterLangs = {
  "query": "languages",
  "values": [
    { value: "javascript", label: "JavaScript" },
    { value: "scala", label: "Scala" },
    { value: "php", label: "PHP" },
  ]
};

export const bountyFilterTags = {
  "query": "categories",
  "values": [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "gaming", label: "Gaming" },
  ]
};