import React, { useState } from "react";

const CreateTask = ({ employees = [], onCreateTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    assignedTo: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.category ||
      !formData.assignedTo
    ) {
      setError("Please complete all fields before creating the task.");
      return;
    }

    onCreateTask(formData);

    setFormData({
      title: "",
      description: "",
      date: "",
      category: "",
      assignedTo: "",
    });

    setError("");
  };

  return (
    <div className="create-task-card">
      <div className="create-task-intro">
        <div className="create-task-icon">+</div>

        <div>
          <h3>Assign a new task</h3>
          <p>
            Create a task and assign it directly to a member
            of your team.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="create-task-form">
        <div className="form-grid">
          <div className="form-field">
            <label>Task Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Complete monthly report"
            />
          </div>

          <div className="form-field">
            <label>Category</label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g. Reporting"
            />
          </div>

          <div className="form-field">
            <label>Deadline</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Assign To</label>

            <select
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
            >
              <option value="">Select employee</option>

              {employees.map((employee) => (
                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.firstName} — {employee.email}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label>Task Description</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe what needs to be completed..."
            rows="5"
          ></textarea>
        </div>

        {error && (
          <div className="form-error">
            <span>!</span>
            {error}
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="create-task-button">
            Create Task
            <span>→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;