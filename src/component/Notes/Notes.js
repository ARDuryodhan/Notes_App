import React from 'react';

import deleteIcon from "../../assets/delete-icon.png";

import './Notes.css';


let timer= 500,timeout;
function Notes(props) {

    const months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 'November', "December"]
    const DateFormate=(value)=>{
        if(!value) return""
        const date=new Date(value);

        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var amPM = date.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;


        
        

        let min= date.getMinutes();  
        min=min<10?"0"+min:min

        let day= date.getDate();

        const month = months[date.getMonth()]
        
        return(
            <>
                <span>{hours}:{min} {amPM} <br/>
                <b> {day} {month}</b></span>
            </>
        )

        // return (`${hours}:${min} ${amPM} ${day}  ${month}`);
    };

    const debounce=(func)=>{
        clearTimeout(timeout)
        timeout=setTimeout(func,timer);
    };

    const updateText = (text, id)=>{
        debounce(()=>props.updateText(text,id))
    }


    return (
    <div className='notes' style={{backgroundColor:props.notes.color}}>

        <textarea className='text_notes' defaultValue={props.notes.text}
        onChange={(event)=>updateText(event.target.value,props.notes.id)} />

        <div className='notes-footer-info'>
            <p>{DateFormate(props.notes.time)}</p>
            <img src={deleteIcon} alt="Delete" onClick={() => props.deleteNotes(props.notes.id)} />
        </div>
    </div>
    );
}

export default Notes;