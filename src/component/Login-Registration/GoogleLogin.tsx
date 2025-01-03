import React from "react";
import useAuth from "../../hooks/useAuth";


const GoogleLogin =  () => {
    const {googleLogin}:any=useAuth()
    const HandleSignIn= async()=>{
       await googleLogin().then(data=>{
        if(data?.user?.email){
            
            const UserInfo={
                name:data?.user?.displayName,
                email:data?.user?.email,
                img:data?.user?.photoURL
            }
            fetch('https://fationshoe-server.vercel.app/add_user',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(UserInfo),
            }).then(res=>res.json()).then(data=>{
                console.log(data)
            
                localStorage.setItem('token',data?.token)
            })
        }
       })
        
       
    }
    return (
        <div className="w-full ">
            <button onClick={HandleSignIn} className="btn bg-secondary border-primary border-dashed p-2 w-full my-5 text-white text-bold">
                Google
            </button>
        </div>
    );
};

export default GoogleLogin;