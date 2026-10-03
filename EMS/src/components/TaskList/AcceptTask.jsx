import React from "react";

const AcceptTask = ({
  task,
  taskIndex,
  onComplete,
  onFail,
}) => {
  return (
    <article className="task-card task-active">
      <div className="task-card-header">
        <div className="task-category">
          {task.category || "General"}
        </div>

        <div className="task-status status-active">
          In Progress
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

        <div className="task-actions">
          <button
            className="task-action-button complete-button"
            onClick={() => onComplete(taskIndex)}
          >
            Complete
          </button>

          <button
            className="task-action-button fail-button"
            onClick={() => onFail(taskIndex)}
          >
            Mark Failed
          </button>
        </div>
      </div>
    </article>
  );
};

export default AcceptTask;