const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        trim: true
    },
    important: {
        type: Boolean,
        required: true,
        default: false
    },
    like: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Post = mongoose.model('posts', postSchema)

module.exports = Post