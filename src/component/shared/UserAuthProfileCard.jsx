import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const UserAuthProfileCard = ({ isOpen }) => {
  const { user, logOut } = useAuth();
  console.log(isOpen);
  return (
    <div className={`${isOpen ? "visible relative" : "invisible"}`}>
      <div className="card w-80 bg-base-100 shadow-xl fixed right-1 top-18 mt-10">
        <div className="bg-primaryOpacity h-32 flex justify-center">
          <figure className="px-10 pt-10 h-[200px]  w-[200px] border-primary border-dotted rounded-full">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="user photo"
                className="rounded-full"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </figure>
        </div>
        <div className="card-body w-full ">
          {
            user&&<div className="flex-col justify-center text-center font-semibold text-md p-2 ">
            <h2 className="text-xl">{user?.displayName||"Guest User"}</h2>
            <p>{user?.email}</p>
          </div>
          }
          <ul className="w-full flex justify-between gap-5 p-2 pb-10 border-primary border-t-2 ">
            <li className=" flex align-middle items-center gap-2 font-semibold text-lg w-full">
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
            <li className="flex align-middle items-center gap-2 font-semibold text-lg w-full">
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
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <Link to={"/dashboard/user_profile"}>Profile</Link>
            </li>
          </ul>
          <div className="card-actions flex justify-center">
            {!user ? (
              <div className="w-full flex justify-between gap-3 items-center">
               
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthProfileCard;
