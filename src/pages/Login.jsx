import { Link, useLocation, useNavigate,} from "react-router-dom";

import GoogleLogin from "../component/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import FacebookLogin from "../component/Login-Registration/FacebookLogin";
import toast  from 'react-hot-toast';


const Login = () => {
  
  const notify = (message) => toast(message);
  const {signIn,authError,user,resetPassword}=useAuth()
  console.log(user)
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordReset,setResetPassword]=useState(false)
  const from = location?.state?.from?.pathname || "/";
  const HandleResetPassword=()=>{
    setResetPassword(true)
  }
 
  const handleSUbmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form?.password?.value;
    if(passwordReset){
      resetPassword(email).then( async()=>{
       await notify("Send Email for Update Password")
        setResetPassword(false)
      })
    }else{
      await signIn(email, password).then(data=>{
        if(! localStorage.getItem('token-fation-shoe')){
            
            const UserInfo={
                name:data?.user?.displayName,
                email:data?.user?.email,
                img:data?.user?.photoURL
            }
            console.log(UserInfo)
            fetch('https://fation-shoes.onrender.com/add_user',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(UserInfo),
            }).then(res=>res.json()).then(data=>{
                console.log(data)
                localStorage.setItem('token-fation-shoe',data?.token)
            })
        }
       });
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
          <h1>Login Now</h1>
          </div>
          <div className="card-body text-xl font-semibold">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            {
                !passwordReset&&<>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
                
                </> 
              }
           

            <div className="form-control mt-6">
              <input
                className="btn bg-primary text-white"
                type="submit"
                value={`${passwordReset?"Submit":"Login"}`}
              />
              {(authError&&!passwordReset)&&<p className="text-red-500 text-sm text-center">{authError?.errorName}</p>} 
            </div>
             {
              !passwordReset&&<>
              <div>
              <label className="label">
                  <a onClick={()=>HandleResetPassword()} className="text-sm  link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              
              <div className="md:flex justify-center mt-2 gap-3 border-t-2 border-primary">
            <GoogleLogin/>
        
            <FacebookLogin/>
            </div>
              </> 
             }
             
            <div className="mt-6">
              <p>
                New here?{" "}
                <Link to="/register" className="text-red-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;