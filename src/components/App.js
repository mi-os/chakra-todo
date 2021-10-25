import React, { useState, useEffect } from "react";
import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);

      setTodoList(response.data);
    };
    fetchData();
  }, []);

  console.log("TODO List：", todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });
  console.log("Incompleted TODO List：", inCompletedList);

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });
  console.log("Completed TODO List：", completedList);

  return (
    <>
      <h1>TODO Progress Management</h1>
      <textarea />
      <button>+ add TODO</button>

      <h2>Incompleted TODO List</h2>
      <ul>
        {inCompletedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>
              {todo.done ? "Go to Incompleted List" : "Go to Completed List"}
            </button>
            <button>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Completed TODO List</h2>
      <ul>
        {completedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>
              {todo.done ? "Go to Incompleted List" : "Go to Completed List"}
            </button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
