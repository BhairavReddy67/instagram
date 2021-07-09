import NavBar from "./Component/NavBar";
import React from "react";
import "./App.css"
import { ContextApi } from "./Global/Context";
import Login from "./Component/Login"
import Router from "./Router/Router";
function App() {
  const {Auth}=React.useContext(ContextApi)
  return !Auth?(<div><Login/></div>):(
    <div>
      <NavBar/>
      <Router/>
    </div>
  );
}

export default App;
