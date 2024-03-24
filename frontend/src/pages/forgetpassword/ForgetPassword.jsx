import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

function ForgetPassword() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // navigate
    const navigate = useNavigate()

    // User Forget Password
    const forgetPasswordHandler = async () => {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/forgetpassword`, { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        console.log(res);
        // destructure msg from resData
        const { msg, err, success } = res.data

        // condition
        if (success) {
            toast.success(msg)
            navigate('/login')
        } else {
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
                    <h1 className='text-center text-black text-xl mb-4 font-bold'>Forget Password</h1>
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
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-green-700 w-full text-white font-bold  px-2 py-2 rounded-lg'
                        onClick={forgetPasswordHandler}>
                        Forget Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword