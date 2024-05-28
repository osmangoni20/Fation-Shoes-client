        import { GoogleAuthProvider, signOut, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
        import { createContext, useEffect, useState } from "react";

        export const authContext = createContext(null);
        import { app } from "../Firebase/Firebase.config";
        const auth = getAuth(app);

        // eslint-disable-next-line react/prop-types
        const AuthProvider = ({ children }) => {
            const [user,setUser]=useState(null);
            const [loading,setLoading]=useState(true)
            const [authError,setError]=useState({})
            const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
                setLoading(false)
            }else{
                setLoading(false)
            }
           return(()=>{
            return unsubscribe()
           })
        });
    }, [])
        const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
        };
        const createUser=(email,password)=>{
            console.log(email,password)
            return createUserWithEmailAndPassword(auth,email,password).then(
                logOut()
            ).catch(
                (error)=>{
                    console.log(error)
                    if(error?.code==="auth/network-request-failed"){
                        setError({errorName:"Your internet connection down",error} )
                    }
                }
            );
        }
        const signIn=(email,password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password).catch(
                (error)=>{
                    console.log(error)
                    if(error?.code==="auth/network-request-failed"){
                        setError({errorName:"Your internet connection down",error} )
                    }
                   else if(error?.code==="auth/invalid-credential"){
                    setError({errorName:"Your Email or Password incorrect. Go to SignUp",error})
                    }
                }
            );
        }

        const logOut=()=>{
            signOut(auth).then(() => {
                setUser()
              })
        }
        const authInfo = {user,loading, createUser,signIn,logOut, googleLogin,authError};
        return (
            <authContext.Provider value={authInfo}>{children}</authContext.Provider>
        );
        };

        export default AuthProvider;
