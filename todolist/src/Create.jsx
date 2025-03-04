import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const[task,setTask] = useState()
  const handleAdd = ()=>{

    if(!task.trim()){
      alert("Task cannot be empty!");
      return;
    }

    axios.post('http://localhost:3001/add',{task:task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
    
  }

  return (
    
    // <div className='flex space-x-2 mt-4'>
    //   <input
    //     type="text"
    //     value={task}
    //     onChange={(e) => setTask(e.target.value)}
    //     placeholder="Enter Task"
    //     className="border-2 border-gray-300 p-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //   />
    //   <button
    //     type="button"
    //     onClick={handleAdd}
    //     className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
    //   >
    //     Add
    //   </button>
    // </div>
    <div className="flex w-full max-w-md gap-x-2">
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Enter Task"
      className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="button"
      onClick={handleAdd}
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      Add
    </button>
  </div>
  

  )
}

export default Create
