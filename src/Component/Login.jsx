import React from 'react'
import {TextField} from "@material-ui/core"
import Img from "../Images/Phone.png"
import { ContextApi } from '../Global/Context'
function Login() {
    const {handleAuth}=React.useContext(ContextApi)
    const name="tbhairavreddy@gmail.com"
    const password="0123"
    const [userName,setUsername]=React.useState("")
    const [Password,setPassword]=React.useState("")
    const handleSubmit=()=>{
        if(userName==name&&password==Password){
            handleAuth()
        }
    }
    return (
        <div className="Inst_login">
            <div>
                <div>
                    <img className="image1" src={Img} alt="phn"/>
                </div>
            </div>
            <div>
                <div className="form">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/><br/>
                    <TextField  
                    value={userName} 
                    onChange={(e)=>setUsername(e.target.value)} 
                    label="UserName" variant="outlined" 
                    style={{margin:"2px",background:"white",width:"80%"}}/><br/>
                    <TextField value={Password} type={"password"} onChange={(e)=>setPassword(e.target.value)} label="Password" variant="outlined" style={{margin:"2px",background:"white",width:"80%"}}/><br/>
                    <button onClick={handleSubmit} style={{margin:"2px",background:"blue",color:"white",width:"80%",height:"40px",fontSize:"15px",border:"1px solid blue"}}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
