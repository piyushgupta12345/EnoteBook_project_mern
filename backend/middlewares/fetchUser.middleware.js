import jwt from "jsonwebtoken";
import 'dotenv/config.js';

const fetchUser = async (req, res, next) => {

    try {
        const token = req.header('auth-token');

        // validation
        if (!token) {
            return res.status(500).json(
                {
                    success: false,
                    msg: "Not found token !!"
                }
            )
        }

        const { user } = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = user

        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "Please Enter the valid token !!"
            }
        )
    }
}

export default fetchUser;