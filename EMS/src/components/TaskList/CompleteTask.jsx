import React from "react";

const CompleteTask = ({ task, taskIndex }) => {
  return (
    <article className="task-card task-completed">
      <div className="task-card-header">
        <div className="task-category">
          {task.category || "General"}
        </div>

        <div className="task-status status-completed">
          Completed
        </div>
      </div>

      <div className="task-card-body">
        <div className="task-date">
          <span>Completed Task</span>
          <strong>{task.taskDate || "Completed"}</strong>
        </div>

        <h3>{task.taskTitle}</h3>

        <p>
          {task.taskDescription ||
            "This task has been successfully completed."}
        </p>
      </div>

      <div className="task-card-footer">
        <span className="task-number">
          Task #{String(taskIndex + 1).padStart(2, "0")}
        </span>

        <div className="completed-label">
          <span>✓</span>
          Successfully completed
        </div>
      </div>
    </article>
  );
};

export default CompleteTask;