// REMOVE!!!

let preparedData = [];

const expLevels = [
  "Begginer",
  "Junior",
  "Mid",
  "Senior",
  "God"
];

const languages = [
  [
    "HTML",
    "JS",
    "Reactjs",
    "CSS"
  ],
  [
    "JS",
    "Nextjs",
    "SCSS"
  ],
  [
    "PHP",
    "Wordpress"
  ],
  [
    "JS",
    "VueJS",
    "SCSS",
    "Tailwind"
  ],
  [
    "C#",
    "C++",
    "Java"
  ]
]

const bodies = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.1914 translation by H. Rackha On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
  "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.1914 translation by H. Rackha On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
]

const pickRandomIndex = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

for (let i = 1; i < 100; i++) {
  const ethValue = ((Math.random() + 0.1) * 0.1).toFixed(5);
  const bounty = {
    "id": i,
    "repo_id": Math.floor(Math.random() * i),
    "issue_id": Math.floor(Math.random() * i),
    "title": `Bounty no - ${i}`,
    "body": pickRandomIndex(bodies),
    "languages": pickRandomIndex(languages),
    "tags": [
      "string"
    ],
    "experience": pickRandomIndex(expLevels),
    "bounty_type": "Feature",
    "bounty_value": ethValue,
    "bounty_value_sec": ethValue * 3800,
    "bounty_currency": "ETH",
    "bounty_currency_sec": "$",
    "created_at": randomDate(new Date(2021, 8, 1), new Date()),
    "updated_at": "2021-10-10T12:27:03.254Z",
    "bounty_url": "https://www.google.pl/"
  }

  preparedData.push(bounty);
}

export const dummyData = preparedData;