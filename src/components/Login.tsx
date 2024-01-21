import React, { useState } from 'react'
import { TextInput } from './shared/Shared'
import Link from 'next/link'

const Login = () => {
    const credentialSchema: ICredentialSchema = {
        username: "",
        password: "",
    }
    const [credential, setCredential] = useState<ICredentialSchema | any>({ ...credentialSchema })
    const handleChange = (e: any) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.table(credential && credential)
    }
    return (
        <>
            <h1 className="text-black text-xl font-semibold text-center">Login</h1>
            <div className='text-medium font-semibold space-y-4'>
                <TextInput
                    label="email"
                    id="text"
                    type="text"
                    onChange={handleChange}
                />
                <TextInput
                    label="password"
                    id="password"
                    type="text"
                    onChange={handleChange}
                />
                <div className='flex flex-col'>
                    <button type="submit" className='text-input text-white bg-blue-500 border-none'>Log in</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <p className='text-sm cursor-pointer hover:underline'>forget password?</p>
            </div>
        </>
    )
}

export default Login
