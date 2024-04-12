import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./TodoForm.css";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      console.log("index of editing",editingIndex)
      const Task = todos.map((todo, id) => {
        if (id === editingIndex) {
          return value;
        }
        return todo;
      });

      setTodo(Task);
      
      setEditingIndex(null);
    }  else{
      setTodo((todos) => [...todos, value]);
    }
    setValue("");
  };
  const handleDelete = (todoId) => {
    setTodo(
      todos.filter((value, index) => {
        return index !== todoId;
      })
    );
  };
  const handleEdit = (todoId, todo) => {
    setValue(todo);
    setEditingIndex(todoId);
  };

  return (
    <div className="formDiv">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Whats the task today?"
          onChange={handleChange}
        />
        <button type="submit" className="button">
          {editingIndex === null ? "Add Task" : "Edit Task"}
        </button>
      </form>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            <div className="list">
              <p>{todo}</p>
              <div className="Icon" onClick={() => handleEdit(index, todo)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
              <div className="Icon" onClick={() => handleDelete(index)}>
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

