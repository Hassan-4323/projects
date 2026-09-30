import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 bg-cyan-700 p-3 rounded-xl'>

      <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 text-sm px-2 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm bg-emerald-900 rounded py-1 px-2'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-4 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>
        {data.taskDescription}
      </p>

      <div className='mt-12'>
        <button className='w-full bg-green-500 rounded font-medium py-2 px-2 text-xs'>Completed</button>
      </div>

    </div>
  )
}

export default CompleteTask
