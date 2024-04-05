import React from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
  return (
    <div className="todo">
      <div className="list">
        <p>hy my name yemzeey</p>
        <div className="Icon">
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div className="Icon">
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
}

export default Todo
