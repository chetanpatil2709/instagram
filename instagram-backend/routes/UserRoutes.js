import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get('/all', UserController.getAllUsers)
router.get('/:id', UserController.getAllUsers)
router.post('/signup', UserController.signUp) // register
router.post('/signin', UserController.signIn) // login

export default router