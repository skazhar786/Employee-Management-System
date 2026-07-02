import React, { useState } from 'react'

const Login = ({ handleLogin }) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }


    return (
        <>
            <div className='flex flex-col h-screen w-screen items-center justify-center '>
                <div className='border-2 rounded-2xl border-emerald-600 p-20'>
                    <form
                        onSubmit={(e) => submithandler(e)}
                        className='flex flex-col items-center justify-center'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required className='outline-none py-3 px-5 bg-transparent mt-3 border-2 rounded-full text-xl border-emerald-600' type="email" placeholder='Enter your email' />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required type="password" className='outline-none py-3 px-5 mt-4 bg-transparent border-2 rounded-full text-xl border-emerald-600' placeholder='Enter your password' />
                        <button className='outline-none py-3 px-20 rounded-full w-full hover:bg-emerald-400 text-xl mt-7 bg-emerald-600'>Login</button>
                    </form>

                </div>
                <div className='mt-5'>
                    <h1 >To Login as Admin use = email: admin@me.com and pass: 123</h1>
                    <h1>To Login as employee use = email: e@e.com and pass: 123</h1>

                </div>
            </div>

        </>


    )
}

export default Login
