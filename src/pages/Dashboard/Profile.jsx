import useAuth from "../../hooks/useAuth";


const Profile = () => {
    const {user}=useAuth();
    return (
        <div>
            <div className="flex justify-center items-center">
                <figure>
                    <img className="h-[300px] w-[300px] rounded-full border-4 border-black border-dotted" src={user.photoURL} alt="user photo"></img>
                </figure>
            </div>
            <div className="flex justify-center gap-20 text-xl">
            <h3>Your Name:{user?.displayName}</h3>
            <p>Your Email: {user?.email}</p>
            </div>
        </div>
    );
};

export default Profile;