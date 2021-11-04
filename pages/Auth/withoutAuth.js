import { useRouter } from "next/router";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter();

      if (typeof localStorage !== "undefined") {
        var loggedIn = localStorage.getItem("loggedIn");
      } else {
        var loggedIn = localStorage.setItem("loggedIn", false);
      }

      if (loggedIn) {
        router.replace("/");
        return null;
      }
      return <WrappedComponent {...props} />;
    }

    // Just in case we are on the server
    return null;
  };
};

export default WithAuth;
