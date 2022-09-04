const Comment = require('../models/comment.model')
const User = require('../models/user.model')

const getComments = async (req, rep) => {
    rep.send(await Comment.find())
}

const getComment = async (req, rep) => {
    rep.send(await Comment.findById(req.params.id))
}

const getPostComments = async (req, rep) => {
    const comments = await Comment.find({postId: req.params.id})
    rep.send(await fullComments(comments))
}

const getUserComments = async (req, rep) => {
    const comments = await Comment.find({userId: req.params.id})
    rep.send(await fullComments(comments))
}

const fullComments = async (comments) => {
    let full = []

    for (const comment of comments) {
        const user = await User.findById(comment.userId)
        full.push({
            username: user.username,
            userId: user._id,
            text: comment.text,
            postId: comment.postId,
            _id: comment._id,
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt
        })
    }

    return full
}

const saveComment = async (req, rep) => {
    const newComment = new Comment(req.body)
    await newComment.save()
}

const deleteComment = async (req, rep) => {
    const comment = await Comment.findById(req.params.id)
    await Comment.findByIdAndDelete(req.params.id)
    const comments = await Comment.find({postId: comment.postId})
    rep.send(await fullComments(comments))
}

const updateComment = async (req, rep) => {
    const newComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
    const comments = await Comment.find({postId: newComment.postId})
    rep.send(await fullComments(comments))
}

module.exports = {
    getComment,
    getComments,
    getPostComments,
    getUserComments,
    saveComment,
    deleteComment,
    updateComment
}