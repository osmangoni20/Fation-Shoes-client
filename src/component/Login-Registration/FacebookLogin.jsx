import useAuth from "../../hooks/useAuth";


const FacebookLogin = () => {
    const {googleLogin}=useAuth()
    const HandleSignIn= async()=>{
       await googleLogin().then(data=>{
        if(data?.user?.email){
            
            const UserInfo={
                name:data?.user?.displayName,
                email:data?.user?.email,
                img:data?.user?.photoURL
            }
            fetch('http://localhost:3000/add_user',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(UserInfo),
            }).then(res=>res.json()).then(data=>console.log(data))
        }
       })
        
       
    }
    return (
        <div className="w-full ">
            <button onClick={HandleSignIn} className="btn bg-primary border-primary border-dashed p-2 w-full my-5 text-white text-bold">
                Facebook
            </button>
        </div>
    );
};

export default FacebookLogin;