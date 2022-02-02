import { useState } from 'react';
import { db } from '../firebase-config'; 
import { collection, addDoc} from "firebase/firestore"; 
import "./AddNotes.css"

const AddNotes = () => {

  const current = new Date();
  const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;

  // const[date,setDate]=useState('');
  const[title,setTitle]=useState('');
  const[note,setNote]=useState('');

  const addNote = async() =>{

    if(note ==""  || title == ""){
      alert("Enter Your Note!!");
    }else{

      const docRef = await addDoc(collection(db, "noteapp_Notes"), {
        date: date,
        note: note,
        title: title
      }).then(res =>{
        alert("Note Added !")
      }).catch(err =>{
        alert("Failed Attempt !")
      });

    } 
  }

  const clear = () =>{
    setTitle("");
    setNote("");
  }

 


  return (<div>
     

      <div className='container'>
        <br></br>
          <div className='row'>
                         
               <h3>Add Your Note</h3>
               <br></br>
               <br></br>
               <br></br>


              <div className="card border-secondary mb-3 addnote">

                  <div className="card-header bg-secondary row">
                    <div className="col-11 col-md-11">
                      <h4 className='mt-1 text-light'>New Note</h4>
                    </div>
                     <div className="col-1 col-md-1">
                     <button type="button" className="btn btn-light" onClick={clear}>Clear</button> 
                     </div>                
                   </div>
                  <div className="card-body text-secondary">
                      <br></br>
                      <input className="form-control" type="text" placeholder="Date" value={date} readOnly></input>
                       <br></br>
                       <input className="form-control" type="text" placeholder="Enter Title Here" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
                      <br></br>
                      <div className="form-floating"> 
                         <textarea className="form-control" placeholder="Leave a note here" rows="10" id="floatingTextarea" value={note} onChange={(e)=>{setNote(e.target.value)}}></textarea>
                       <label htmlFor="floatingTextarea">Your Note Here..</label>
                      </div>
                      <br></br>
                      
                      <button type="button" className="btn btn-secondary" onClick={addNote}>Add +</button> 
                    
                  </div>
              </div>

          </div>

      </div>

      

  </div>);
};

export default AddNotes;
