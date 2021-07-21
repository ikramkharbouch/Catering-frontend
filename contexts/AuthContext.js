import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
