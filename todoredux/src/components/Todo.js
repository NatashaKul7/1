import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted, toggleEditing } from "../store/todoSlice";

const Todo = ({ task, editTodo }) => {
  const dispatch = useDispatch();

  return (
    <div className="Todo">
      <p
        onClick={() => dispatch(toggleCompleted(task.id))}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => dispatch(toggleEditing(task.id))}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => dispatch(deleteTodo(task.id))}
        />
      </div>
    </div>
  );
};

export default Todo;
