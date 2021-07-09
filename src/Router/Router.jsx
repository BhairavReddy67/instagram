import React from 'react'
import {Switch,Route,Link} from "react-router-dom"
import Stories from '../Component/Stories'
import Post from '../Component/Post'
import Profile from '../Component/Profile'
function Router() {
    return (
        <Switch>
            <Route path="/" exact>
            <div className="container">
                <Stories/>
                <Post/>
            </div>
            </Route>
            <Route path="/profile/:id">
                <Profile/>
            </Route>
        </Switch>
    )
}
export default Router
