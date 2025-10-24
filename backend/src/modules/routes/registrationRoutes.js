import express from 'express';
import { register } from '../controller/registerController.js';
import { validateRegister } from '../middleware/registerMiddleware.js';
import { login } from '../controller/loginController.js';
import { ValidateLogin } from '../middleware/loginMiddleware.js';

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', ValidateLogin, login);

export default router;