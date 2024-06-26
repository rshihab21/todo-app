import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_img from '../assets/delete.png'

function TodoItems({text,id,isComplete,deleteToDo,toggole}) {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggole(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] ${isComplete? "line-through":""}`}>{text}</p>
        </div>
        <img onClick={()=>deleteToDo(id)} src={delete_img} alt="" className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default TodoItems