import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const textApper = () =>{
     setTodoList([...todoList, text]);
  }
  return (
    <div className="App">
      <h2>Todo List</h2>
      <input placeholder='Text here'
      type='text'
      onChange={(e) => setText(e.target.value)}
      />
      <button onClick={textApper}>Click</button>
      <hr />
      
    </div>
  );
}

export default App;
