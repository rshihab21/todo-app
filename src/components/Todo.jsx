import { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
function Todo() {

  const inputeRef= useRef();
  const [toDo, setToDo]=useState([])
  const add =()=> {
    const inputText =inputeRef.current.value.trim();
    if(inputText==="") {
      return null;
    }
    const newToDo = {
      id:Date.now(),
      text:inputText,
      isComplete:false
    }

    setToDo((prev)=>[...prev,newToDo]);
    inputeRef.current.value="";


  }
  return (
    <div className='bg-white place-self-center w-4/12 flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/* title */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text-3xl font-semibold'>ToDO List</h1>
        </div>

        {/* input box  */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputeRef} className='bg-transparent border-0 outline-none flex-1 pl-6 h-14 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
        </div>

        {/* todo list */}

        <div>
          {
            toDo.map((item,index)=> {
              return <TodoItems key={index} text={item.text}/>
            })
          }
        </div>
    </div>
  )
}

export default Todo