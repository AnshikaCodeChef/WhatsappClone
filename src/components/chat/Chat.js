import React, { useState, useEffect } from "react";
import "./Chat.css";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
// // import { useParams } from "react-router-dom";
// import db from "../../firebase"
// import firebase from "firebase"
// // import {useStateValue} from "../stateprovide/StateProvider"
function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
//     const { roomId } = useParams();
//     const [roomName, setRoomName] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [{user}, dispatch]=useStateValue();
//     useEffect(() => {
//         if (roomId) {
//             db.collection('rooms').doc(roomId).onSnapshot((snapshot) =>
//                 setRoomName(snapshot.data().name
//                 )
//             )
//             db.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data()))
//             )
//         }
//     }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
//         console.log("input :", input)
//         db.collection("rooms").doc(roomId).collection("messages").add({
//             message:input,
//             name:user.displayName,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         })

        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={'https://avatars.dicebear.com/api/human/' + seed + '.svg'} />

                <div className="chat__headerInfo">
                    <h3>RoomName</h3>
                    <p>Last Seen</p>
    {/* <p>{new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p> */}
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Anshika</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>

                </p>
                {/* {messages.map((message)=>(

               <p className={`chat__message ${message.name===user.displayName && 'chat__reciever'}`}><span className="chat__name">{message.name}</span> {message.message} <span className="timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span> </p>

                ))} */}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendMessage} type="submit">send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
};
export default Chat;