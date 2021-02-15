import React, { useState, useEffect } from "react";
import "./Sidebar.css"
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from "../sidebarChats/SidebarChats";
// import db from "../../firebase";
// // import { useStateValue } from "../stateprovide/StateProvider";

function Sidebar() {
//     const [rooms, setRooms] = useState([]);
//     const [{user}, dispatch]=useStateValue();

//     useEffect(() => {
//         const unsubscribe=db.collection("rooms")
//         db.collection('rooms').onSnapshot(snapshot => (
//             setRooms(snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 data: doc.data(),
//             })))
//         ))
//         return ()=>{
//                 unsubscribe();
//         }
//     }, [])
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <IconButton>
                    <Avatar src=""/>
                </IconButton>
                <div className="sidebar__header__right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                    {/* <MoreVertIcon /> */}
                </div>
            </div>
            {/* sidebar search  */}
            <div className="sidebar__search">
                <div className="sidebar_search_container">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <input type="text" placeholder="search or start a new chat"></input>
                </div>
            </div>
             <div className="sidebar__chats">
                 <SidebarChat/>
                 <SidebarChat/>
                
            </div>
    </div>
        
    )

}
export default Sidebar