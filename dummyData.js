let preparedData = [];

for (let i = 0; i < 100; i++) {
  const bounty = {
    "id": i,
    "repoId": Math.floor(Math.random() * i),
    "issueId": Math.floor(Math.random() * i),
    "title": `Bounty no - ${i}`,
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "languages": [
      "HTML",
      "JS",
      "Reactjs"
    ],
    "bountyValue": Math.floor(Math.random() * i * 1000),
    "bountyCurrency": "PLN",
    "createdAt": "2021-10-10T12:27:03.254Z",
    "updatedAt": "2021-10-10T12:27:03.254Z"
  }

  preparedData.push(bounty);
}

export const dummyData = preparedData;