import Button from "./Button";
import Link from "next/link";

const Success = ({ data }) => {

  const isLogged = localStorage.getItem("isLogged");

  console.log(isLogged);
  return (
    <>
      <div className="flex flex-col w-3/6 h-3/6 mx-auto mt-24">
        <div className="w-16 h-16 mx-auto mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full w-full"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-center text-gray-800 font-bold text-5xl">
          {data} was added successfully
        </h1>
        <Link href="/">
          <a className="mx-auto">
            <Button
              name="Go Home"
              classnames="w-2/6 mt-10 text-white font-light mx-auto border border-gray-800"
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Success;
