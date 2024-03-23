import express from 'express';
import { register, login, getUser, forgetPassword } from '../controllers/auth.controller.js';
import fetchUser from "../middlewares/fetchUser.middleware.js"
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getuser', fetchUser, getUser);
router.post('/forgetpassword', forgetPassword);

export default router;