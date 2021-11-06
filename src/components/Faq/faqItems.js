export const menuItems = [
    {
        question: "What is PRHunter",
        answer: `PRHunter is a platform that allows coders to get paid for solving Github Issues. Any user can create a Bounty on a Github Issue, which will be collected by the person who's PR to that issue gets merged.`,
    },
    {
        question: "How does PRHunter work?",
        answer: `Any registered user can create Bounties on PRHunter. A Bounty is always linked to a Github issue in a public repository managed by the user.
      When creating a Bounty, the creator deposits the reward in a smart contract.
      The smart contract will monitor the activity on the issue - when a pull request gets merged, the author of that pull request will automatically receive the bounty.`,
    },
    {
        name: "bounties",
        label: "Bounties"
    },
    {
        name: "documentation",
        label: "Documentation", items: [
            { name: "faq", label: "FAQ" },
        ]
    }
];
