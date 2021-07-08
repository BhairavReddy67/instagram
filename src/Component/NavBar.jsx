import React from 'react'
import {FaSistrix,FaTelegramPlane,FaRegHeart,FaRegCompass} from "react-icons/fa"
import {MdHome} from "react-icons/md"
import Img from "../Images/profile.jpg"
import Popup from "reactjs-popup"
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { CgSync } from "react-icons/cg";
import { ContextApi } from '../Global/Context'
import {Link} from "react-router-dom"


function NavBar() {
    return (
        <div className={"navbar"}>
            <div className={"navbar_first"}>
                <div className={"logo"}>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
                </div>
            </div>
            <div className={"navbar_middle"}>
                <div className="middle_search">
                    <input type="text" className={"search_bar"} placeholder="Search"/>
                    <FaSistrix className="searchIcon"/>
                </div>
            </div>
            <div className={"navbar_last"}>
                <li>
                    <Link to="/" style={{color:"black"}}><MdHome className="nav_Icons"/></Link>
                </li>
                <li>
                    <FaTelegramPlane className="nav_Icons"/>
                </li>
                <li>
                    <FaRegCompass className="nav_Icons"/>
                </li>
                <li>
                    <FaRegHeart className="nav_Icons"/>
                </li>
                <li>
                    <Popup
                        trigger={<img className={"Image_log button"} src={Img} alt="admin"/>}
                        position="bottom center"
                        on="click"
                    >
                        <Card/>
                    </Popup>
                </li>
            </div>
        </div>
    )
}

const Card = () => {
    const {handleAuth}=React.useContext(ContextApi)
    console.log(handleAuth)
    return (<div className="card">
        <li><Link to={"/profile"}  className="profile_link"><IoPersonCircleOutline className="icon_data"/><p>Profile</p></Link></li>
        <li><Link to={"/saved"}  className="profile_link"><BsBookmark className="icon_data"/><p>Saved</p></Link></li>
        <li><Link to={"/settings"}  className="profile_link"><IoIosSettings className="icon_data"/><p>Settings</p></Link></li>
        <li><Link to={"/Switch Account"}  className="profile_link"><CgSync className="icon_data"/><p>Switch Account</p></Link></li>
        <li className="logout_line" onClick={()=>handleAuth()}>Log Out</li>
    </div>
  );
}
export default NavBar
