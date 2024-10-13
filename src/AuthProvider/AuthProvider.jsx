import {
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  GithubAuthProvider,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext(null);
import { app } from "../Firebase/Firebase.config";
import { FacebookAuthProvider } from "firebase/auth/cordova";
import { updateAdmin, updateUser } from "../redux/features/UserSlice";
import { useAppDispatch } from "../redux/hooks";
import { clearCart } from "../redux/features/CartSlice";
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setError] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubAuthProvider=new GithubAuthProvider();
  const checkAdmin= async(user)=>{
    console.log(user)
    const res= await fetch(`https://fationshoe-server.vercel.app/admin/${user?.email}`)
    const data= await res.json();
    // setIsAdmin(data);
    console.log("data",data)
    if(data?.email){
      dispatch(updateAdmin(true))
      localStorage.setItem('isAdmin',true);
    }else{
      dispatch(updateAdmin(false))
      localStorage.setItem('isAdmin',false);
    }
  }
  const getUserInformation= async(user)=>{
    console.log(user)
     await fetch(`https://fationshoe-server.vercel.app/user/${user.email}`)
     .then(res=>{
      const data=res.data
      console.log("data",data)
      const userInfo={
        first_name:data?.first_name||data?.name,
        last_name:data?.last_name,
        email:data?.email,
        contact_number:data?.contact_number||data?.mobile_1,
        gender:data?.gender,
        date_of_birth:data?.date_of_birth,
        img: data?.img || user?.photoURL
      }
      if(data?.email){
        dispatch(updateUser(userInfo))
      }
     })
   
    // setIsAdmin(data);
  
  }
  const dispatch=useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        
        setLoading(false);
        if(user.email){
          checkAdmin(user)
          getUserInformation(user)
          }
      } else {
        setLoading(false);
      }
      return () => {
        return unsubscribe();
      };
    });
  }, []);
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin=()=>{
    setLoading(true)

return signInWithPopup(auth, githubAuthProvider).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    if (error) {
      if(errorCode==="auth/account-exists-with-different-credential"){ 
        setError({errorName:"This account already use another auth System",error})
       }
       else{
        setError({ errorName: errorMessage, error });
       }
      
    }
    // ...
  });
  }
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider).catch((error) => {
      console.log(error);
    });
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email).catch((error) => {
      const errorCode = error.code;
      setError({ errorName: errorCode, error });
      // ..
    });
  };
  const createUser = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        console.log(error.code);
        if (error?.code === "auth/network-request-failed") {
          setError({ errorName: "Your internet connection down", error });
        } else if (error.code === "auth/email-already-in-use") {
          setError({ errorName: "User already have a account ", error });
        }
      }
    );
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then(data=>{
       
      console.log(data)
      if(data?.user?.email){
        checkAdmin(data?.user)
        }

        fetch(`https://fationshoe-server.vercel.app/user/${data?.user?.email}`)
        .then(res=>res.json())
        .then(data=>{
          const userInfo={
            first_name:data?.first_name||data?.name,
            last_name:data?.last_name,
            email:data?.email,
            contact_number:data?.contact_number||data?.mobile_1,
            gender:data?.gender,
            date_of_birth:data?.date_of_birth,
            img: data?.img || user?.photoURL
          }
          dispatch(updateUser(userInfo))
      })
      
     }).catch((error) => {
      console.log(error);
      if (error?.code === "auth/network-request-failed") {
        setError({ errorName: "Your internet connection down", error });
      } else if (error?.code === "auth/invalid-credential") {
        setError({
          errorName: "Your Email or Password incorrect. Go to SignUp",
          error,
        });
      }
      else if (error?.code === "auth/wrong-password") {
        setError({
          errorName: "Your Password incorrect",
          error,
        });
      }
      else if(error?.code==="auth/user-not-found"){
        setError({
          errorName: "This email not registered. plz SignUp",
          error,
        });
      }
    });
  };
  const UpdateProfile = (name, img) => {
    console.log(name, img);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };
  const UpdateEmail = (email) => {
    console.log(email);
    return updateEmail(auth.currentUser, `${email}`).catch((error) =>
      console.log(error)
    );
  };
  const UpdatePassword = (newPassword) => {
    console.log(newPassword);
    return updatePassword(auth.currentUser, newPassword).catch((error) =>
      console.log(error)
    );
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser();
      dispatch(clearCart())
      localStorage.removeItem("isAdmin")
    });
  };
  const authInfo = {
    user,
    loading,
    UpdateProfile,
    UpdateEmail,
    UpdatePassword,
    facebookLogin,
    resetPassword,
    createUser,
    signIn,
    logOut,
    googleLogin,
    githubLogin,
    authError,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
