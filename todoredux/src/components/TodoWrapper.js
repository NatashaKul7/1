import { useSelector } from "react-redux";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";


const TodoWrapper = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <TodoForm />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm task={todo} key={todo.id} />
        ) : (
          <Todo key={todo.id} task={todo} />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
