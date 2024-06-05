  import { Link } from "react-router-dom";
  import useAuth from "../../hooks/useAuth";
  import { useState } from "react";
  import UserAuthProfileCard from "./UserAuthProfileCard";

  const Navbar = () => {
    const { user,logOut } = useAuth();
    const [showProfileDialog, setProfileDialog] = useState(false);
    const [searchValue,setSearchValue]=useState(null)
    const HandleUserProfile = () => {
      setProfileDialog(!showProfileDialog);
    };
   
    console.log(user?.photoURL);
    return (
      <div className="navbar bg-base-100 sticky top-0 shadow-xl z-10">
        
        <div>
          
        </div>
        <div className="navbar-start md:w-[250px]">
          
          <div className="dropdown">
            
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
              <Link to={"/searchProduct/category/casual_shoes"}>CASUAL SHOES</Link>
            </li>
            <li>
              <Link to={"/searchProduct/category/formal_shoes"}>FORMAL SHOES</Link>
            </li>

            <li>
              <Link to={"/searchProduct/category/loafers"}>LOAFERS</Link>
            </li>
            <li>
              <Link to={"/searchProduct/category/boot"}>BOOTS</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT US</Link>
            </li>
            <li>
            <svg
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
              </svg>

              <Link to={"/dashboard/home"}>Dashboard</Link>
            </li>

            {!user ? (
              <div>
               
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
                <li onClick={() => logOut()} className="flex gap-5 text-lg w-full btn mx-4 bg-primary hover:bg-optional-red text-white"
>
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
                      d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                    />
                  </svg>
                  <button
                    
                  >
                    Log Out
                  </button>
                </li>
              </>
            )}
            </ul>
          </div>
          <Link to={"/"} className="text-3xl font-serif">
            {/* <Logo/> */}
            Fati<span className="text-gray-500 animate-spin">o</span>n Sh
            <span className="text-gray-500 animate-spin">o</span>es
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
          
            <li>
              <Link to={"/searchProduct/category/casual_shoes"}>CASUAL SHOES</Link>
            </li>
            <li>
              <Link to={"/searchProduct/category/formal_shoes"}>FORMAL SHOES</Link>
            </li>

            <li>
              <Link to={"/searchProduct/category/loafers"}>LOAFERS</Link>
            </li>
            <li>
              <Link to={"/searchProduct/category/boot"}>BOOTS</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT US</Link>
            </li>
          </ul>
         
        </div>
        
        <div
          className="navbar-end">
          <div className="w-full">
          <label className="flex items-center rounded-lg  border-2 border-gray-300">
  <input onBlur={(e)=>setSearchValue(e?.target?.value)} type="text" className="border-none focus:border-none bg-gray-200 rounded-r-none" placeholder="Search" />
<Link to={`/searchProduct/${searchValue}`}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-10 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</Link>
</label>
          </div>
          {
            showProfileDialog&& <UserAuthProfileCard
            className=""
            isOpen={showProfileDialog}
          />
          }
          <div className="cursor-pointer invisible md:visible " onClick={HandleUserProfile}>
            
            {user ? (
              <div>
                <img
                  className="w-12 h-12 rounded-full mx-2"
                  src={user?.photoURL}
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
        </div>
       
      </div>
    );
  };

  export default Navbar;
