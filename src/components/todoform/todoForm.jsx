import React from 'react'
import './TodoForm.css'
const TodoForm = () => {
  return (
    <div className='formDiv'>
      <form className='form'>
        <input type="text" placeholder='Whats the task today?'/>
        <button className='button'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm



