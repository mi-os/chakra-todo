import React, { useRef } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoTitle } from './TodoTitle';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

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
      <TodoAdd
        buttonText="Add TODO"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="Incompleted TODO List"
        as="h2"
      />
      <TodoList
       todoList={completedList}
       toggleTodoListItemStatus={toggleTodoListItemStatus}
       deleteTodoListItem={deleteTodoListItem}
       title="Completed List"
       as="h2"
      />
    </>
  );
}

export default App;
