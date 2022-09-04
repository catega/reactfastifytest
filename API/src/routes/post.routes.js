const postControllers = require('../controllers/post.controller')

const postRoutes = [
    {
        url: '/p',
        method: 'GET',
        handler: postControllers.getPosts
    },
    {
        url: '/p/:id',
        method: 'GET',
        handler: postControllers.getPost
    },
    {
        url: '/p/u/:id',
        method: 'GET',
        handler: postControllers.getUserPosts
    },
    {
        url: '/p',
        method: 'POST',
        handler: postControllers.savePost
    },
    {
        url: '/p/:id',
        method: 'DELETE',
        handler: postControllers.deletePost
    },
    {
        url: '/p/:id',
        method: 'PUT',
        handler: postControllers.updatePost
    }
]

module.exports = postRoutes