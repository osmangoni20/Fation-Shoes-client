import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, error } = useRouteError();
  return (
    <div>
      <div className="container flex flex-col justify-center items-center text-center h-screen py-32">
        <h1 className="text-7xl text-extrabold mb-8 ">Error {status || 404}</h1>
        <p className="lg:text-3xl">{error?.message}</p>
        <button className="btn text-3xl hover:bg-blue-700 my-5 bg-red-700 text-extrabold text-white ">
        <Link to={"/"}>Home</Link>
      </button>
      </div>
     
    </div>
  );
};

export default ErrorPage;
