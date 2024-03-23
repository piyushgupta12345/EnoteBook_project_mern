import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    // User Registration
    const registerHandler = async () => {
        const res = await fetch(`/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        })
        const resData = await res.json()

        // destructure msg from resData
        const { msg, err, token } = resData
        
        // condition
        if (msg == 'User registration successfully !!') {
            toast.success(msg)
            localStorage.setItem('token', token)
            navigate('/')
        } else if (msg == "User already exist !!") {
            toast.error(msg)
        } else if (msg == "Please enter the valid email !!") {
            toast.error(msg)
        } else if (msg == "All feilds is required !!") {
            toast.error(msg)
        } else if (err) {
            toast.error(msg)
            console.log(err)
        }
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className=' flex justify-center items-center h-screen'>

            {/* main div  */}
            <div className=' bg-[#d2cbbf] shadow-md px-10 py-10 rounded-xl '>

                {/* Top Heading  */}
                <div className="">
                    <h1 className='text-center text-black text-xl mb-4 font-bold'>Register</h1>
                </div>

                {/* Input 1 Name  */}
                <div>
                    <input
                        type="text"
                        name='name'
                        className=' bg-[#beb9b1] border border-red-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Input 2 Email  */}
                <div>
                    <input
                        type="email"
                        name='email'
                        className=' bg-[#beb9b1] border border-red-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Input 3 Password  */}
                <div>
                    <input
                        type="password"
                        className='bg-[#beb9b1] border border-red-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Button For Signup  */}
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-red-700 w-full text-white font-bold  px-2 py-2 rounded-lg'
                        onClick={registerHandler}>
                        Register
                    </button>
                </div>

                {/* Link For Login  */}
                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-green-700 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Register