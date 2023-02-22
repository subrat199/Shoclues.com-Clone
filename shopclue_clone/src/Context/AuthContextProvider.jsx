import React from 'react'
import { createContext ,useState} from 'react'
export const  Authcontext=createContext()
const AuthContextProvider = ({children}) => {
const [isAuth,setIsAuth]=useState(false)
const [token,setToken]=useState('')
const login=(token)=>{
    setIsAuth(true)
    setToken(token)
}
const logout=()=>{
    setIsAuth(false)
}
  return (
    <div>
        <Authcontext.Provider value={{isAuth,token,setToken,login,logout}}>
        {
            children
        }
        </Authcontext.Provider>
    </div>
  )
}

export default AuthContextProvider