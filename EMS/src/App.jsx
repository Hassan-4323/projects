import React, { useContext, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLoacalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  const handleLogin = (email,password) => {

    if(email == 'admin@gmail.com' && password == '123'){
      setUser('admin');
    }
    else if(email == 'user@gmail.com' && password == '123'){
      setUser('employee');
    }
    else{
      alert("Invalid Credentials");
    }
  }

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLoacalStorage()
  // },)

  return (

    <>

      {!user ? < Login handleLogin = {handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}

      {/* < EmployeeDashboard /> */}
      {/* < AdminDashboard /> */}

    </>

  )
}

export default App
