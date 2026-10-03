import React, { useContext, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLoacalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data);
      }
  },[]);

  const handleLogin = (email, password) => {

    if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin' );
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    }
    else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
      }
    }
    else {
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser = {setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser = {setUser} data={loggedInUserData} /> : null)}

      {/* < EmployeeDashboard /> */}
      {/* < AdminDashboard /> */}
    </>
  )
}

export default App
