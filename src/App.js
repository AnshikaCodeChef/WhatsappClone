import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
// import { Switch } from "@material-ui/core";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "./components/login/Login"
// import { useStateValue } from "./components/stateprovide/StateProvider";
function App() {
    
    return (
        <div className="App">
            <div className="app__body">
              
                <Sidebar />
                <Chat />
                {/* <Chat /> */}
                        
            </div>
        </div>

    )
}
export default App
