import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
},
    {
        timestamps: true
    }
)

const User = model('user', userSchema);
User.createIndexes();
export default User;