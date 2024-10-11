import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import AccountInfo from "../../component/Dashboard/UserDahboard/AccountInfo";
import { useAppSelector } from "../../redux/hooks";


const Profile = () => {
    const [userData,setUserData]=useState(null)
    const {img}=useAppSelector(state=>state.userR)
    const {user}=useAuth();
    useEffect(()=>{
        fetch(`https://fationshoe-server.vercel.app/user/${user?.email}`)
            .then((res) => res.json())
            .then( (data) =>{
         setUserData(data)
            });
    },[])
    console.log(userData)
    return (
        <div>
           
            <div className="bg-[#171A3B] text-white pt-8">
            <img className="h-[200px] w-[200px] mx-auto rounded-full border-4 border-black border-dotted" src={img||userData?.img|| user.photoURL} alt="user photo"></img>

                   <AccountInfo/>
                </div>
        </div>
    );
};

export default Profile;