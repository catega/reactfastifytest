const { Schema, model } = require('mongoose')

const postSchema = new Schema(
    {
        userId: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        description: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Post', postSchema)