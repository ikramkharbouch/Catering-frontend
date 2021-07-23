import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const logout = () => {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.clear();
      router.push("/");
    } else {
      console.log("The user is already logged out");
    }
  }, []);

  console.log(localStorage.getItem('loggedIn'));

  return <>{!loggedIn && <h1>You have been logged out</h1>}</>;
};

export default logout;
