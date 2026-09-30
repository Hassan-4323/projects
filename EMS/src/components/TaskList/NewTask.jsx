import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='shrink-0 h-full w-75 bg-blue-500 p-3 rounded-xl'>

            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-2 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm bg-emerald-900 rounded py-1 px-2'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-4 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>

            <div className='mt-5'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 tex-xs'>Accept Task</button>
            </div>

        </div>
    )
}

export default NewTask
