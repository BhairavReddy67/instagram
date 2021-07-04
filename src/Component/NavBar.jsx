import React from 'react'
import {FaSistrix,FaTelegramPlane,FaRegHeart,FaRegCompass} from "react-icons/fa"
import {MdHome} from "react-icons/md"
import Img from "../Images/profile.jpg"

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
                    <MdHome className="nav_Icons"/>
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
                    <img src={Img} alt="admin"/>
                </li>
            </div>
        </div>
    )
}

export default NavBar
