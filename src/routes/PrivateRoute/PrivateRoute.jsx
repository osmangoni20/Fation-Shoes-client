import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../../component/shared/Loader";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const location=useLocation();

  const {loading,user } = useAuth();
    if(loading){
        <Loader/>
    }
    if(user){
        return children
    }
 return <Navigate to={"/login"} state={{from:location}} replace/>
};

export default PrivateRoute;
