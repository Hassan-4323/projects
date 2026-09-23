import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
    return (
        <div className='bg-[#0e0d0df4] h-screen text-white w-full p-8'>
            < Header />
            < CreateTask />
            < AllTask />

        </div>
    )
}

export default AdminDashboard
