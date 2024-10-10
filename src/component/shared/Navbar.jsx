import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import UserAuthProfileCard from "./UserAuthProfileCard";
import logo from '../../assets/logo-2.png'
import { useSelector } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [showProfileDialog, setProfileDialog] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const HandleUserProfile = () => {
    setProfileDialog(!showProfileDialog);
  };

  const {products}=useSelector(state=>state.cartR)
const[showNavbar, setNavbar]=useState(false)
  const HandleNavbar=()=>{
    setNavbar(!showNavbar)
  }
  const {img}=useAppSelector(state=>state.userR)

  return (
    <div className="min-w-full">
      
      <div className="navbar z-50 md:pr-8 lg: px:10 px-0 pr-5 py-3 
       bg-[#F0F0F0] w-full    text-black lg:shadow-xl md:shadow-xl">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div onClick={HandleNavbar} tabIndex={0} role="button" className="btn pl-8 btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
           {
            showNavbar&& <ul
            onClick={HandleNavbar}
            tabIndex={0}
            className="menu menu-sm p-0 text-black  space-y-2 bg-[#F0F0F0] w-[300px] min-h-screen ml-0 
            rounded-tr-md rounded-br-md  dropdown-content mt-3 z-[1]
            shadow"
          >
            <li>
              <Link to={"/searchProduct/category/casual_shoes"}>
                CASUAL SHOES
              </Link>
            </li>
            <li className="bg-gray-100 py-2">
              <Link to={"/searchProduct/category/formal_shoes"}>
                FORMAL SHOES
              </Link>
            </li>

            <li>
              <Link to={"/searchProduct/category/loafers"}>LOAFERS</Link>
            </li>
            <li className="bg-gray-100 py-2">
              <Link to={"/searchProduct/category/boot"}>BOOTS</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT US</Link>
            </li>
            <li className="bg-gray-100 py-2">
            <Link to={"/dashboard/user_profile"}>Dashboard</Link>
            </li>
             <li className="flex items-center">
              {/* {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg> */}
{/* 
              <Link to={"/dashboard/home"}>Dashboard</Link>  */}
            </li> 

            {!user ? (
              <div className="flex justify-between w-full px-2">
                <Link
                  to="/login"
                  className="btn px-10 bg-primary hover:bg-secondary text-white"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn px-10 bg-secondary hover:bg-primary text-white "
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <>
                <li
                  onClick={() => logOut()}
                  className="flex gap-5 text-lg lg:w-full btn mx-4 bg-primary hover:bg-optional-red text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="lg:size-8 size-40"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                    />
                  </svg>
                  <button className="lg:block hidden">Log Out</button>
                </li>
              </>
            )}
          </ul>
           }
          </div>
          <Link to={"/"} className="p-0">
            {/* <Logo/> */}
          <img className="" src={logo} width={100} height={40} alt="FATION SHOE"></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            <li className="font-normal">
              <Link to={"/searchProduct/category/casual_shoes"}>
                CASUAL SHOES
              </Link>
            </li>
            <li className="font-normal">
              <Link to={"/searchProduct/category/formal_shoes"}>
                FORMAL SHOES
              </Link>
            </li>

            <li className="font-normal">
              <Link to={"/searchProduct/category/loafers"}>LOAFERS</Link>
            </li>
            <li className="font-normal">
              <Link to={"/searchProduct/category/boot"}>BOOTS</Link>
            </li>
            <li className="font-normal">
              <Link to={"/about"}>ABOUT US</Link>
            </li>
           
          </ul>
        </div>

        <div className="w-full gap-5 relative flex justify-end lg:justify-around items-center">
        <div className="w-[350px] hidden md:block lg:block">
                <label className="flex items-center rounded-lg  border-2 border-gray-300">
                  <input
                    onBlur={(e) => setSearchValue(e?.target?.value)}
                    type="text"
                    className="border-none text-black font-semibold focus:border-none bg-gray-200 rounded-r-none"
                    placeholder="Search"
                  />
                  <Link to={`/searchProduct/${searchValue}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-10 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </label>
              </div>
          <div className="relative p-4">
            <Link to={`order_cart/${user?.email}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
            <span className="rounded-full px-2 absolute  bg-red-600 text-white 
             top-0 right-0">{products?.length}</span>
          </div>
         
          <div
            className="cursor-pointer hidden lg:block "
            onClick={HandleUserProfile}
          >
            {user ? (
              <div>
                <img
                  className="w-12 h-12 rounded-full mx-2"
                  src={user?.photoURL||img} alt=""
                />
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            )}
          </div>
          {showProfileDialog && (
            <UserAuthProfileCard className=""  setProfileDialog={setProfileDialog} isOpen={showProfileDialog} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
