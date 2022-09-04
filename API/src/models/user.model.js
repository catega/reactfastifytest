const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        default: "User Avatar"
    },
    userPosts: {
        type: Array,
        default: []
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('User', userSchema)