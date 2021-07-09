import React from 'react'
import { ContextApi } from '../Global/Context'

function Stories() {
    const {data}=React.useContext(ContextApi)
    return (
        <div className="stories">
            {data.map(e=><div>
                <img src={e.image} alt={e.username}/>
                <p style={{textAlign:"center"}}>{e.name}</p>
            </div>)}
        </div>
    )
}

export default Stories
