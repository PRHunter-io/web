export const experienceLevel = {
  "query": "experience",
  values: [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ]
};

export const bountyType = {
  "query": "bounty_type",
  "values": [
    { value: "Feature", label: "Feature" },
    { value: "Bug", label: "Bug" },
    { value: "Housekeeping", label: "Housekeeping" },
    { value: "Meta", label: "Meta" },
    { value: "Other", label: "Other" }
  ]
};

export const languages = {
  "query": "language",
  "values": [
    { value: "javascript", label: "Javascript" },
    { value: "html", label: "HTML" },
    { value: "php", label: "PHP" },
    { value: "ruby", label: "Ruby" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "kotlin", label: "Kotlin" },
    { value: "scala", label: "Scala" },
    { value: "dotnet", label: ".NET" },
    { value: "dotnetcore", label: ".NET Core" },
    { value: "cpp", label: "C++" },
    { value: "android", label: "Android" },
    { value: "swift", label: "Swift" },
    { value: "go", label: "Go" },
  ]
};

export const bountyCurrency = {
  "query": "currency",
  "values": [
    { value: "ETH", label: "Ethereum (ETH)" },
    { value: "BNB", label: "Binance Smart Chain (BNB)" },
  ]
};

export const bountyValueRange = {
  "query": "bountyValueRange",
  "values": [
    {
      value: {
        min: 0,
        max: 100
      }, label: "< 100 USD"
    },
    {
      value: {
        min: 100,
        max: 500
      }, label: "100-500 USD"
    },
    {
      value: {
        min: 500,
        max: 1000
      }, label: "500-1000 USD"
    },
    {
      value: {
        min: 1000
      }, label: "1000+ USD"
    }
  ]
};