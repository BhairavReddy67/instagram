import React from 'react'
import {ContextApi} from "../Global/Context"
import {FaSistrix,FaTelegramPlane,FaRegHeart,FaRegCompass, FaComment} from "react-icons/fa"
import { BsBookmark } from "react-icons/bs";
import {BiSmile} from "react-icons/bi"
function Post() {
    const {data}=React.useContext(ContextApi)
    return (
        <div className="post_data">
            {data.map(e=>{
            let comment=e.comments
            return (<div>
                    <div className="first_po">
                        <img src={e.image} alt={e.name}/>
                        <p>{e.name}</p>
                    </div>
                    <div className="second_po">
                        <img src={e.galary[0]} alt={e.name}/>
                    </div>
                    <div className="third_po">
                        <div className="symb">
                            <FaRegHeart className="ico"/>
                            <FaTelegramPlane className="ico"/>
                            <FaComment className="ico"/>
                            <BsBookmark className="ico ico1"/>
                        </div>
                        <div className="symb">
                            <pre><b>{comment[comment.length-2].user}</b> {comment[comment.length-2].com}</pre>
                            <pre><b>{comment[comment.length-1].user}</b> {comment[comment.length-1].com}</pre>
                        </div>
                        <div className="post_cmt">
                            <BiSmile style={{fontSize:"50px",color:"#bebebe",paddingLeft:"15px"}}/>
                            <input className="input" placeholder={"add a comment..."}/>
                            <span>post</span>
                        </div>
                    </div>
                </div>)})}
        </div>
    )
}

export default Post
