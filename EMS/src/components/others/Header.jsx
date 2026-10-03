import React from "react";

const Header = ({ user, handleLogout }) => {
  const name = user?.firstName || "Admin";
  const role = user?.role === "admin" ? "Administrator" : "Employee";

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <div className="header-logo">
          EMS
        </div>

        <div className="header-title">
          <h2>Employee Management</h2>
          <p>Manage your workspace efficiently</p>
        </div>
      </div>

      <div className="header-right">
        <div className="header-user">
          <div className="header-avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <div className="header-user-info">
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-button">
          <span>↪</span>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;