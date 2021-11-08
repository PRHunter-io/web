export default async function issues(req, res) {
  const url = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/repo`;

  const dummyData = [
    {
      "id": 0,
      "node_id": "node_id_0",
      "title": "Issue-1",
      "state": "Opened",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "number": 0
    },
    {
      "id": 1,
      "node_id": "node_id_1",
      "title": "Issue-2",
      "state": "In-progress",
      "body": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
      "number": 0
    },
    {
      "id": 2,
      "node_id": "node_id_2",
      "title": "Issue-3",
      "state": "Done",
      "body": "Quisque lectus arcu, ultricies a ornare at.",
      "number": 0
    }
  ];

  const fetchData = async (req) => {
    return dummyData;
  }

  try {
    const data = await fetchData(req);
    if (data) {
      res.status(200).send(data)
    } else {
      res.status(400).send({ error: data })
    }
  } catch (err) {
    res.status(500).send({ error: 'Internal server error' })
  }
}