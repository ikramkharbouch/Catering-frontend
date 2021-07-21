import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // fetch api here 
    
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
