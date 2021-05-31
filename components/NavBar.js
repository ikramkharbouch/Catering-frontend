import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800	w-full h-20 flex justify-between text-white">
        <h1 className="text-2xl font-bold pt-5 pl-16">
          CHU Catering
        </h1>
        <div className="mt-6 pr-10">
          <Link href="/" className="">
            <a className="mr-10">Home</a>
          </Link>
          <Link href="/login">
            <button className="mr-10 bg-green-600 rounded-md text-black pt-1 pr-5 pl-5 pb-1">Login</button>
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;
