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
          console.log(status);
          if (status == 200) {
            res.status(200).json({message: "Order was placed successfully"});
            res.end();
          }
          else if (status == 500) {
            res.status(500).json({message: "Something went wrong"});
            res.end();
          }
          else if (status == 430) {
            res.status(430).json({message: "Review your credentials"});
            res.end();
          }
            
    } else {
      res.status(430).json({ status: "You cannot access this route" })
    }
  }