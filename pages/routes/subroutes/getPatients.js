const getPatients = ({Patients}) => {
    return ( <>
        <div className="mx-auto w-full">
          <div className="w-3/4 mx-auto">
            <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
              Liste des patients
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
            <th className="border border-gray-200 p-5 rounded-md">
                IPP
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Nom Complet
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Sexe
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Date de naissance
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Numéro de chambre
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Type de séjour
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Service d'hospitalisation
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Date d'entrée
              </th>
            </tr>
  
            {Patients
              .slice(0)
              .reverse()
              .map((item) => (
                <tr key={item.IPP} className="text-center border">
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.IPP}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.name}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.sex}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.birthdate}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.rnum}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.sojourn}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.hospitalization}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.entryDate}
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
    const res = await fetch("http://localhost:3000/Patients");
    const Patients = await res.json();
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        Patients,
      },
    };
  }
 
export default getPatients;