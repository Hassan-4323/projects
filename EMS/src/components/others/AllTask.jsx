import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext);
    console.log(authData);

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5'>SEmployee Name</h2>
                    <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                    <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                    <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                    <h5 className='text-lg font-medium w-1/5'>Failed</h5>
                </div>
            
            <div className=''>
                {authData.employees.map(function (elem,idx) {

                return
                <div key={idx} className='bg-emerald--500 py-2 px-4 mb-2 flex justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-white'>{elem.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.failed}</h5>
                </div>
            })}
            </div>

        </div>
    )
}

export default AllTask
