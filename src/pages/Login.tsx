import { Link, useLocation, useNavigate,} from "react-router-dom";

import GoogleLogin from "../component/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import FacebookLogin from "../component/Login-Registration/FacebookLogin";
import toast  from 'react-hot-toast';
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateUser } from "../redux/features/UserSlice";
import GithubLogin from "../component/Login-Registration/GithubLogin";
import loginImage from '../assets/login.png'

const Login = () => {
  const[defaultEmail, setDefaultEmail]=useState("")
  const [defaultPassword, setDefaultPassword]=useState("")
  const notify = (message) => toast(message);
  const {signIn,authError,user,resetPassword}:any=useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const [passwordReset,setResetPassword]=useState(false)
  const from = location?.state?.from?.pathname || "/";
  const dispatch=useAppDispatch()
  const {email}=useAppSelector(state=>state.userR)
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
    

     await fetch('https://fationshoe-server.vercel.app/add_user',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:email}),
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        localStorage.setItem('token-fation-shoe',data?.token)
    })

      await signIn(email, password)


    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const HandleDemoAdmin=()=>{
    setDefaultEmail("osmangoni0827@gmail.com")
    setDefaultPassword("osmangoni")
  }
  const HandleDemoUser=()=>{
    setDefaultEmail(()=>"ibrahim@gmail.com")
    setDefaultPassword(()=>"123456")
  }
console.log(defaultEmail, defaultPassword)
  return (
    <div className="md:flex lg:flex xl:flex justify-around items-center px-10 min-h-screen py-10 shadow-2xl ">
      <div>
        <img className="hidden md:block lg:block xl:block " src={loginImage} alt=""/>
      </div>
      <form onSubmit={handleSUbmit} className="">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="card shrink-0 md:w-96 lg:w-96 xl:96 w-full bg-base-100">
          <div className="card-title text-center block md:hidden lg:hidden xl:hidden items-center justify-center font-serif text-xl pt-5">
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
                defaultValue={defaultEmail}
                className="input input-bordered text-black font-bold"
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
                  defaultValue={defaultPassword}
                  className="input input-bordered text-black font-bold"
                  name="password"
                  required
                />
              </div>
                
                </> 
              }
           {/* demo admin user */}
              <div className="flex justify-between">
                <button 
                 className=" bg-primary text-sm cursor-pointer text-white hover:bg-[#207F99] p-1  rounded "
                  onClick={()=>HandleDemoAdmin()}>
                   Demo Admin</button>
                <button  className="text-sm rounded bg-primary cursor-pointer
                 text-white p-1 " onClick={()=>HandleDemoUser()}>
                 Demo User</button>

              </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-primary text-white"
                type="submit"
                value={`${passwordReset?"Submit":"Sign In"}`}
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
              
              <div className="lg:flex ws-full justify-center mt-2 gap-3 border-t-2 border-primary">
            <GoogleLogin/>
              <GithubLogin/>
            {/* <FacebookLogin/> */}

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
    </div>
  );
};

export default Login;