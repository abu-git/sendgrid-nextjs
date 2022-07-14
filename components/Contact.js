import React, { useState } from 'react'

export default function Contact(){
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
        <form className='w-[650px] mt-10 rounded-lg shadow-xl flex flex-col px-8 py-8 dark:bg-blue-500'>
            
            <h1 className='text-2xl font-bold dark:text-gray-50'>Send Message</h1>


            <label htmlFor='fullname' className='text-gray-500 font-light mt-8 dark:text-gray-50'>
                Full name<span className='text-red-500 dark:text-gray-50'>*</span>
            </label>
            <input 
                type='text'
                value={fullname}
                onChange={(e) => { setFullname(e.target.value)}}
                name='fullname'
                className='bg-transparent borber-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500' 
            />

            <label htmlFor='email' className='text-gray-500 font-light mt-4 dark:text-gray-50'>
                Email<span className='text-red-500 dark:text-gray-50'>*</span>
            </label>
        
        </form>
    )
}