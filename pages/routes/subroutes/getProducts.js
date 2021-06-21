import withAuth from "../../Auth/withAuth";

const getProducts = ({ StockOrders }) => {
  const deleteData = () => {
    // delete the data
    console.log("deleted");
  };

  return (
    <>
      <div className="mx-auto w-full">
        <div className="w-3/4 mx-auto">
          <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
            Liste des produits commandés
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto mx-auto w-3/4 text-base font-light mt-10 text-left">
        <table className="overflow-x-auto mx-auto w-full border-separate border border-green-500 text-gray-800 rounded-md">
          <thead>
            <tr className="text-center">
              <th className="border border-gray-200 p-5 rounded-md">
                Libellé du produit
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Nom du produit
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Nom du fournisseur
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Prix unitaire
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Quantité
              </th>
              <th className="border border-gray-200 p-5 rounded-md">Statut</th>
              <th className="border border-gray-200 p-5 rounded-md">
                Date d'entrée en stock
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Date de péremption
              </th>
            </tr>
          </thead>

          <tbody>
            {StockOrders.slice(0)
              .reverse()
              .map((item) => (
                <tr key={item.id} className="text-center border">
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.label}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.productName}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.supplier}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.price}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.status}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.entryDate}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.expireDate}
                  </td>
                  <td className="" onClick={deleteData}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ff0000"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/Stock");
  const StockOrders = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      StockOrders,
    },
  };
}

export default withAuth(getProducts);
