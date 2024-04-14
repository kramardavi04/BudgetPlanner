import { useState } from 'react';
import './App.css';
import {MdClose} from 'react-icons/md'

function App() {
  const [addSection,setAddSection] = useState(false)
  const [formData, setData] = useState({
    name : "",
    amount : ""
  })
  const handleSubmit = (e)=>{
      e.preventDefault()
    }
  return (
    <>
      <div className="container">
        <button className="btn" onClick={()=>setAddSection(true)}>Add</button>
        
        {
          addSection && (
            <div className="addContainer">
            <div className="closeBtn" onClick={()=>setAddSection(false)}>
              <MdClose/>
              </div>
              <form onSubmit={handleSubmit}>
              <label for="name">Type:</label>
              <input type="text" id="name"/>

              <label for="amount"> Amount</label>
              <input type="number" id="amount" name="amount"/>

              <button>Submit</button>
            </form>
            </div>
          )
        }
        

      </div>
    </>
  );
}

export default App;
