import express from 'express';
import fetchUser from '../middlewares/fetchUser.middleware.js';
import {addNote, fetchAllNotes, deleteNote, fetchNote, updateNote} from '../controllers/notes.controller.js'
const router = express.Router();

router.post('/addnote', fetchUser, addNote)
router.get('/fetchallnotes', fetchUser, fetchAllNotes)
router.delete('/deletenote/:id', fetchUser, deleteNote)
router.get('/fetchnote/:id', fetchUser, fetchNote)
router.put('/updatenote/:id', fetchUser, updateNote)


export default router;