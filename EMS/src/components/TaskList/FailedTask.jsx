import React from "react";

const FailedTask = ({ task, taskIndex }) => {
  return (
    <article className="task-card task-failed">
      <div className="task-card-header">
        <div className="task-category">
          {task.category || "General"}
        </div>

        <div className="task-status status-failed">
          Failed
        </div>
      </div>

      <div className="task-card-body">
        <div className="task-date">
          <span>Task Date</span>
          <strong>{task.taskDate || "No date"}</strong>
        </div>

        <h3>{task.taskTitle}</h3>

        <p>
          {task.taskDescription ||
            "This task was marked as failed."}
        </p>
      </div>

      <div className="task-card-footer">
        <span className="task-number">
          Task #{String(taskIndex + 1).padStart(2, "0")}
        </span>

        <div className="failed-label">
          <span>!</span>
          Task not completed
        </div>
      </div>
    </article>
  );
};

export default FailedTask;