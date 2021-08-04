import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

var _auth;

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleAuth = () => {
    console.log("entered in handleAuth")
    setLoggedIn(_auth);
  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        handleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
