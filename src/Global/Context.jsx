import React from 'react'
export const ContextApi=React.createContext()
function Context({children}) {
    const [model,setModel]=React.useState(false)
    return (
        <ContextApi.Provider value={{model}}>
            {children}
        </ContextApi.Provider>
    )
}

export {Context}
