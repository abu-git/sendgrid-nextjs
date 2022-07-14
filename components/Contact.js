import React, { useState } from 'react'

export default function Contact(){
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
        <form
            className='rounded-lg shadow-xl flex flex-col px-8 py-8 dark:bg-blue-500'
        >
            <h1 className='text-2xl font-bold dark:text-gray-50'>Send Message</h1>
            <label htmlFor='fullname' className='text-gray-500 light mt-8 dark:text-gray-50'>
                Full name<span className='text-red-500 dark:text-gray-50'>*</span>
            </label>
        
        </form>
    )
}