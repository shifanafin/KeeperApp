import React, { useState } from "react";

function CreateArea(props) {

    const[note,setNote]=useState(
        {
            title:"",
            content:""
        }
    );
    function handleChange(event){
      const {name,value}=event.target
      setNote(preNote=>
        {
            return {
                ...preNote,
                [name]:value
            }
        })
    }
    function submittNote(event)
    {
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()

    }
  return (
    <div>
      <form>
        <input
         name="title" 
         onChange={handleChange} 
         value={note.title}
         placeholder="Title" />

        <textarea 
        name="content"
         onChange={handleChange}
         value={note.content} 
         placeholder="Take a note..." 
         rows="3" />

        <button onClick={submittNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;