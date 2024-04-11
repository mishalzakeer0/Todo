import './App.css';


import TodoForm from './components/todoform/todoForm';

function App() {
  return (
    <div className="App">
      <div className='mainBody'>
        <h2 className='heading'>Get Things Done!</h2>
        <TodoForm/>
      </div>
    </div>
  );
}

export default App;
