export default async function adduser(req, res) {
    console.log(req.body);
    console.log(process.env.url);
    if (req.method === 'POST') {
        const result = await fetch("http://localhost:4000/v1/users", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
          });
          const status = result.status;
          if (status == 200)
          {
            res.status(200);
            res.end()
          } else {
            res.status(500);
            res.end();
          }
    } else {
      res.status(430).json({ status: "ok" })
    }
  }