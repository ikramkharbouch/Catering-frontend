import { useRouter } from 'next/router'
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const WithAuth = (WrappedComponent) => {
    
    return (props) => {
        if (typeof window !== "undefined") {
            const Router = useRouter();

            // We will verify that the user is authenticated here
            const {loggedIn} = useContext(AuthContext);

            if (!loggedIn) {
                Router.replace("/error");
                return null;
            }
            return <WrappedComponent {...props} />
        }

        // Just in case we are on the server
        return null;
    };
}
 
export default WithAuth;