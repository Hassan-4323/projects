import React, { useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLoacalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email,password) => {
    if(email == 'admin@gmail.com' && password == '123'){
      console.log("This is admin");
    }
    else if(email == 'user@gmail.com' && password == '123'){
      console.log('This is user');
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

      {/* < EmployeeDashboard /> */}
      {/* < AdminDashboard /> */}

    </>

  )
}

export default App
