'use client'
import { Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { TextInput } from './shared/Shared'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const Register = () => {
    const registrationSchema: IRegistrationSchema = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const { handleSubmit, register, formState: { errors } } = useForm({ mode: 'onBlur' })
    const [registration, setRegistration] = useState<IRegistrationSchema | any>({ ...registrationSchema })
    const handleChange = (e: any) => {
        setRegistration({ ...registration, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = (e: any) => {
        e.preventDefault()
        console.table(registration && registration)
    }
    return (
        <>
            <h1 className="text-black text-xl font-semibold text-center mb-2">Register</h1>
            <form>
                <div className='text-medium font-semibold space-y-4'>
                    <TextInput
                        label="email"
                        id="email"
                        type="text"
                        registerInput={{ ...register("email", { required: 'Email is required' }) }}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="username"
                        id="username"
                        type="text"
                        registerInput={{ ...register("username", { required: 'Username is required' }) }}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="password"
                        id="password"
                        type="password"
                        registerInput={{ ...register("password", { required: 'Password is required' }) }}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="confirm password"
                        id="confirmPassword"
                        type="password"
                        registerInput={{ ...register("confirmPassword", { required: 'Password is required' }) }}
                        onChange={handleChange}
                    />
                    <div className='flex flex-col'>
                        <button type="submit" className='text-input text-white bg-blue-500 border-none' onClick={handleSubmit(handleOnSubmit)}>Register</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register
