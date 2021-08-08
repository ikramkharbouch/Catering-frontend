export default async function addOrder(req, res) {
    if (req.method == 'POST') {
        var result = await fetch(process.env.url + "/v1/orders", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
          });
          const status = result.status;
          console.log(status)
          if (status == 200) {
            res.status(200).json({message: "Order was placed successfully"});
            res.end();
          }
          else {
            res.status(500).json({message: "Something went wrong"});
            res.end();
          }
            
    } else {
      res.status(430).json({ message: "You cannot access this route" })
    }
  }