import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    setLocalStorage();

    const data = getLocalStorage();

    setEmployees(data.employees);
    setAdmin(data.admin);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        employees,
        setEmployees,
        admin,
        setAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;