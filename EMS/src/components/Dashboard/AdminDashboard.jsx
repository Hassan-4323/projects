import React, { useContext, useMemo, useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ user, setUser, handleLogout }) => {
  const [activeSection, setActiveSection] = useState("overview");

  const { employees, setEmployees } = useContext(AuthContext);

  const statistics = useMemo(() => {
    let totalTasks = 0;
    let completedTasks = 0;
    let activeTasks = 0;
    let failedTasks = 0;
    let newTasks = 0;

    employees.forEach((employee) => {
      employee.tasks?.forEach((task) => {
        totalTasks++;

        if (task.completed) completedTasks++;
        if (task.failed) failedTasks++;
        if (task.active) activeTasks++;
        if (task.newTask) newTasks++;
      });
    });

    return {
      totalTasks,
      completedTasks,
      activeTasks,
      failedTasks,
      newTasks,
    };
  }, [employees]);

  const handleCreateTask = (task) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === Number(task.assignedTo)) {
        return {
          ...employee,
          tasks: [
            ...(employee.tasks || []),
            {
              active: false,
              newTask: true,
              completed: false,
              failed: false,
              taskTitle: task.title,
              taskDescription: task.description,
              taskDate: task.date,
              category: task.category,
            },
          ],
        };
      }

      return employee;
    });

    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    alert("Task created successfully!");
  };

  return (
    <div className="dashboard-page">
      <Header user={user} handleLogout={handleLogout} />

      <main className="dashboard-content">
        <div className="dashboard-welcome">
          <div>
            <p className="dashboard-eyebrow">ADMIN DASHBOARD</p>

            <h1>
              Welcome back,{" "}
              <span>{user?.firstName || "Admin"}</span>
            </h1>

            <p>
              Here's what's happening with your team today.
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

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon total-icon">◈</div>

            <div>
              <span>Total Tasks</span>
              <strong>{statistics.totalTasks}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon active-icon">↗</div>

            <div>
              <span>Active Tasks</span>
              <strong>{statistics.activeTasks}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon completed-icon">✓</div>

            <div>
              <span>Completed</span>
              <strong>{statistics.completedTasks}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon failed-icon">!</div>

            <div>
              <span>Failed</span>
              <strong>{statistics.failedTasks}</strong>
            </div>
          </div>
        </div>

        <div className="dashboard-tabs">
          <button
            className={activeSection === "overview" ? "active" : ""}
            onClick={() => setActiveSection("overview")}
          >
            Overview
          </button>

          <button
            className={activeSection === "create" ? "active" : ""}
            onClick={() => setActiveSection("create")}
          >
            Create Task
          </button>

          <button
            className={activeSection === "tasks" ? "active" : ""}
            onClick={() => setActiveSection("tasks")}
          >
            All Tasks
          </button>
        </div>

        {activeSection === "overview" && (
          <section className="dashboard-section">
            <div className="section-heading">
              <div>
                <span>TEAM</span>
                <h2>Team Overview</h2>
              </div>

              <p>{employees.length} employees</p>
            </div>

            <div className="team-table-wrapper">
              <table className="team-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Total</th>
                    <th>New</th>
                    <th>Active</th>
                    <th>Completed</th>
                    <th>Failed</th>
                  </tr>
                </thead>

                <tbody>
                  {employees.map((employee) => {
                    const tasks = employee.tasks || [];

                    const newTasks = tasks.filter(
                      (task) => task.newTask
                    ).length;

                    const activeTasks = tasks.filter(
                      (task) => task.active
                    ).length;

                    const completedTasks = tasks.filter(
                      (task) => task.completed
                    ).length;

                    const failedTasks = tasks.filter(
                      (task) => task.failed
                    ).length;

                    return (
                      <tr key={employee.id}>
                        <td>
                          <div className="employee-cell">
                            <div className="employee-avatar">
                              {employee.firstName
                                ?.charAt(0)
                                .toUpperCase()}
                            </div>

                            <div>
                              <strong>{employee.firstName}</strong>
                              <span>{employee.email}</span>
                            </div>
                          </div>
                        </td>

                        <td>{tasks.length}</td>

                        <td>
                          <span className="table-badge new">
                            {newTasks}
                          </span>
                        </td>

                        <td>
                          <span className="table-badge active">
                            {activeTasks}
                          </span>
                        </td>

                        <td>
                          <span className="table-badge completed">
                            {completedTasks}
                          </span>
                        </td>

                        <td>
                          <span className="table-badge failed">
                            {failedTasks}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeSection === "create" && (
          <section className="dashboard-section">
            <div className="section-heading">
              <div>
                <span>TASK MANAGEMENT</span>
                <h2>Create New Task</h2>
              </div>
            </div>

            <CreateTask
              employees={employees}
              onCreateTask={handleCreateTask}
            />
          </section>
        )}

        {activeSection === "tasks" && (
          <section className="dashboard-section">
            <div className="section-heading">
              <div>
                <span>TASK MANAGEMENT</span>
                <h2>All Assigned Tasks</h2>
              </div>
            </div>

            <AllTask employees={employees} />
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;