import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (storedUser) {
      setUser(storedUser);
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogin = (email, password) => {
    const { employees, admin } = authData;

    const adminUser = admin.find(
      (user) => user.email === email && user.password === password
    );

    if (adminUser) {
      const loggedUser = {
        ...adminUser,
        role: "admin",
      };

      setUser(loggedUser);
      setLoggedInUser(loggedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));

      return true;
    }

    const employeeUser = employees.find(
      (employee) =>
        employee.email === email && employee.password === password
    );

    if (employeeUser) {
      const loggedUser = {
        ...employeeUser,
        role: "employee",
      };

      setUser(loggedUser);
      setLoggedInUser(loggedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));

      return true;
    }

    return false;
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  if (user.role === "admin") {
    return (
      <AdminDashboard
        user={user}
        setUser={setUser}
        handleLogout={handleLogout}
      />
    );
  }

  return (
    <EmployeeDashboard
      user={user}
      setUser={setUser}
      handleLogout={handleLogout}
    />
  );
};

export default App;