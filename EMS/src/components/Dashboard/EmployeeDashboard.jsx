import React, { useContext, useMemo } from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = ({ user, setUser, handleLogout }) => {
  const { employees, setEmployees } = useContext(AuthContext);

  const currentEmployee = useMemo(() => {
    return (
      employees.find((employee) => employee.id === user?.id) || user
    );
  }, [employees, user]);

  const tasks = currentEmployee?.tasks || [];

  const updateEmployeeTasks = (updatedTasks) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === currentEmployee.id) {
        return {
          ...employee,
          tasks: updatedTasks,
        };
      }

      return employee;
    });

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    const updatedEmployee = updatedEmployees.find(
      (employee) => employee.id === currentEmployee.id
    );

    const updatedUser = {
      ...updatedEmployee,
      role: "employee",
    };

    setUser(updatedUser);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(updatedUser)
    );
  };

  const handleAcceptTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return {
          ...task,
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        };
      }

      return task;
    });

    updateEmployeeTasks(updatedTasks);
  };

  const handleCompleteTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return {
          ...task,
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        };
      }

      return task;
    });

    updateEmployeeTasks(updatedTasks);
  };

  const handleFailTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return {
          ...task,
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        };
      }

      return task;
    });

    updateEmployeeTasks(updatedTasks);
  };

  return (
    <div className="dashboard-page">
      <Header user={currentEmployee} handleLogout={handleLogout} />

      <main className="dashboard-content">
        <div className="dashboard-welcome employee-welcome">
          <div>
            <p className="dashboard-eyebrow">
              EMPLOYEE WORKSPACE
            </p>

            <h1>
              Good to see you,{" "}
              <span>{currentEmployee?.firstName || "Employee"}</span>
            </h1>

            <p>
              Stay focused, manage your tasks and keep your
              progress moving forward.
            </p>
          </div>

          <div className="dashboard-date">
            <span>Today</span>

            <strong>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </strong>
          </div>
        </div>

        <TaskListNumbers tasks={tasks} />

        <section className="dashboard-section employee-task-section">
          <div className="section-heading">
            <div>
              <span>YOUR WORKSPACE</span>
              <h2>My Tasks</h2>
            </div>

            <p>
              {tasks.length} {tasks.length === 1 ? "task" : "tasks"} assigned
            </p>
          </div>

          {tasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">✓</div>

              <h3>No tasks assigned</h3>

              <p>
                You're all caught up. New tasks will appear here
                when your administrator assigns them.
              </p>
            </div>
          ) : (
            <TaskList
              tasks={tasks}
              onAcceptTask={handleAcceptTask}
              onCompleteTask={handleCompleteTask}
              onFailTask={handleFailTask}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default EmployeeDashboard;