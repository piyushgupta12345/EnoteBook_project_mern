import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SideBar() {

    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear('token')
        navigate('/authenticate')
    }

    return (
        <div className='  bg-gradient-to-t from-gray-500 to-[#F6E0BE] h-screen border-r '>

            {/* Top Image  */}
            <div className="flex justify-center">
                <img className=' w-52 mt-10' src="img/logo.png" alt="" />
            </div>

            {/* Ul  */}
            <ul className='flex justify-end mt-20 '>

                {/* main div  */}
                <div className="">

                    {/* Home Page Link  */}
                    <Link to={'/'}>
                        <li className='flex space-x-2 transition-all items-center  h-16 hover:bg-white w-52 p-2 rounded-l-xl '>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </span>
                            <span className=' font-semibold text-xl'>Home</span>
                        </li>
                    </Link>

                    {/* Add Note Link  */}
                    <Link to={'/addnote'}>
                        <li className='flex space-x-2 transition-all  items-center  h-16 hover:bg-white w-52 p-2 rounded-l-xl '>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span className=' font-semibold text-xl'>Add Note</span>
                        </li>
                    </Link>

                    {/* Profile Page Link  */}
                    <Link to={'/profile'}>
                        <li className='flex space-x-2 transition-all  items-center  h-16 hover:bg-white w-52 p-2 rounded-l-xl '>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <span className=' font-semibold text-xl'>Profile</span>
                        </li>
                    </Link>

                    {/* Logout  */}
                    <li className='flex space-x-2  transition-all items-center  h-16 hover:bg-white w-52 p-2 rounded-l-xl cursor-pointer '>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </span>
                        <span className=' font-semibold text-xl' onClick={logout}>Logout</span>
                    </li>
                </div>

            </ul>

        </div>
    )
}

export default SideBar