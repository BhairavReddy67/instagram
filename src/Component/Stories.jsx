import React from 'react'
import Shiva from "../Images/Shiva.jpg"
import Raja from "../Images/Raja.jpg"
import Rama from "../Images/Rama.jpg"
import Rassed from "../Images/rasheed.jpg"
import Pradeep from "../Images/pradeep.jpg"
import Vishnu from "../Images/vishnu.jpg"
import Sree from "../Images/sree.jpg"
import Praveen from "../Images/praveen.jpg"

function Stories() {
    const status=[
        {img:Shiva,name:"shiva"},
        {img:Raja,name:"Raja_Reddy"},
        {img:Rama,name:"Rama"},
        {img:Vishnu,name:"Vishnu"},
        {img:Rassed,name:"Rassed"},
        {img:Pradeep,name:"Pradeep"},
        {img:Praveen,name:"Praveen"},
        {img:Sree,name:"sree"},
        {img:Sree,name:"sree"},
        {img:Vishnu,name:"Vishnu"},
        {img:Vishnu,name:"Vishnu"},
        {img:Vishnu,name:"Vishnu"},
        {img:Vishnu,name:"Vishnu"},
        {img:Vishnu,name:"Vishnu"},
    ]
    return (
        <div className="stories">
            {status.map(e=><div>
                <img src={e.img} alt={e.name}/>
                <p style={{textAlign:"center"}}>{e.name}</p>
            </div>)}
        </div>
    )
}

export default Stories
