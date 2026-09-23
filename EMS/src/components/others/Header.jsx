import React from 'react'

const Header = () => {
    return (
        <div className='flex items-end justify-between'>

            <h1 className='font-medium text-2xl'>Hello <br /> <span className='font-semibold text-3xl'>Hassan 👋</span></h1>

            <button className='bg-red-500 text-lg font-medium text-white px-4 py-2 rounded-sm'>Log Out</button>
        </div>
    )
}

export default Header
