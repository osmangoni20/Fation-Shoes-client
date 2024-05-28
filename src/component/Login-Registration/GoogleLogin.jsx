import useAuth from "../../hooks/useAuth";


const GoogleLogin = () => {
    const {googleLogin}=useAuth()
    const HandleSignIn=()=>{
        googleLogin()
    }
    return (
        <div className="w-full ">
            <button onClick={HandleSignIn} className="btn bg-red-600 p-2 w-full my-5 text-white text-bold">
                Google
            </button>
        </div>
    );
};

export default GoogleLogin;