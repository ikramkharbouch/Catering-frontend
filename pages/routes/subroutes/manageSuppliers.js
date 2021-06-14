const manageSuppliers = ({Suppliers}) => {
    return ( <> 
        <div className="mx-auto w-full">
        <div className="w-3/4 mx-auto">
          <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
            Liste des ordres
          </h1>
          <input
            type="text"
            onChange={(e) => {
              setOrder(e.target.value);
            }}
            placeholder="Search"
            className="border border-green-500 px-2 py-4 rounded-md mt-10 w-full"
          />
        </div>
      </div>
      <div className="overflow-x-auto mx-auto w-3/4 text-base font-light mt-10 text-left">
        <table className="overflow-x-auto mx-auto w-full border-separate border border-green-500 text-gray-800 rounded-md">
          <tr className="text-center">
            <th className="border border-gray-200 p-5 rounded-md">Identifiant Commercial</th>
            <th className="border border-gray-200 p-5 rounded-md">
              Nom de la socité</th>
              <th className="border border-gray-200 p-5 rounded-md">
              Nom du représentant</th>
              <th className="border border-gray-200 p-5 rounded-md">
              Contact</th>
              <th className="border border-gray-200 p-5 rounded-md">
              Addresse E-mail</th>
              <th className="border border-gray-200 p-5 rounded-md">
              Catégorie</th>
              <th className="border border-gray-200 p-5 rounded-md">
              Spécification</th>
            
          </tr>

          {Suppliers.slice(0)
            .reverse()
            .map((item) => (
              <tr key={item.IPP} className="text-center border">
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.CI}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.society}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.identifier}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.contact}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.email}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.category}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.specification}
                </td>
              </tr>
            ))}
        </table>
      </div>
    </> );
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch("http://localhost:3000/Suppliers");
    const Suppliers = await res.json();
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        Suppliers,
      },
    };
  }
 
export default manageSuppliers;