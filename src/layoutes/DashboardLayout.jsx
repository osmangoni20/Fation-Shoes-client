import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const {logOut,user}=useAuth()
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 font-mono flex flex-col justify-between bg-gray-300 min-h-screen py-5">
        <div className="border-3 border-b-gray-700 text-xl">
          <figure className="rounded-lg m-2 "><img src={user?.photoURL}/></figure>
          <h3>{user?.displayName}</h3>
        </div>
        
        <ul>
          <li className="border-2 border-b-black p-4 font-semibold text-lg w-full">
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="border-2 border-b-black p-4 font-semibold text-lg w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="border-2 border-b-black p-4 font-semibold text-lg w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className="border-2 border-b-black p-4 font-semibold text-lg w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
        <div>
          <button onClick={()=>logOut()} className="p-2 text-xl font-bold w-full border rounded border-dashed-black bg-gray-700 text-white">Logout</button>
        </div>
      </div>
      <div className="col-span-10 p-10">
       <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;