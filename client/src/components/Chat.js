import { Paper, TextField } from "@mui/material";
import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import io from 'socket.io-client';
// import SendIcon from '@mui/icons-material/Send';
import TextContainer from './TextContainer';
import Messages from './Messages';
import InfoBar from './InfoBar';
import Input from './Input';
import './Chat.css';
let ENDPOINT='http://localhost:5000';
let socket;

const Chat=()=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message,setMessage]=useState('');
    const [messages,setMessages]=useState([]);
    const location = useLocation();
 
    useEffect(()=>{
        let name=location.state.name;
        let room=location.state.room;

        socket=io(ENDPOINT);
        socket.emit('join',{name,room},(error) => {
            if(error) {
              alert(error);
            }
        })
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }

    },[ENDPOINT])

    useEffect(()=>{
        socket.on('message', message=>{
            setMessages(messages =>[...messages,message]);

        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });

    },[])

    const sendMessage=(event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }

    }

    console.log(message,messages)
    return (
    <>
    <div >
      <div>
          <InfoBar room={room} />
    <Messages messages={messages} name={name} />
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <TextField 
    fullWidth
    value={message}
    onChange={(event)=>setMessage(event.target.value)}
    onKeyPress={event=>event.key==='Enter'?sendMessage(event):null} />
        {/* <SendIcon onClic/> */}
        
        {/* </TextField> */}
    </Paper>
    </div>
    <TextContainer users={users}/>
    </div>
    </>
    )}
export default Chat;
