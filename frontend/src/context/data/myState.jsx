import React, { useState } from 'react'
import MyContext from './myContext';
import { toast } from 'react-hot-toast';

function MyState(props) {

  // get all notes
  // const [loading, setLoading] = useState(false);
  const [allNotes, setAllNotes] = useState([])

  // get all notes function
  const getAllNotes = async () => {
    try {
      // setLoading(true)
      const res = await fetch(`/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      })

      const resData = await res.json();
      const { notes } = resData
      setAllNotes(notes)
      // setLoading(false)
    } catch (error) {
      console.log(error);
      console.log("Not get all notes")
      // setLoading(false)
    }
  }

  // add note
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  // add note function
  const addNote = async () => {
    try {
      const res = await fetch(`/api/notes/addnote`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      })

      const resData = await res.json()
      console.log(resData);

      getAllNotes();
      const { msg, err } = resData

      // condition
      if (msg == "All feilds are required !!") {
        toast.success(msg)
      } else if (msg == "Note add successfully !!") {
        toast.success(msg)
      } else if (msg == "Add note process failed !!") {
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
      const res = await fetch(`/api/notes/deletenote/${_id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      })

      const resData = await res.json();

      // call get all notes
      getAllNotes();
      const { msg, err } = resData

      // condition
      if (msg == "delete note process falied !!") {
        toast.error(msg)
        console.log(err);
      } else if (msg == "Note not found !!") {
        toast.error(msg)
      } else if (msg == "Note delete successfully !!") {
        toast.success(msg)
      }

    } catch (error) {
      console.log("delete note failed");
      console.log(error);
    }
  }


  return (
    <MyContext.Provider value={{ getAllNotes, allNotes, title, setTitle, description, setDescription, tag, setTag, addNote, deleteNote }} >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState