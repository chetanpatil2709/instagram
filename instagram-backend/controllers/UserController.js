import { compare, genSalt, hash } from "bcrypt"
import User from "../models/UserSchema.js"
import jwt from 'jsonwebtoken'

class UserController {
    static getAllUsers = async (req, res) => {
        try {
            const users = await User.find()
            res.send(users)
        } catch (error) {
            console.log(error)
        }
    }
    static signUp = async (req, res) => {
        const { email, username, password, confirmPassword } = req.body;
        const emailExist = await User.find({ email: email })
        const salt = await genSalt(10)
        const hashPassword = await hash(password, salt)
        if (emailExist.length > 0) {
            res.send({ 'status': 'failed', 'message': 'Email is already exist' })
        } else {
            if (password !== confirmPassword) {
                res.send({ 'status': 'failed', 'message': 'Password and confirm password does not match' })
            } else {
                const user = new User({
                    email, username, password: hashPassword
                })
                user.save()
                    .then((result) => {
                        return res.send({ 'status': 'success', 'message': 'Registration success' })
                    })
                    .catch(error => {
                        console.log(error)
                        res.send({ 'status': 'failed', 'message': 'Something went wrong....' })
                    })
            }
        }
    }
    static signIn = async (req, res) => {
        const { username, password } = req.body;
        let user;
        if (username.includes('.com')) {
            user = await User.find({ email: username })
        } else {
            user = await User.find({ username: username })
        }
        if (user.length > 0) {
            const comparePassword = await compare(password, user[0].password)
            if (comparePassword) {
                const token = jwt.sign({ userId: user[0]._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5D' })
                res.send({ 'status': 'success', 'message': 'Login successfull', 'token': token })
            } else {
                res.send({ 'status': 'failed', 'message': 'Email or password does not match' })
            }
        } else {
            res.send({ 'status': 'failed', 'message': 'Username or Email does not exist' })
        }
    }
}

export default UserController