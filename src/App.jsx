import { useState } from 'react'
import './App.css'

function App() {
  const [newTask, setNewTask] = useState("");

  const [taskArr,setTaskArr]=useState([]);

   const handleInputChange =(e)=>
   {
      setNewTask(e.target.value)
   }
   
   console.log(taskArr)

    const addNewTask=(e)=>
    {
      e.preventDefault()
      setTaskArr([...taskArr,newTask])
      setNewTask("")
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        addNewTask(e);
      }
    }



  return (
     
     <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputChange}  
        type="text"
        value={newTask}
        onKeyDown={handleKeyDown}
         />


        <button onClick={addNewTask}>
          <span>Add</span>
        </button>
        
      </div>
      <div>
        <ol>
          {taskArr.map((task)=>
          {
            return <li>{task}</li>
          })}
        </ol>
      </div>
    </div>
    
  )
}

export default App
