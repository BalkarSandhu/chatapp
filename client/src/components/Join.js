import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Join.css';

const Join=()=>{
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [room,setRoom]=useState("");
    const submit =()=>{
        navigate('/chat',{state:{name,room}})
    }
    return (
    <>
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
          <button className={'button mt-20'} type="submit" onClick={e => (!name || !room) ? e.preventDefault() : submit()}>Join Chat</button>
      </div>
    </div>
    </>
    )
}
export default Join;