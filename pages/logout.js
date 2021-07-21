import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const logout = () => {

    const { loggedIn, setLoggedIn } = useContext(AuthContext);
    setLoggedIn(false);
    console.log(loggedIn);
   
    return ( <>
        <h1>You have been logged out</h1>
    </> );
}
 
export default logout;