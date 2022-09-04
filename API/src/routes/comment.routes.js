const commentController = require('../controllers/comment.controller')

const commentRoutes = [
    {
        url: '/c',
        method: 'GET',
        handler: commentController.getComments
    },
    {
        url: '/c/:id',
        method: 'GET',
        handler: commentController.getComment
    },
    {
        url: '/c',
        method: 'POST',
        handler: commentController.saveComment
    },
    {
        url: '/c/p/:id',
        method: 'GET',
        handler: commentController.getPostComments
    },
    {
        url: '/c/u/:id',
        method: 'GET',
        handler: commentController.getUserComments
    },
    {
        url: '/c/:id',
        method: 'DELETE',
        handler: commentController.deleteComment
    },
    {
        url: '/c/:id',
        method: 'PUT',
        handler: commentController.updateComment
    }
]

module.exports = commentRoutes