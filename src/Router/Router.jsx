import React from 'react'
import {Switch,Route,Link} from "react-router-dom"
import Stories from '../Component/Stories'
import Post from '../Component/Post'
import Profile from '../Component/Profile'
import SideBar from '../Component/SideBar'
function Router() {
    return (
        <Switch>
            <Route path="/" exact>
            <div className="container">
                <div>
                    <Stories/>
                    <Post/>
                </div>
                <div>
                    <SideBar/>
                </div>
            </div>
            </Route>
            <Route path="/profile/:id">
                <Profile/>
            </Route>
        </Switch>
    )
}
export default Router
