import { React, useState, useEffect, useContext } from "react";
import Button from "../components/Button";
import Link from "next/link";
import Dashboard from "./Dashboard";
import Navbar from "../components/NavBar";
import WithAuth from "./Auth/withAuth";

const Home = () => {

  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default WithAuth(Home)
