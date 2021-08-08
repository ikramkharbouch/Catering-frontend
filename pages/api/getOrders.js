export default async function getUsers(req, res) {
    console.log(process.env.url)
    if (req.method === 'GET') {
        var result = await fetch(process.env.url + "/v1/orders", {
            method: 'GET',
          });
        result = await result.json();
        res.json(result['data']);
    } else {
      res.status(430).json({ message: "You cannot access this route" })
    }
  }