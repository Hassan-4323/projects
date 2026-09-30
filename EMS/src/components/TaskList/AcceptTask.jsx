import React from 'react'

const AcceptTask = () => {
  return (
    <div className='shrink-0 h-full w-75 bg-amber-900 p-3 rounded-xl'>

      <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 text-sm px-2 py-1 rounded'>High</h3>
        <h4 className='text-sm bg-emerald-900 rounded py-1 px-2'>20 feb 2024</h4>
      </div>

      <h2 className='mt-4 text-2xl font-semibold'>Make UI for portfolio</h2>
      <p className='text-sm mt-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dicta eos nesciunt et at ullam necessitatibus.
      </p>

      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark As Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark As Failed</button>
      </div>

    </div>
  )
}

export default AcceptTask
