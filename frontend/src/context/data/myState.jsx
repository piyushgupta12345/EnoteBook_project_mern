import React, { useState } from 'react'
import MyContext from './myContext';
import { toast } from 'react-hot-toast';
import axios from 'axios';

function MyState(props) {

  const[userData, setUserData] = useState({})

  // get all notes
  const [allNotes, setAllNotes] = useState([])

  // get all notes function
  const getAllNotes = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/notes/fetchallnotes`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      })

      console.log(res);
      
      // destructure msg from res.data
      const { notes } = res.data
      setAllNotes(notes)

    } catch (error) {
      console.log(error);
      console.log("Not get all notes")
    }
  }

  // add note
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  // add note function
  const addNote = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/notes/addnote`, { title, description, tag }, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      })

      console.log(res);

      // call get all notes
      getAllNotes();

      // destruture res.data
      const { msg, err, success } = res.data

      // condition
      if (success) {
        toast.success(msg)
      } else {
        toast.error(msg)
        console.log(err);
      }

      setTitle('')
      setDescription('')
      setTag('')

    } catch (error) {
      console.log("addnote fetch api failed");
      console.log(error)
    }
  }

  // delete note function
  const deleteNote = async (_id) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_BACKEND_API_URL}/api/notes/deletenote/${_id}`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      })

      console.log(res);
      // call get all notes
      getAllNotes();
      const { msg, err, success } = res.data

      // condition
      if (success) {
        toast.success(msg)
      } else {
        toast.error(msg)
        console.log(err);
      }

    } catch (error) {
      console.log("delete note failed");
      console.log(error);
    }
  }


  return (
    <MyContext.Provider value={{userData, setUserData, getAllNotes, allNotes, title, setTitle, description, setDescription, tag, setTag, addNote, deleteNote }} >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState