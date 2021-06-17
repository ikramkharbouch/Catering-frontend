import Mark from "../../../components/Mark";

const suppliersCriteria = ({ Criteria }) => {
  // Put any states variables here

  const deleteData = () => {
    // delete the data
    console.log("deleted");
  };

  return (
    <>
      <div className="mx-auto w-full">
        <div className="w-3/4 mx-auto">
          <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
            Liste des critères des fournisseurs
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto mx-auto w-3/4 text-base font-light mt-10 text-left">
        <table className="overflow-x-auto mx-auto w-full border-separate border border-green-500 text-gray-800 rounded-md">
          <thead>
            <tr className="text-center">
              <th className="border border-gray-200 p-5 rounded-md">
                Nom de la société/Critères
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Agrément ONSSA
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Certification ISO
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Qualité/Prix
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Respect des délais
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Conditionnement
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Respect des températures
              </th>
            </tr>
          </thead>

          <tbody>
            {Criteria.slice(0)
              .reverse()
              .map((item) => (
                <tr key={item.id} className="text-center border">
                  <td className="border border-gray-200 p-5 rounded-md">
                    something
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    <Mark valid={item.onssa} />
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    <Mark valid={item.iso} />
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    <Mark valid={item.delay} />
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    <Mark valid={item.quality} />
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    <Mark valid={item.conditioning} />
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    <Mark valid={item.temper} />
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

// Get the data wanted from here

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/Criteria");
  const Criteria = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      Criteria,
    },
  };
}

export default suppliersCriteria;
