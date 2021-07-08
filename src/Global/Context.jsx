import React from 'react'
export const ContextApi=React.createContext()
function Context({children}) {
    const [Auth,setAuth]=React.useState(true)
    const handleAuth=()=>{
        setAuth(!Auth)
    }
    console.log(Auth)
    return (
        <ContextApi.Provider value={{Auth,handleAuth}}>
            {children}
        </ContextApi.Provider>
    )
}

export {Context}
