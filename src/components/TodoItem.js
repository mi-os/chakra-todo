export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {

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
