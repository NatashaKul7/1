import React from "react";
import EditTodoForm from "./EditTodoForm";

const Modal = ({ onClose, currentTodo, editTask }) => {
  return (
    <div className="modal-overlay ">
      <div className="modal-content">
        <EditTodoForm
          task={currentTodo}
          onClose={onClose}
          editTask={editTask}
        />
        <button onClick={() => onClose()}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
