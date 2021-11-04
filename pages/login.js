import { useState } from "react";
import { useRouter } from "next/router";
import ErrorCard from "../components/ErrorCard";
import Navbar from "../components/NavBar";
import withoutAuth from './Auth/withoutAuth'

// This page shouldn't be accessed if the user is loggedIn
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loggedIn, handleAuth } = useContext(AuthContext);

  const login = async (e) => {
    e.preventDefault();
    // connect to api to check credentials of user
    const data = { email, password };
    const res = await fetch("http://localhost:5000/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    console.log(res.status)
   if (res.status == 200) {
     localStorage.setItem("loggedIn", true)
     console.log("authenticated")
     router.push("/")
   } else {
     console.log(res)
     setError("False credentials, try again")
   }
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto w-3/4 mt-10">
        {error !== "" && <ErrorCard error={error} />}
        <h1 className="text-2xl font-bold">Sign in</h1>
        <form onSubmit={login} className="flex flex-col mx-auto">
          <label className="text-green-500 font-bold text-sm mt-4">
            Addresse e-mail:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Entrez votre addresse e-mail"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Mot de passe:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Entrez votre mot de passe"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <button
            type="submit"
            className="bg-green-500 px-2 py-4 rounded-md mt-4 text-white font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default withoutAuth(Login); 
