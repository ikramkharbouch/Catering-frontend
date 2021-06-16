const recycle = ({ Returns }) => {
  return (
    <>
      <div className="mx-auto w-full">
        <div className="w-3/4 mx-auto">
          <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
            Liste des traitements
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto mx-auto w-3/4 text-base font-light mt-10 text-left">
        <table className="overflow-x-auto mx-auto w-full border-separate border border-green-500 text-gray-800 rounded-md">
          <thead>
            <tr className="text-center">
              <th className="border border-gray-200 p-5 rounded-md">
                Type de repas
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Poids initial
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Poids après service
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Composition des plateaux
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Type de tri prévu
              </th>
              <th className="border border-gray-200 p-5 rounded-md">Type du recyclage prévu</th>
            </tr>
          </thead>

          <tbody>
            {Returns.slice(0)
              .reverse()
              .map((item) => (
                <tr key={item.id} className="text-center border">
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.mealType}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.initialWeight}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.afterWeight}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.plateCompo}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.sortMethod}
                  </td>
                  <td className="border border-gray-200 p-5 rounded-md">
                    {item.recyclingMethod}
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
  const res = await fetch("http://localhost:3000/Returns");
  const Returns = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      Returns,
    },
  };
}

export default recycle;
