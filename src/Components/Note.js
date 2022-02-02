import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase-config';

const Note = (props) => {

  const deleteNote =async(id) =>{
    await deleteDoc(doc(db, "noteapp_Notes",id)).then(res =>{
      alert("Note delete !")
    }).catch(err =>{
      alert("Failed Attempt !")
    });
  }

  return (<div>
     
       { props.data.map(note =>{          
         return(
          <div className="card mb-2">  
            <div className="card-body">
                <div className='row d-flex justify-content-between' >
                    <div className='col-md-2'>
                        <h5 className="card-title">{note.date}</h5>
                        
                    </div>
                    <div className='col-md-2'>
                        <h5 className="card-title">{note.title}</h5>
                       
                    </div>
                    <div className='col-md-5'>
                        <p className="card-text">{note.note}</p>
                       
                    </div>
                    <div className='col-md-2'>
                      <button className="btn btn-danger" onClick={()=>{deleteNote(note.id)} }>Delete</button>
                    </div>
                </div>
            </div>
          </div>
         )
       }
        )}         
  </div>);
};

export default Note;
