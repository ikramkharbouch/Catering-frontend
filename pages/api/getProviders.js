export default async function getProviders(req, res) {
    console.log(process.env.url)
    if (req.method === 'GET') {
        var result = await fetch("http://localhost:4000/v1/providers", {
            method: 'GET',
          });
        result = await result.json();
        res.json(result['data']);
    } else {
      res.status(430).json({ message: "You cannot access this route" })
    }
  }