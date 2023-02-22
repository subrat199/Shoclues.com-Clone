import React from 'react'
import { createContext ,useState} from 'react'
const AuthContextProvider = () => {
const Authcontext=createContext()
const [isAuth,setIsAuth]=useState(false)
const [token,setToken]=useState('')

  return (
    <div>

    </div>
  )
}

export default AuthContextProvider