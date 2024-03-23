import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

function NotesCard() {

    const context = useContext(myContext);
    const { allNotes, getAllNotes, deleteNote } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAllNotes()
        }
    }, [])

    return (
        <div>
            <section className=" body-font max-[768px]:mt-[50px] ">
                <div className="container px-5 py-5 mx-auto ">
                    <h2 className=' text-center font-bold underline text-3xl mb-8'>All Notes</h2>
                    <div className="flex flex-wrap justify-center">
                        <>
                            {allNotes.length > 0 ? allNotes.map((item, index) => {
                                const { title, description, tag, _id } = item;
                                return (
                                    <div key={index} className="mb-3 w-full ">
                                        <div className="h-full w-full border-opacity-60 rounded-xl overflow-hidden shadow-md border bg-[#f9f9f964]">
                                            <div className="p-6">
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {title}
                                                </h1>
                                                <p className="leading-relaxed mb-3 text-black text-justify">
                                                    {description}
                                                </p>
                                                <div className="flex items-center  justify-between ">
                                                    <div className=" bg-gray-200 px-5  rounded-xl inline-flex items-center md:mb-2 lg:mb-0">
                                                        {tag}
                                                    </div>
                                                    <div className=" flex items-center space-x-2">
                                                        {/* Edit icon */}
                                                        <Link to={`/updatenote/${_id}`}>
                                                            <div className="edit">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                        {/* Delete Icon  */}
                                                        <div className="del" onClick={() => { deleteNote(item._id) }}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <h1 className=' mb-2 text-xl font-bold'>Notes Not Found</h1>}
                        </>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotesCard