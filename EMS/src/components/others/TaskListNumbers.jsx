import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
        <div className='flex screen mt-7 justify-between gap-5'>

            <div className='rounded-xl py-4 px-7 w-[45%] bg-red-300'>

                <h2 className='text-3xl font-semibold'>{data.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>

            </div>

            <div className='rounded-xl py-4 px-7 w-[45%] bg-cyan-300'>

                <h2 className='text-3xl font-semibold'>{data.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>

            </div>

            <div className='rounded-xl py-4 px-7 w-[45%] bg-amber-600'>

                <h2 className='text-3xl font-semibold'>{data.active}</h2>
                <h3 className='text-xl font-medium'>Active Task</h3>

            </div>

            <div className='rounded-xl py-4 px-7 w-[45%] bg-blue-400'>

                <h2 className='text-3xl font-semibold'>{data.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>

            </div>

        </div>
    )
}

export default TaskListNumbers
