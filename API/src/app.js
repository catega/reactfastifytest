const fastify = require('fastify')({
    logger: true
})
fastify.register(require('@fastify/cors'),{
    origin: 'http://localhost:5173'
})

const postRoutes = require('./routes/post.routes')
const userRoutes = require('./routes/user.routes')
const commentRoutes = require('./routes/comment.routes')

require('./db/db')

userRoutes.forEach(route => {
    fastify.route(route)
})
postRoutes.forEach(route => {
    fastify.route(route)
})
commentRoutes.forEach(route => {
    fastify.route(route)
})

const start = async () => {
    try{
        await fastify.listen({
            port: process.env.port || 3000
        })
    }catch (e){
        console.log(`[!] Connection error: ${e}`)
    }
}

start()