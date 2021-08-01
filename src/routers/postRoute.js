const Post = require('../models/post')
const express = require('express')
const router = express.Router()

router.get('/posts', async (req, res) => {
    try {
        const posts = Post.find()
         if(posts.length === 0) { 
            throw new Error('Something went wrong!')
        }
        return res.status(200).send(posts)
    } catch (e) {
        return res.status(400).send(e.message)
    }
})

router.post('/create/post', async (req, res) => {
    const post = new Post(...req.body)
    return res.status(201).send(post)
})

module.exports = router