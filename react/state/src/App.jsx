import { useState } from 'react';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodoList = () => {
    setTodoList((prevVal) => {
      return [...prevVal, ]
    })
  }
  return (
    <>
      <h1>To Do List</h1>
      <input type="text" name="name" />
      <button>Add Todo</button>
      <ol>{
        todoList.map((val, idx) => {
          return <li key={idx}>{val}</li>
        })
      }</ol>

    </>
  )
}

export default App
