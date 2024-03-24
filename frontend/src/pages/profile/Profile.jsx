import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import axios from 'axios'

function Profile() {
    const context = useContext(myContext)
    const { allNotes } = context

    const [user, setUser] = useState('')

    // profile data function
    const userData = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/getuser`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            })

            console.log(res);
            // destrucute user data from resData
            const { user } = res.data;

            // set Data
            setUser(user)
        } catch (error) {
            console.log("Not get user")
            console.log(error);
        }
    }

    useEffect(() => {
        userData()
    }, [])

    return (
        <Layout>
            <div className="  mt-32 lg:mt-20 lg:mx-[30em]">
                <div className="flex items-center justify-center  mb-2">
                    <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="img" />
                </div>
                <h1 className='text-center font-semibold'>{user.name}</h1>
                <h1 className='text-center font-semibold'>{user.email}</h1>
                <h1 className='text-center font-semibold'>Total Notes Created : {allNotes.length}</h1>
            </div>
        </Layout>
    )
}

export default Profile