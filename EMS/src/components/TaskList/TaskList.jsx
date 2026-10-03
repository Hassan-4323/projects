import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({
  tasks = [],
  onAcceptTask,
  onCompleteTask,
  onFailTask,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        if (task.newTask) {
          return (
            <NewTask
              key={index}
              task={task}
              taskIndex={index}
              onAccept={onAcceptTask}
            />
          );
        }

        if (task.active) {
          return (
            <AcceptTask
              key={index}
              task={task}
              taskIndex={index}
              onComplete={onCompleteTask}
              onFail={onFailTask}
            />
          );
        }

        if (task.completed) {
          return (
            <CompleteTask
              key={index}
              task={task}
              taskIndex={index}
            />
          );
        }

        if (task.failed) {
          return (
            <FailedTask
              key={index}
              task={task}
              taskIndex={index}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;