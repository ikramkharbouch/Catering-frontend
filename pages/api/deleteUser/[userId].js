export default async function deleteUser(req, res) {

    const { userId } = req.query;

    console.log(userId);

     if (req.method === 'DELETE') {
        var result = await fetch("http://localhost:4000/v1/users/" + userId, {
            method: 'DELETE',
          });
        // result = await result.json();
        const status = result.status;
        console.log(status);
        if (status == 200)
        {
            res.status(200).json({"msg": "User Deleted"});
        } else {
            res.status(404).json({"msg": "User was not found"});
        }
        
    } else {
      res.status(430).json({ message: "You cannot access this route" })
    }
}