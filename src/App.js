import './App.css';
import Todo from './components/todo/todo';

import TodoForm from './components/todoform/todoForm';

function App() {
  return (
    <div className="App">
      <div className='mainBody'>
        <h2 className='heading'>Get Things Done!</h2>
        <TodoForm />
        <Todo />
      </div>
    </div>
  );
}

export default App;
