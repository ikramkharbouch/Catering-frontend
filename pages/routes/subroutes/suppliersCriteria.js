import Mark from "../../../components/Mark";

const suppliersCriteria = ({ Criteria }) => {
  // Put any states variables here

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
