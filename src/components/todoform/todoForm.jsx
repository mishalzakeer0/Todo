import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./TodoForm.css";




const TodoForm = ( {todo} ) => {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState([]);
  const [isEditing, setIsEditing] = useState(false)
  const [editingIndex, setEditingIndex] = useState(0)

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEditing){
      const Task = todos.map((todo, id) => {
        if(id === editingIndex) {
          return value
        }
        return todo
      }
        )
        
        setTodo(Task)
        setValue("")
        setIsEditing(false)
    }
    else if(!isEditing) {
      setTodo((todos) => [...todos, value]);
      setValue("");
    }
  };
  const handleDelete = (todoId) => {
    setTodo(
      todos.filter((value, index) => {
        return index !== todoId;
      })
    );
  };
  const handleEdit = (todoId, todo) => {
    setIsEditing(true)
    setValue(todo)
    setEditingIndex(todoId)
  }

  return (
    <div className="formDiv">
      <form className="form" >
        <input
          type="text"
          value={value}
          placeholder="Whats the task today?"
          onChange={handleChange}
        />
        <button type="submit" className="button" onClick={handleSubmit} >
          {(isEditing ? "Edit": "Add Task")}
        </button>
      </form>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key = {index} className="todo">
            <div className="list">
              <p>{todo}</p>
              <div className="Icon" onClick={() => handleEdit(index, todo)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
              <div className="Icon" onClick={() => handleDelete(index)} >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
