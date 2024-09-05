import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../store/todoSlice";

const EditTodoForm = ({ task }) => {
  const [value, setValue] = useState(task.task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(editTask({ task: value, id: task.id }));
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
