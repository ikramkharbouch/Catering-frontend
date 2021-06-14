import { React, useState } from "react";

const getUsers = ({ fakeInfo }) => {
  const [order, setOrder] = useState("");

  return (
    <>
      <div className="mx-auto w-full">
        <div className="w-3/4 mx-auto">
          <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
            Liste des utilisateurs
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
              Nom Complet
            </th>
            <th className="border border-gray-200 p-5 rounded-md">
              Addresse E-mail
            </th>
            <th className="border border-gray-200 p-5 rounded-md">Rôle</th>
          </tr>

          {fakeInfo
            .slice(0)
            .reverse()
            .map((item) => (
              <tr key={item.id} className="text-center border">
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.fullName}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.email}
                </td>
                <td className="border border-gray-200 p-5 rounded-md">
                  {item.role}
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
  const res = await fetch(process.env.url + "/v1/users", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  let fakeInfo = await res.json();
  fakeInfo = fakeInfo.data
  console.log(fakeInfo)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      fakeInfo,
    },
  };
}

export default getUsers;