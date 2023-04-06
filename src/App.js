import { useRef, useState } from 'react';
import './App.css';
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'

function App() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const inputTask = useRef(null);
  const textApper = () => {
    setTodoList([...todoList, { task: text, completed: false }]);
    inputTask.current.value = '';
    setText('');
  }
  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((task) => {
      return task.task !== taskToDelete
    }))
  }
  const completedTask = (taskToComplete) => {
    setTodoList(
      todoList.map((task) => {
        return task.task === taskToComplete
          ? { task: taskToComplete, completed: true }
          : { task: task.task, completed: task.completed ? true : false };
      })
    )
  }
  return (
    <div className="App">
      <h1 id='main-text'>Todo List</h1>
      <div id="texter">
      <input
        ref={inputTask}
        placeholder='Text here'
        type='text'
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={textApper}>Click</button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          return (
            <div className='task'>
              <li key={key}>{val.task}</li>
              <div class='completed' onClick={() => completedTask(val.task)}><AiFillCheckCircle style={{width:'50px',height:'50px'}}/></div>
              <div class='completed' onClick={() => deleteTask(val.task)}><AiFillCloseCircle style={{width:'50px',height:'50px'}}/></div>
              {val.completed ?
                (<h1>Task Completed</h1>) :
                (<h1>Task not Completed</h1>)}
            </div>);
        })}
      </ul>
    </div>
  );
}

export default App;
 