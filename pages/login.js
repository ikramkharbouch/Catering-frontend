import { useState } from "react";
import { useRouter } from "next/router"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ErrorCard from "../components/ErrorCard";

// This page shouldn't be accessed if the user is loggedIn
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  // console.log(loggedIn);

  const login = (e) => {
    e.preventDefault();
    // connect to api to check credentials of user
    const data = {email, password};
    fetch('http://localhost:4000/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
  .then(res => res.json())
  .then(data => {
    if (data.authenticated) {
      console.log(data.authenticated);
        setLoggedIn(true);
      router.push('/');
    }
    else {
      setError("False Credentials, try again.");
      router.push('/login');
    }
  })
  };

  return (
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
  );
};

export default Login;
