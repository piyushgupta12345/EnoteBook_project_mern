import Notes from "../models/notes.model.js"

const addNote = async (req, res) => {
    try {
        // data fetch from request ki body
        const { title, description, tag } = req.body;

        // validation
        if (!title || !description || !tag) {
            return res.status(500).json(
                {
                    success: false,
                    msg: "All feilds are required !!",
                }
            )
        }

        // note add
        const note = await Notes.create({ title, description, tag, user: req.userId })

        res.status(201).json(
            {
                success: true,
                msg: "Note add successfully !!",
                note: note
            }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "Add note process failed !!",
                err:error
            }
        )
    }
}

const deleteNote = async (req, res) => {
    try {
        // fetch id 
        const {id} = req.params;

        // find user by id 
        const findNote = await Notes.findById(id)
        if(!findNote){
            res.status(500).json(
                {
                    success: false,
                    msg: "Note not found !!",
                }
            )
        }

        // delete note
        const note = await Notes.findByIdAndDelete(id)
        res.status(201).json(
            {
                success: true,
                msg: "Note delete successfully !!",
                note: note
            }
        )
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "delete note process falied !!",
                err:error
            }
        )
    }
}

const fetchAllNotes = async (req, res) => {
    try {
        const notes = await Notes.find({ user:req.userId })

        res.status(201).json(
            {
                success: true,
                msg: "Fetch all notes !!",
                notes: notes,
            }
        )
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "Fetch all notes falied !!"
            }
        )
    }
}

const fetchNote = async (req, res) => {
    try {
        // fetch id
        const { id } = req.params;
        const notes = await Notes.findById({_id: id})
        res.status(201).json(
            {
                success: true,
                msg: "Fetch singal notes !!",
                notes: notes,
            }
        )
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "Fetch singal notes falied !!"
            }
        )
    }
}

const updateNote = async (req, res) => {
    try {
        // data fetch from request ki body
        const { title, description, tag } = req.body;

        // fetch id 
        const {id} = req.params;

        const findNote = await Notes.findById(id)
        if(!findNote){
            res.status(500).json(
                {
                    success: false,
                    msg: "Note not found !!",
                }
            )
        }

        const note = await Notes.findByIdAndUpdate({_id : id}, {
            $set : {
                title,
                description,
                tag
            }
        }, {new : true})
        res.status(201).json(
            {
                success: true,
                msg: "Note update successfully !!",
                note: note
            }
        )
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "update note process falied !!"
            }
        )
    }
}


export { fetchAllNotes, addNote, deleteNote, fetchNote, updateNote };