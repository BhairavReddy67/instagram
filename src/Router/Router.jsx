import React from 'react'
import {Switch,Route,Link} from "react-router-dom"
import Stories from '../Component/Stories'
import Post from '../Component/Post'
function Router() {
    return (
        <Switch>
            <Route path="/" exact>
            <div className="container">
                <Stories/>
            </div>
            <div className="container">
                <Post/>
            </div>
            </Route>
            <Route path="/profile">
            </Route>
        </Switch>
    )
}
export default Router
