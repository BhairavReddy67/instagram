import NavBar from "./Component/NavBar";
import React from "react";
import "./App.css"
import Stories from "./Component/Stories";
import { ContextApi } from "./Global/Context";
import Login from "./Component/Login"
import Post from "./Component/Post";
function App() {
  const {Auth}=React.useContext(ContextApi)
  return !Auth?(<div><Login/></div>):(
    <div>
      <NavBar/>
      <div className="container">
        <Stories/>
      </div>
      <div className="container">
        <Post/>
      </div>
    </div>
  );
}

export default App;
