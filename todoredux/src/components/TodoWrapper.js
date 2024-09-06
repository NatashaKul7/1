import { useSelector } from "react-redux";
import { useState } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import SearchTodo from "./SearchTodo";

const TodoWrapper = () => {
  const todos = useSelector((state) => state.todos.todos);
  const [searchTodo, setSearchTodo] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTodo.toLowerCase())
  );
 

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <TodoForm />
      <SearchTodo setSearchTodo={setSearchTodo}/>

      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm task={todo} key={todo.id} />
          ) : (
            <Todo key={todo.id} task={todo} />
          )
        )
      ) : (
        todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm task={todo} key={todo.id} />
          ) : (
            <Todo key={todo.id} task={todo} />
          )
        )
      )}
    </div>
  );
};

export default TodoWrapper;
