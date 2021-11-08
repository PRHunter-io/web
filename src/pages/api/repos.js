export default async function repos(req, res) {
  const url = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/repo`;

  const dummyData = [
    {
      "id": 0,
      "name": "repo-1",
      "full_name": "pshemcio/repo-1",
      "private": true
    },
    {
      "id": 1,
      "name": "repo-2",
      "full_name": "pshemcio/repo-2",
      "private": true
    },
    {
      "id": 2,
      "name": "repo-3",
      "full_name": "pshemcio/repo-3",
      "private": true
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