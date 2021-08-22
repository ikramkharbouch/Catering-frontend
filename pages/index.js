import { React, useState, useEffect } from "react";
import Button from "../components/Button";
import Link from "next/link";
import Dashboard from "./Dashboard";
// import Navbar from "../components/NavBar";

import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import("../components/NavBar"), { ssr: false }) //<- set SSr to false

export default function Home() {
  
  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const auth = localStorage.getItem('loggedIn')
      setLoggedIn(auth);
    } else {
      const auth = localStorage.setItem("loggedIn", false);
      setLoggedIn(auth);
    }
  }, []);

  
  
  return (
    <>
    <Navbar />
      {!loggedIn && (
        <>
          <div className="flex flex-col lg:flex-row">
            <img
              src="Illustration.png"
              className="w-9/12 m-10 lg:w-6/12 lg:m-20"
            ></img>
            <div className="content mt-2 p-4 text-center lg:mt-20 lg:text-left">
              <h1 className="text-2xl lg:mt-12 font-bold">
                Manage your catering service in a better way
              </h1>
              <p className="mt-5 lg:w-4/6">
                With our platform you can manage all your services, orders,
                providers and more.
              </p>
              <div className="mt-5 text-white">
                <Link href="/login">
                  <a>
                    <Button
                      name="Login"
                      classnames="bg-green-500 mr-0 text-white font-light"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {loggedIn && (
        <>
          <Dashboard />
        </>
      )}
    </>
  );
}
