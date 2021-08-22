import { React, useState, useEffect } from "react";
import withAuth from "../../Auth/withAuth";
import SuccessCard from "../../../components/SuccessCard";
import ErrorCard  from "../../../components/ErrorCard";
import Router from "next/router";

import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import("../../../components/NavBar"), { ssr: false }) //<- set SSr to false


const getUsers = ({ Users }) => {
  const [order, setOrder] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setError(false);
    setSuccess(false);
  }, []);

  const deleteData = async (e) => {
    // Get the id of the target
    const target = e.target.id;
    setId(target);

    const deleted = await fetch(
      "http://localhost:3005/api/deleteUser/" + target,
      {
        method: "DELETE",
      }
    );

    if (deleted.status == 200) {
      setTimeout(() => {
        Router.reload(window.location.pathname);
        setSuccess(true);
      }, 3000);
    } else if (deleted.status == 404) {
      setTimeout(() => {
        Router.reload(window.location.pathname);
        setError(true);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      {success && <SuccessCard message="User was deleted successfully" />}
      {error && <ErrorCard error="Something went wrong" />}
      <div className="mx-auto w-full">
        <div className="w-3/4 mx-auto">
          <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
            Liste des utilisateurs
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto mx-auto w-3/4 text-base font-light mt-10 text-left">
        <table className="overflow-x-auto mx-auto w-full border-separate border border-green-500 text-gray-800 rounded-md">
          <thead>
            <tr className="text-center">
              <th className="border border-gray-200 p-5 rounded-md">
                Nom Complet
              </th>
              <th className="border border-gray-200 p-5 rounded-md">
                Addresse E-mail
              </th>
              <th className="border border-gray-200 p-5 rounded-md">Rôle</th>
            </tr>
          </thead>

          <tbody>
            {Users.map((item) => (
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
                <td id={item._id} className="" onClick={deleteData}>
                  <svg
                    id={item._id}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ff0000"
                  >
                    <path
                      id={item.id}
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
  var Users = await fetch("http://localhost:3005/api/getUsers");
  Users = await Users.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      Users,
    },
  };
}

export default withAuth(getUsers);
