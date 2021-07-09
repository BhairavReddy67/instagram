import React from 'react'
import axios from "axios"
export const ContextApi=React.createContext()
function Context({children}) {
    const [Auth,setAuth]=React.useState(false)
    const [data,setData]=React.useState([])
    const [userName,setUsername]=React.useState("")
    const [Password,setPassword]=React.useState("")
    const [authData,setAuthData]=React.useState({})

    React.useEffect(()=>{
        getData()
    },[])
    console.log(userName,Password)
    function getData(){
        axios("http://localhost:3010/users")
        .then(res=>res.data)
        .then(res=>setData(res))
    }
    const handleAuth=()=>{
        let vaild=data.filter(e=>e.email==userName&&e.password==Password)
        if(vaild.length==1){
            setAuthData(vaild[0])
            setAuth(true)
        }
    }
    console.log(authData)
    const handleAuthlogout=()=>{
        setAuth(false)
    }
    return (
        <ContextApi.Provider value={{Auth,handleAuth,authData,data,userName,setUsername,Password,setPassword,handleAuthlogout}}>
            {children}
        </ContextApi.Provider>
    )
}

export {Context}
