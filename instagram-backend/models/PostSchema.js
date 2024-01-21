import { Schema, model } from 'mongoose'

const PostSchema = new Schema({
    username: {
        type: String
    },
    imageUrl: {
        type: String
    },
    caption: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Post = model('post', PostSchema)
export default Post