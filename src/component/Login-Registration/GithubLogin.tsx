import React from "react";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/features/UserSlice";


const GithubLogin =  () => {
    const {githubLogin}:any=useAuth()
    const dispatch=useDispatch()
    const HandleSignIn= async()=>{
       await githubLogin().then(data=>{
        if(data?.user?.email){
            
            const UserInfo={
                name:data?.user?.displayName,
                email:data?.user?.email,
                img:data?.user?.photoURL
            }
            fetch('https://fation-shoes.onrender.com/add_user',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(UserInfo),
            }).then(res=>res.json()).then(data=>{
                console.log(data)
                dispatch(updateUser(data))
                localStorage.setItem('token',data?.token)
            })
        }
       })
        
       
    }
    return (
        <div className="w-full ">
            <button onClick={HandleSignIn} className="btn bg-[#61C0EB] border-primary border-dashed p-2 w-full my-5
             text-white text-bold">
                Github
            </button>
        </div>
    );
};

export default GithubLogin;