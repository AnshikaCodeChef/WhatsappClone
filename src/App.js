import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Pusher from "pusher-js";
import axios from "./axios";
// import { Switch } from "@material-ui/core";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "./components/login/Login"
// import { useStateValue } from "./components/stateprovide/StateProvider";
function App() {
    const [messages,setMessages] = useState([]);
    useEffect(() => {
        axios.get('/messages/sync')
        .then(response => {
            // console.log(response.data)
            setMessages(response.data);
        });
    }, []);

    useEffect(() => {
        const pusher = new Pusher('199b2604b3d21f23f659', {
            cluster: 'ap2'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', function(newMessage) {
            // alert(JSON.stringify(newMessage));
            setMessages([...messages, newMessage])
          });

          return () =>{
              channel.unbind_all();
              channel.unsubscribe();
          };
    }, [messages]);

    console.log(messages);
    
    return (
        <div className="App">
            <div className="app__body">
              
                <Sidebar />
                <Chat messages={messages} />
                {/* <Chat /> */}
                        
            </div>
        </div>

    )
}
export default App
