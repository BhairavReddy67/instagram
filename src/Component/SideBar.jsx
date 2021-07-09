import React from 'react'
import { Link } from 'react-router-dom'
import { ContextApi } from '../Global/Context'

function SideBar() {
    const {authData,data}=React.useContext(ContextApi)
    const [allUser,setAlluser]=React.useState([])
    React.useEffect(()=>{
        setAlluser(data.filter(e=>e.id!=authData.id))
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar_pro">
                <div className="side1">
                    <img src={authData.image} alt={authData.id}/>
                </div>
                <div className="side2">
                    <b>{authData.username}</b>
                    <p>{authData.name}</p>
                </div>
                <div className="sidebar_pro_span">
                    <span>switch</span>
                </div>
            </div>
            <div>
                <div style={{float:"left",marginLeft:"15px",fontSize:"12.5px"}}>Suggestions For You</div>
                <div className="sidebar_pro_span" style={{float:"right",marginRight:"10px"}}><span>See all</span></div>
            </div>
            {allUser && allUser.map(e=><div className="sidebar_pro_1">
                <div className="side_1">
                    <img src={e.image} alt={e.id}/>
                </div>
                <div className="side_2">
                    <Link to={`/profile/${e.id}`} className="profile_link_side"><b>{e.username}</b></Link>
                    <p>{e.name}</p>
                </div>
                <div className="sidebar_pro_span">
                    <span>follow</span>
                </div>
            </div>)}
        </div>
    )
}

export default SideBar
