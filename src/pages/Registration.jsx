import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../component/Login-Registration/GoogleLogin";
import FacebookLogin from "../component/Login-Registration/FacebookLogin";


const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const {createUser,authError,user,logOut} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  console.log(authError)
   const handleSUbmit =async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    const name=form.name.value;
    if (password !== confirm_password) {
      setPassMatch(false);
    }

    console.log(email, password, confirm_password);

    if (password===confirm_password) {
     await createUser(email,password).then(data=>{
      if(data?.user?.email){
          
          const UserInfo={
              name:name,
              email:data?.user?.email,
              img:data?.user?.photoURL
          }
          fetch('https://fation-shoes.onrender.com/add_user',{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(UserInfo),
          }).then(res=>res.json()).then((data)=>{
            
            localStorage.setItem('token',data?.token)
            logOut()
            navigate(from, { replace: true });
          })
      }
     })
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen">
    <div className="hero-content  flex-col md:flex-row-reverse">
      <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
        <div className="card-title items-center justify-center font-serif text-xl pt-5">
        <h1>Registration</h1>
        </div>
        <div className="card-body text-xl font-semibold">
        <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
              
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
               
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
               
                className="input input-bordered"
                name="confirm_password"
                required
              />
            </div>
            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Passwords do not match!</p>
              </div>
            )}
            <div className="form-control mt-6 ">
              <input
                className="btn bg-primary text-white"
                type="submit"
                value="Register"
              />
            </div>
            <div className="border-t-2 mt-6 border-primary md:flex justify-center gap-6 ">
            <GoogleLogin/>
          
            <FacebookLogin/>
            </div>
            <div >
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;