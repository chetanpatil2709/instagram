import React, { useState } from 'react'
import { TextInput } from './shared/Shared'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const Login = () => {
    const credentialSchema: ICredentialSchema = {
        username: "",
        password: "",
    }
    const { handleSubmit, register, formState: { errors } } = useForm({ mode: "onBlur" });
    const [credential, setCredential] = useState<ICredentialSchema | any>({ ...credentialSchema })
    const handleChange = (e: any) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = (e: any) => {
        e.preventDefault()
        console.table(credential && credential)
    }
    return (
        <>
            <h1 className="text-black text-xl font-semibold text-center mb-2">Login</h1>
            <div className='text-medium font-semibold space-y-4'>
                <TextInput
                    label="email or username"
                    id="text"
                    type="text"
                    registerInput={{ ...register("username", { required: 'Email or Username is required' }) }}
                    onChange={handleChange}
                />
                <TextInput
                    label="password"
                    id="password"
                    type="text"
                    registerInput={{ ...register("password", { required: 'Password is required' }) }}
                    onChange={handleChange}
                />
                <div className='flex flex-col'>
                    <button type="submit" className='text-input text-white bg-blue-500 border-none'
                        onClick={handleSubmit(handleOnSubmit)}>Log in</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <p className='text-sm cursor-pointer hover:underline mt-2 hover:text-blue-600'>forget password?</p>
            </div>
        </>
    )
}

export default Login
