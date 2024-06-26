import { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
function Todo() {

  const inputeRef= useRef();
  const [toDoList, setToDoList]=useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):"" );
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

    setToDoList((prev)=>[...prev,newToDo]);
    inputeRef.current.value="";
  }
  const deleteToDo=(id)=> {
   let newItem= toDoList.filter((todoItem)=>todoItem.id !=id);
   setToDoList(newItem);
  }
  const toggole =(id)=> {
   setToDoList(toDoList.map(todo =>
    todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
  ));

  // setToDoList((prevToDo)=> {
  //   return prevToDo.map((todo)=> {
  //     if(todo.id===id){
  //       return {...todo,isComplete:!todo.isComplete}
  //     }
  //     return todo
  //   })
  // })



  }
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(toDoList))
  },[toDoList])
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
            toDoList.map((item,index)=> {
              return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteToDo={deleteToDo} toggole={toggole}/>
            })
          }
        </div>
    </div>
  )
}

export default Todo