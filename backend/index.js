import express from 'express';
import connectToDb from './database/db.js';
import 'dotenv/config';
import authRoute from './routes/auth.route.js';
import notesRoute from './routes/notes.route.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 7000;

app.use(cors())

// database call
connectToDb();

// middleware
app.use(express.json())

// define routes and mounting
app.use('/api/auth', authRoute)
app.use('/api/notes', notesRoute)


app.get('/',(req, res)=>{
res.send('Welcome to EnoteBook Project Api')
})

// port listening
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})