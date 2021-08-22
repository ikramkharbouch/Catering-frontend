export default async function addReturn(req, res) {

    if (req.method === 'POST') {
        const result = await fetch(process.env.url + "/v1/returns", {
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