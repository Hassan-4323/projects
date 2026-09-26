import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    // two way binding
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();

        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center bg-black text-white'>

            <div className='border-2 border-cyan-600 p-20 rounded-xl'>

                <form onSubmit={(e) => {

                    submitHandler(e)

                }} className='flex flex-col justify-center items-center'>

                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                        className='border-2 border-cyan-600 outline-none rounded-full bg-transparent py-3 px-4 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email'
                    />

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                        className='border-2 border-cyan-600 outline-none rounded-full bg-transparent py-3 px-4 mt-3 text-xl placeholder:text-gray-400' type="password" placeholder='Enter your password'
                    />

                    <button className='border-none bg-cyan-500 text-white outline-none rounded-full py-3 px-4 text-xl mt-5' >Log in</button>
                </form>

            </div>

        </div>
    )
}

export default Login
