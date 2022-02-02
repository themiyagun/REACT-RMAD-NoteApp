import { useEffect, useState } from 'react';
import Note from '../Components/Note';
import { db } from '../firebase-config'; 
import { collection, getDocs } from "firebase/firestore"; 


const ViewNotes = () => {

  const[notes,setNotes] = useState([]);

   useEffect(() => {
   getNote();
  });

  const getNote = async() =>{
    const querySnapshot = await getDocs(collection(db, "noteapp_Notes"));
    setNotes(querySnapshot.docs.map((doc)=>({id:doc.id, ...doc.data() }))); 
  }

  return (    
  <div>    
      <div className='container'>      
          <div className='row'>
              <div className='col-md-12'>
              <br></br>
                <h3>View Your Notes</h3>
               <br></br>
                  <div className="card border-info mb-3" >
                    <div className="card-header bg-secondary">
                        <div className="col-11 col-md-11">
                          <h4 className='mt-1 text-light'>All Your Notes</h4>
                        </div>
                    </div>
                    <div className="card-body text-secondary">
                      <Note data={notes}></Note>
                    </div>
                  </div>               
               
                </div>
              </div>
        
      </div>
  </div>);
};

export default ViewNotes;
