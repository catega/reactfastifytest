const Post = require('../models/post.model')

const getPosts = async (req, res) => {
    res.send(await Post.find())
}

const getPost = async (req, res) => {
    try {
        res.send(await Post.findById(req.params.id))   
    } catch (err) {
        res.code(404).send('Post not found')
    }
}

const getUserPosts = async (req, res) => {
    res.send(await Post.find({userId: req.params.id}))
}

const savePost = async (req, res) => {
    const newPost = new Post(req.body)
    await newPost.save()

    res.send(await Post.find())
}

const deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.send(await Post.find())
}

const updatePost = async (req, res) => {
    const newProduct = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(newProduct)
}

module.exports = {
    getPosts,
    getPost,
    getUserPosts,
    savePost,
    deletePost,
    updatePost
}