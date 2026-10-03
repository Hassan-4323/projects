import React from "react";

const TaskListNumbers = ({ tasks = [] }) => {
  const newTasks = tasks.filter((task) => task.newTask).length;

  const activeTasks = tasks.filter((task) => task.active).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const failedTasks = tasks.filter(
    (task) => task.failed
  ).length;

  const cards = [
    {
      label: "New Tasks",
      value: newTasks,
      icon: "✦",
      className: "new-stat",
    },
    {
      label: "Active Tasks",
      value: activeTasks,
      icon: "↗",
      className: "active-stat",
    },
    {
      label: "Completed",
      value: completedTasks,
      icon: "✓",
      className: "completed-stat",
    },
    {
      label: "Failed",
      value: failedTasks,
      icon: "!",
      className: "failed-stat",
    },
  ];

  return (
    <div className="employee-stats-grid">
      {cards.map((card) => (
        <div
          className={`employee-stat-card ${card.className}`}
          key={card.label}
        >
          <div className="employee-stat-top">
            <div className="employee-stat-icon">
              {card.icon}
            </div>

            <span>{card.label}</span>
          </div>

          <strong>{card.value}</strong>

          <div className="stat-progress">
            <span
              style={{
                width:
                  tasks.length > 0
                    ? `${Math.min(
                        (card.value / tasks.length) * 100,
                        100
                      )}%`
                    : "0%",
              }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;