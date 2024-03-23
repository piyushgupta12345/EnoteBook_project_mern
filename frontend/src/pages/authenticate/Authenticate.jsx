import React from 'react'
import { Link } from 'react-router-dom'

function Authenticate() {
    return (
        <div className='flex justify-center items-center w-full h-screen gap-[20px]'>
            <button className='bg-[#37cae2] text-white py-3 px-8 text-2xl border-none rounded-[30px]'>
                <Link to={'/register'}>Register</Link>
            </button>
            <button className='bg-[#37cae2] text-white py-3 px-8 text-2xl border-none rounded-[30px]'>
                <Link to={'/login'}>Login</Link>
            </button>
        </div>
    )
}

export default Authenticate
