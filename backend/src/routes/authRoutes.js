import express from 'express';
import { signupUser, loginUser } from '../controllers/authController.js';
import validateUser from '../middleware/validateUser.js';

const router = express.Router();

router.post('/signup', validateUser, signupUser);
router.post('/login', loginUser);

export default router;
