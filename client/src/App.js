import React from "react";
import {Routes,Route} from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';
export default function App(){
    console.log("1")
    return(<>
    {console.log("2")}
        <Routes>
        <Route path='/' exact element={<Join />}/>
        <Route path='/chat' element={<Chat />}/>
        </Routes>
    {console.log("3")}
    </>);
}