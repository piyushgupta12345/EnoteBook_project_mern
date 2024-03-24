import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios'

function UpdateNote() {

    // updatenote state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');

    // Get Id From useParams
    const {id} = useParams()

    // navigate
    const navigate = useNavigate()

    const getNotesById = async() => {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/notes/fetchnote/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })

        console.log(res)
        const { notes } = res.data

        setTitle(notes.title)
        setDescription(notes.description)
        setTag(notes.tag)
    }

    useEffect(() => {
        getNotesById()
    }, [id])

    // update note function
    const updateNote = async () => {
        try {
            const res = await axios.put(`${import.meta.env.VITE_BACKEND_API_URL}/api/notes/updatenote/${id}`, { title, description, tag }, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            })

            console.log(res);

            const { msg, err, success } = res.data

            // condition
            if (success) {
                toast.success(msg)
                navigate('/')
            } else {
                toast.error(msg)
                console.log(err);
            }
        } catch (error) {
            console.log("updatenote fetch api failed");
            console.log(error)
        }
    }

    return (
        <Layout>
            <div className=' lg:mx-[6em] mt-16 lg:mt-0 flex justify-center items-center h-screen'>
                <div className=' bg-[#d2cbbf] lg:w-[60em] lg:h-[35em]  rounded-xl p-10   '>
                    <div className="">

                        {/* Top Heading  */}
                        <div className=" mb-5">
                            <h1 className='text-center text-black text-xl  font-bold'>
                                Update Note
                            </h1>
                        </div>

                        {/* Input 1  */}
                        <div>
                            <input type="text"
                                name='title'
                                className='inputShadow
                                 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Title'
                                value={title}
                                onChange={(e)=> setTitle(e.target.value)}
                            />
                        </div>

                        {/* Input 2  */}
                        <div>
                            <input type="text"
                                name='tag'
                                className='inputShadow
                                  mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Tag'
                                value={tag}
                                onChange={(e)=> setTag(e.target.value)}
                            />
                        </div>

                        {/* TextArea 3  */}
                        <div>
                            <textarea
                                name="" id="" cols="30" rows="10" className='inputShadow
                                  mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Description'
                                value={description}
                                onChange={(e)=> setDescription(e.target.value)}>
                            </textarea>
                        </div>

                        {/* Button  */}
                        <div className=' flex justify-center mb-3'>
                            <button onClick={updateNote}
                                className=' bg-[#000000] w-full text-white font-bold  px-2 
                                py-2.5 rounded-md'>
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UpdateNote