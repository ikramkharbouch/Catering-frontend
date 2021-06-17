import Button from "../components/Button";
import Link from "next/link";

const error = () => {
  return (
    <div className="flex flex-col w-3/6 h-3/6 mx-auto mt-24">
      <div className="w-16 h-16 mx-auto mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="mx-auto text-xl">
        The page you are looking for wasn't found
      </h1>
      {/* <div className="flex flex-row justify-center bg-red-500"> */}
      <Link href="/login">
        <a className="mx-auto">
          {" "}
          <Button
            name="Login"
            classnames="bg-green-500 w-1/6 font-light text-white mx-auto mt-10"
          />
        </a>
      </Link>

      <p className="mx-auto font-light mt-2">OR</p>
      <Link href="/">
        <a className="mx-auto">
          {" "}
          <Button
            name="Go back"
            classnames="w-1/6 font-light text-white mx-auto mt-2 border border-green-500 text-gray-800"
          />
        </a>
      </Link>
    </div>
  );
};

export default error;
