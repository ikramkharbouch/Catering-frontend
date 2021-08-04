export default async function adduser(req, res) {
    console.log(req.body);
    console.log(process.env.url);
    if (req.method === 'POST') {
        const result = await fetch(process.env.url + "/v1/users", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
          });
          console.log(result.status);
        res.status(200).json({ result: result.status })
    } else {
      res.status(430).json({ status: "ok" })
    }
  }