import React, { useRef } from "react";

import { useTodo } from "../hooks/useTodo";

const TodoTitle = ({ title, as }) => {
  if (as === "h1") return <h1>{title}</h1>;
  if (as === "h2") return <h2>{title}</h2>;

  return <p>{title}</p>;
};

const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? "Go to Incompleted List" : "Go to Completed List"}
      </button>
      <button onClick={handleDeleteTodoListItem}>Delete</button>
    </li>
  );
};

const TodoList = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
         todo={todo}
         key={todo.id}
         toggleTodoListItemStatus={toggleTodoListItemStatus}
         deleteTodoListItem={deleteTodoListItem}
         />
      ))}
    </ul>
  );
};

const TodoAdd =({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>Add TODO</button>
    </>
  );
};

function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem
   } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;

    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  console.log("TODO List：", todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <TodoTitle title="TODO Progress Management" as="h1" />
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />

      <TodoTitle title="Incompleted TODO List" as="h2" />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />

      <TodoTitle title="Completed List" as="h2" />
      <TodoList
       todoList={completedList}
       toggleTodoListItemStatus={toggleTodoListItemStatus}
       deleteTodoListItem={deleteTodoListItem}
      />
    </>
  );
}

export default App;
