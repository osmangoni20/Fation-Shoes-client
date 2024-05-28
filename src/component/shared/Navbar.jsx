import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
  const { logOut, user } = useAuth();
  const currentUser = user?.email;
  console.log(user?.
    photoURL);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <img src="D:\Projects\Project-Straight\module-3\Basic React\public\placeholder.jpg" />
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="text-3xl font-serif">
          {/* <Logo/> */}
          Fati<span className="text-gray-500 animate-spin">o</span>n 
          Sh<span className="text-gray-500 animate-spin">o</span>es
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        
        {!currentUser ? (
          <>
            <a href="/login" className="btn mx-4 bg-gray-500 text-white">
              Login
            </a>
            <a href="/login" className="btn mx-2 bg-gray-500 text-white ">
              Sign Up
            </a>
          </>
        ) : (
          <>
            <Link
              onClick={() => logOut()}
              to="/"
              className="btn mx-4 bg-gray-500 text-white"
            >
              Log Out
            </Link>
            
            <div>
            <img className="w-12 h-12 rounded-full mx-2" src={user?.photoURL}/>
            </div>
            
            <p className="text-md text-bold">{user?.displayName}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
