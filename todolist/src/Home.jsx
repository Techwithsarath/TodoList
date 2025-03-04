
import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from "react-icons/bs"

const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put(`http://localhost:3001/update/${id}`)
            .then(result => {
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(result => {
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
//       <div className="h-screen bg-gradient-radial from-blue-500 via-purple-500 to-black">
//         <div className="flex flex-col items-center mt-10 ">
//             <h2 className="text-3xl font-bold mb-4">To-Do List</h2>
//             <Create />
//             {
//                 todos.length === 0 ?
//                     <div className="text-lg text-gray-500 mt-4">No tasks found</div>
//                     :
//                     todos.map(todo => (
                       
//                         <div 
//   key={todo._id} 
//   className={`w-[400px] flex items-center justify-between p-3 mt-3 rounded-lg shadow-md
//     ${todo.done ? "bg-green-500" : "bg-blue-600"} text-white`}
// >
//   <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleEdit(todo._id)}>
//     {todo.done ? 
//       <BsFillCheckCircleFill className="text-black text-xl" /> : 
//       <BsCircleFill className="text-white text-xl" />
//     }
//     <p className='text-lg'>{todo.task}</p>
//   </div>
//   <button onClick={() => handleDelete(todo._id)}>
//     <BsFillTrashFill className="text-red-500 text-xl hover:text-red-700" />
//   </button>
// </div>
//                     ))
//             }
//         </div>
//       </div>
//  <div className="min-h-screen bg-gradient-radial from-blue-500 via-purple-500 to-black flex justify-center p-4">
// <div className="flex flex-col items-center w-full max-w-lg">
//   <h2 className="text-3xl font-bold mb-4 text-center">To-Do List</h2>
//   <Create />
//   {todos.length === 0 ? (
//     <div className="text-lg text-gray-500 mt-4">No tasks found</div>
//   ) : (
//     todos.map(todo => (
//       <div
//         key={todo._id}
//         className={`w-full max-w-md flex items-center justify-between p-3 mt-3 rounded-lg shadow-md
//           ${todo.done ? "bg-green-500" : "bg-blue-600"} text-white transition-all duration-300`}
//       >
//         <div
//           className="flex items-center space-x-3 cursor-pointer"
//           onClick={() => handleEdit(todo._id)}
//         >
//           {todo.done ? (
//             <BsFillCheckCircleFill className="text-black text-xl" />
//           ) : (
//             <BsCircleFill className="text-white text-xl" />
//           )}
//           <p className="text-lg">{todo.task}</p>
//         </div>
//         <button onClick={() => handleDelete(todo._id)}>
//           <BsFillTrashFill className="text-red-500 text-xl hover:text-red-700" />
//         </button>
//       </div>
//     ))
//   )}
// </div>
// </div>      
<div className="min-h-screen bg-gradient-radial from-blue-500 via-purple-500 to-black flex justify-center p-4">
<div className="flex flex-col items-center w-full max-w-lg">
  <h2 className="text-3xl font-bold mb-4 text-center">To-Do List</h2>
  <Create />
  {todos.length === 0 ? (
    <div className="text-lg text-gray-500 mt-4">No tasks found</div>
  ) : (
    // Sort: Uncompleted first, then completed
    [...todos]
      .sort((a, b) => a.done - b.done)
      .map(todo => (
        <div
          key={todo._id}
          className={`w-full max-w-md flex items-center justify-between p-3 mt-3 rounded-lg shadow-md
            ${todo.done ? "bg-green-500" : "bg-blue-600"} text-white transition-all duration-300`}
        >
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleEdit(todo._id)}
          >
            {todo.done ? (
              <BsFillCheckCircleFill className="text-black text-xl" />
            ) : (
              <BsCircleFill className="text-white text-xl" />
            )}
            <p className="text-lg">{todo.task}</p>
          </div>
          <button onClick={() => handleDelete(todo._id)}>
            <BsFillTrashFill className="text-red-500 text-xl hover:text-red-700" />
          </button>
        </div>
      ))
  )}
</div>
</div>

    )
}

export default Home

