import Button from './Button'
import Link from 'next/link'

const Success = ({ data }) => {
  return (
    <>
      <div className="flex flex-col w-3/6 h-3/6 mx-auto mt-24">
        <div className="w-16 h-16 mx-auto mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full w-full"
            viewBox="0 0 20 20"
            fill="#5DBC81"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-center text-gray-800 font-bold text-5xl">
          {data} was added successfully
        </h1>
        <Link href="/"><a className="mx-auto"><Button name="Go Home" classnames="w-2/6 mt-10 text-white font-light mx-auto border border-gray-800"/></a></Link>
      </div>
    </>
  );
};

export default Success;
