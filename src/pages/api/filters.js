export default async function filters(req, res) {
  const url = `${process.env.NEXT_PUBLIC_INTERNAL_API_URL}/bounty/search`;

  const fetchData = async (req) => {
    const data = JSON.stringify(req.body);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      });
      const newData = await res.json();
      return newData;
    } catch (err) {
      return false;
    }
  }

  try {
    const data = await fetchData(req)
    if (data) {
      res.status(200).send({ data })
    } else {
      res.status(400).send({ error: 'failed to fetch data' })
    }
  } catch (err) {
    res.status(500).send({ error: 'Internal server error' })
  }
}