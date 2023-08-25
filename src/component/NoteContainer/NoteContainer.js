import React from 'react'


import Notes from '../Notes/Notes'


import './/NoteContainer.css'




function NoteContainer(props) {
  

  const reverseArray=(arr)=>{
    const array=[];

    for(let i=arr.length - 1; i>=0;--i){
      array.push(arr[i]);
    }
      return array;
  };

  const notes = reverseArray(props.notes);
  console.log(props.notes,Notes)
  
  
  
  return (
    <div className='notes-container'>
      <div className='title'><h1>Your Notes</h1></div>
      <div className='notes-container-notes custom-scroll'>
      {
        notes?.length>0 ? notes.map((item,index)=>
        <Notes 
        key={item.id}
        notes={item}
        deleteNotes={props.deleteNotes}
        updateText={props.updateText}
        />
        ):<h2>Add Notes</h2>
      }
      </div>
    </div>
  )
}

export default NoteContainer;