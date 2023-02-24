// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { Authcontext } from "../Context/AuthContextProvider"
//  function PrivateRoute({children}) {
//     const {isAuth}=useContext(Authcontext)
//    if(!isAuth){
//     return <Navigate to="/login" />;
//    }
//    return children
//   }
//   export default PrivateRoute;
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../Context/AuthContextProvider'
import { useContext } from "react";
const PrivateRoute = ({children}) => {
   const { isAuth } = useContext(Authcontext)
   const navigate = useNavigate()
   if(!isAuth){
   return   navigate('/login') 
}
  return (
    children
  )
}

export default PrivateRoute