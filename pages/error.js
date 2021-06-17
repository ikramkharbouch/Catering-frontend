import Button from "../components/Button";

const error = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <h1 className="text-center mt-10 text-5xl font-bold text-gray-800">Page not found or you don't have access to it</h1>
      <Button name="Login" classnames="w-1/6 text-white font-light mx-auto mt-10 p-9"/>
    </div>
  );
};

export default error;
