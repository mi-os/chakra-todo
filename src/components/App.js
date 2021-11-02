import React, { useRef } from "react";
import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

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

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
      <TodoTitle
        title="TODO Progress Management"
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
      />
      <TodoAdd
        placeholder="Add TODO"
        leftIcon={<AddIcon />}
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
        fontSize={{ base: "xl", md: "2xl" }}
      />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="Completed List"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
      />
    </Container>
  );
}

export default App;
