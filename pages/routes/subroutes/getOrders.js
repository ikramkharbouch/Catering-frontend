const getOrders = ({ Orders }) => {
  return (
    <>
      <div className="mx-auto w-full">
        <div className="w-3/4 mx-auto">
          <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
            Liste des commandes
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto mx-auto w-3/4 text-base font-light mt-10 text-left">
        <table className="overflow-x-auto mx-auto w-full border-separate border border-green-500 text-gray-800 rounded-md">
          <tr className="text-center">
            <th className="border border-gray-200 p-5 rounded-md">Service d'hospitalisation</th>
            <th className="border border-gray-200 p-5 rounded-md">
              Type du repas</th>
            
          </tr>

          {Orders.slice(0)
            .reverse()
            .map((item) => (
              <tr key={item.IPP} className="text-center border">
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.hospitalization}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.meal}
                </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/Orders");
  const Orders = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      Orders,
    },
  };
}

export default getOrders;
