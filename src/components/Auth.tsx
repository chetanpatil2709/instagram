"use client";
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Link from 'next/link'

const Auth = () => {
    const [loginOrRegister, setLoginOrRegister] = useState<boolean>(true)
    return (
        <>
            <div id='login-wrap' className='w-full h-[100vh] flex bg-white'>
                <div id='login-container' className='m-auto bg-transparent py-7 px-5  border-gray-200 rounded-md space-y-4 bg-white'>
                    <div className='flex justify-center'>
                        <Link href="/" className="text-4xl font-medium text-center text-pink-700" style={{ fontFamily: "cursive" }}>Instagram</Link>
                    </div>
                    <div>
                        {loginOrRegister ? <Login /> : <Register />}
                    </div>
                    {loginOrRegister ?
                        <div className='flex justify-center'>
                            <p className='text-sm'>Don't have an account?
                                <span className='text-blue-600 cursor-pointer hover:underline'
                                    onClick={() => setLoginOrRegister(!loginOrRegister)}
                                >Register</span></p>
                        </div>
                        : <div className='flex justify-center'>
                            <p className='text-sm'>Already an account?
                                <span className='text-blue-600 cursor-pointer hover:underline'
                                    onClick={() => setLoginOrRegister(!loginOrRegister)}
                                >Log in</span></p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Auth
