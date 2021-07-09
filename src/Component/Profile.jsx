import React from 'react'
import Img from "../Images/profile.jpg"
import {IoIosSettings} from "react-icons/io"
import { useParams } from 'react-router-dom'
import { ContextApi } from '../Global/Context'
function Profile() {
    const {id}=useParams()
    const {data}=React.useContext(ContextApi)
    const [profile,setProfile]=React.useState({})
    const [galary,setGalary]=React.useState([])
    React.useEffect(()=>{
    let x=data.filter(e=>e.id==id)
    setProfile(x[0])
    setGalary(profile.galary)
    },[])
    React.useEffect(()=>{
        setGalary(profile.galary)
    })
    
    return (
        <div className="container">
            <div className="profile_details">
                <div className="image_pro">
                    <img src={profile.image} alt="pic"/>
                </div>
                <div className="profile_name">
                    <div>
                        <p style={{fontSize:"20px"}}>{profile.username}</p>
                        <button style={{marginRight:"5px",cursor:"pointer",padding:"5px"}}>Edit Profile</button>
                        <IoIosSettings style={{cursor:"pointer",alignItems:"center",textAlign:"center"}}/>
                    </div>
                    <div>
                        <p><b>{5}</b> posts</p>
                        <p><b>{profile.followers}</b> followers</p>
                        <p><b>{profile.followings}</b> followings</p>
                    </div>
                    <div>
                        <p><b>{profile.name}</b></p>
                    </div>
                </div>
            </div>
            <div className="photos_profile">
                {galary && galary.map((e,i)=><img src={e} alt={i}/>)}
            </div>
        </div>
    )
}

export default Profile
