import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    bio: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = model('user', UserSchema)
export default User