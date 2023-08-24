import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const submitTask = (e) => {
    e.preventDefault();
    setList((prevVal) => {
      return [...prevVal, task];
    })
    setTask("");
  }

  const deleteListItem = (idx) => {
    setList(list.filter((val, index) => index != idx));
  }

  return (
    <div className='app'>
      <h1>To Do List</h1>
      <Form task={task} setTask={setTask} submitTask={submitTask} />
      <TaskList list={list} deleteListItem={deleteListItem} />
    </div>
  )
}

function TaskList({ list, deleteListItem }) {
  return (
    <div className='list'>
      {
        list != null &&
        list.map((val, idx) => {
          return <div className="list-item" key={idx}>{val}
            <span className='delete'>✓</span>
            <span onClick={() => deleteListItem(idx)} className='delete'>X</span>
          </div>
        })
      }
    </div>
  )
}

function Form({ task, setTask, submitTask }) {
  return (
    <form onSubmit={(e) => submitTask(e)}>
      <input type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        name="task"
        placeholder='Enter your task here...'
      />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default App
