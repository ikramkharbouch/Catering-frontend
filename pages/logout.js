import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const logout = () => {
  const router = useRouter();

  const { loggedIn, handleAuth } = useContext(AuthContext);

  console.log(loggedIn)
  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('loggedIn', false);
      handleAuth();
      console.log(localStorage.getItem("loggedIn"));
      router.push('/');
    }
  }, [])
  
  console.log(loggedIn);

  return (
    <>
      {!loggedIn && <h1>You have been logged out</h1>}
    </>
  );
};

export default logout;
