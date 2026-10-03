import React from "react";

const NewTask = ({ task, taskIndex, onAccept }) => {
  return (
    <article className="task-card task-new">
      <div className="task-card-header">
        <div className="task-category">
          {task.category || "General"}
        </div>

        <div className="task-status status-new">
          New Task
        </div>
      </div>

      <div className="task-card-body">
        <div className="task-date">
          <span>Deadline</span>
          <strong>{task.taskDate || "No deadline"}</strong>
        </div>

        <h3>{task.taskTitle}</h3>

        <p>
          {task.taskDescription ||
            "No description provided for this task."}
        </p>
      </div>

      <div className="task-card-footer">
        <span className="task-number">
          Task #{String(taskIndex + 1).padStart(2, "0")}
        </span>

        <button
          className="task-action-button accept-button"
          onClick={() => onAccept(taskIndex)}
        >
          Accept Task
          <span>→</span>
        </button>
      </div>
    </article>
  );
};

export default NewTask;