import { useTodo } from "../hooks/useTodo";

const TodoTitle = ({ title, as }) => {
  if (as === "h1") return <h1>{title}</h1>;
  if (as === "h2") return <h2>{title}</h2>;

  return <p>{title}</p>;
};

const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.content}
      <button>{todo.done ? "Go to Incompleted List" : "Go to Completed List"}</button>
      <button>Delete</button>
    </li>
  );
};

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

function App() {
  const { todoList } = useTodo();

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
      <textarea />
      <button>+ add TODO</button>

      <TodoTitle title="Incompleted TODO List" as="h2" />
      <TodoList todoList={inCompletedList} />

      <TodoTitle title="Completed List" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
