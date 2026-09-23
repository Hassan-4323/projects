import React from 'react'

const TaskListNumbers = () => {
    return (
        <div className='flex screen mt-7 justify-between gap-5'>

            <div className='rounded-xl py-4 px-7 w-[45%] bg-red-300'>

                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>

            </div>

            <div className='rounded-xl py-4 px-7 w-[45%] bg-cyan-300'>

                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>

            </div>

            <div className='rounded-xl py-4 px-7 w-[45%] bg-amber-600'>

                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>

            </div>

            <div className='rounded-xl py-4 px-7 w-[45%] bg-blue-400'>

                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>

            </div>

        </div>
    )
}

export default TaskListNumbers
