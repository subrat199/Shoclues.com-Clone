import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContextProvider"
export default function PrivateRoute({children}) {
    const {isAuth}=useContext(Authcontext)
   if(!isAuth){
    return <Navigate to="/login" />;
   }
   return children
  }