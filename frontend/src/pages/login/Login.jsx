import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // navigate
    const navigate = useNavigate()

    // User Login
    const loginHandler = async () => {
        const res = await fetch(`/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })

        const resData = await res.json();

        // destructure msg from resData
        const { msg, err, token } = resData

        // condition
        if (msg == 'User Login successfully !!') {
            toast.success(msg)
            localStorage.setItem('token', token)
            navigate('/')
        } else if (msg == "Your password not match !!") {
            toast.error(msg)
        } else if (msg == "User not found !!") {
            toast.error(msg)

        } else if (msg == "Please enter the valid email !!") {
            toast.error(msg)
        } else if (msg == "All feilds is required !!") {
            toast.error(msg)
        } else if (err) {
            toast.error(msg)
            console.log(err)
        }

        setEmail('')
        setPassword('')
    }


    return (
        <div className=' flex justify-center items-center h-screen'>

            {/* main div  */}
            <div className=' bg-[#d2cbbf] shadow-md px-10 py-10 rounded-xl '>

                {/* Top Heading  */}
                <div className="">
                    <h1 className='text-center text-black text-xl mb-4 font-bold'>Login</h1>
                </div>

                {/* Input 1 Email  */}
                <div>
                    <input
                        type="email"
                        name='email'
                        className=' bg-[#beb9b1] border border-green-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Input 2 Password  */}
                <div>
                    <input
                        type="password"
                        className='bg-[#beb9b1] border border-green-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Button For Login  */}
                <div className=' flex justify-center mb-3 flex-col gap-3'>
                    <button
                        className=' bg-green-700 w-full text-white font-bold  px-2 py-2 rounded-lg'
                        onClick={loginHandler}>
                        Login
                    </button>
                    <Link to={'/forgetpassword'}>
                        <button
                            className=' bg-green-700 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Forget Password
                        </button>
                    </Link>
                </div>

                {/* Link for Signup  */}
                <div>
                    <h2 className='text-black'>Don't have an account <Link className=' text-red-700 font-bold' to={'/register'}>Register</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login