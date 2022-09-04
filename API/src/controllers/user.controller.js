const User = require('../models/user.model')
const Post = require('../models/post.model')
const postControllers = require('./post.controller')

const getUsers = async (req, rep) => {
    rep.send(await User.find())
}

const getUser = async (req, rep) => {
    try {
        const newUser = await User.findById(req.params.id)
        const userPosts = await Post.find({userId: req.params.id})
        newUser.userPosts = userPosts
        rep.send(newUser)
    } catch (err) {
        rep.code(404).send('User not found')
    }
}

const saveUser = async (req, rep) => {
    const newUser = new User(req.body)
    await newUser.save()

    rep.send(newUser)
}

const deleteUser = async (req, rep) => {
    await User.findByIdAndDelete(req.params.id)
    rep.code(201).send('User deleted')
}

const updateUser = async (req, rep) => {
    const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    rep.send(newUser)
}

module.exports = {
    getUser,
    getUsers,
    saveUser,
    deleteUser,
    updateUser
}