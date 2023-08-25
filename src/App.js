import React, { useEffect, useState } from "react";

import NoteContainer from "./component/NoteContainer/NoteContainer";
import Sidebar from "./component/Sidebar/Sidebar";

import "./App.css";

function App() {
  const [Notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);

  const addNotes = (color) => {
    const tempNotes = [...Notes];
    const uuid= require('uuid');
    const uniqueId = uuid.v4();

    

    tempNotes.push({
      id:Date.now() + "" + Math.floor(Math.random() *78),
      title:"",
      text: "",
      time: Date.now(),
      color,
    });

    setNotes(tempNotes);
  };

  const deleteNotes=(id)=>{
    const tempNotes=[...Notes]

    const index =tempNotes.findIndex(item=>item.id==id)
    if(index<0)return;

    tempNotes.splice(index,1);
    setNotes(tempNotes);
  };
  
  const updateText =(text,id)=>{
    const tempNotes=[...Notes]

    const index =tempNotes.findIndex(item=>item.id==id)
    if(index<0)return
    tempNotes[index].text= text;
    setNotes(tempNotes);
  };

  useEffect(()=>{
    localStorage.setItem('notes-app', JSON.stringify(Notes))
  },[Notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNotes} />
      <NoteContainer notes={Notes} deleteNotes={deleteNotes} updateText={updateText}/>

    </div>
  )
  };
export default App;
