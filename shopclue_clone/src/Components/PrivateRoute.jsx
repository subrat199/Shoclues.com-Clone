import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContextProvider"
 function PrivateRoute({children}) {
    const {isAuth}=useContext(Authcontext)
   if(!isAuth){
    return <Navigate to="/login" />;
   }
   return children
  }
  export default PrivateRoute;