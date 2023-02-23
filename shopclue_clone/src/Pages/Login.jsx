import { useContext,useState} from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../Context/AuthContextProvider'
export default function Login() {
    const [email,setEmail]=useState("eve.holt@reqres.in")
    const [password,setPassword]=useState("cityslicka")
    const {login,isAuth,setToken,setIsAuth}=useContext(Authcontext)
const HandleLogin= async (e)=>{
    e.preventDefault()
    const userDetails={
        email,
        password
    }
   const data=await  fetch(`https://reqres.in/api/login`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(userDetails)
    })
    try {
        let data1=await data.json()
        login(data1.token)
    } catch (error) {   
      console.log(error)
      
    }  
}
if(isAuth){
    return <Navigate to="/"/>
}
    return (
        <div>
            <form className = "auth_form" onSubmit={HandleLogin} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 300, border:'1px solid black',borderRadius:'5px'}}
                    value={email}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"   
                />
                <br />
                <input
                   style = {{padding:"5px", margin: "10px", width: 300, border:'1px solid black',borderRadius:'5px'}}
                    value={password}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input className = "submit" type = "submit"  style = {{padding:"5px", margin: "10px", width: 300, border:'1px solid black',borderRadius:'5px'}}/>
            </form>                 
        </div>
    )
}