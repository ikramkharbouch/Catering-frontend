import { useRouter } from 'next/router'

const WithAuth = (WrappedComponent) => {
    return (props) => {
        if (typeof window !== "undefined") {
            const Router = useRouter();

            // We will verify that the user is authenticated here
            const verification = localStorage.getItem("isLogged");

            if (!verification) {
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