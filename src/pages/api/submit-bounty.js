export default async function repos(req, res) {
  const url = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/repo`;

  const dummyData = {
    success: true,
    message: 'bounty sent!'
  };

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