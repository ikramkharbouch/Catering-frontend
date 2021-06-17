import { useEffect } from "react";

const logout = () => {

    useEffect(() => {
       localStorage.setItem("isLogged", false);
    }, [])
    return ( <>
        <h1>You have been logged out</h1>
    </> );
}
 
export default logout;