import React from 'react'

const login = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-black text-white'>
      
      <div className='border-2 border-cyan-600 p-20 rounded-xl'>
        
        <form className='flex flex-col justify-center items-center'>

            <input className='border-2 border-cyan-600 outline-none rounded-full bg-transparent py-3 px-4 text-xl placeholder:text-white' type="email" placeholder='Enter your email'/>

            <input className='border-2 border-cyan-600 outline-none rounded-full bg-transparent py-3 px-4 mt-3 text-xl placeholder:text-white' type="password" placeholder='Enter your password'/> 

            <button className='border-none bg-cyan-500 text-white outline-none rounded-full py-3 px-4 text-xl mt-5' >Log in</button>           
        </form>

      </div>
      
    </div>
  )
}

export default login
