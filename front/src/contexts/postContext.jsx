import { createContext, useState, useEffect, useContext } from "react";
import { MainContext } from "./mainContext";
import axios from 'axios'

export const PostContext = createContext()

export const PostContextProvider = (props) => {
    const { userId } = useContext(MainContext)
    const [posts, setPosts] = useState(null)
    const [comments, setComments] = useState(null)

    const getPosts = async () => {
        const p = await axios.get('http://localhost:3000/p')
        setPosts(p.data)
    }

    const createPost = async (title, description) => {
        const newPost = {
            userId,
            title,
            description
        }

        const p = await axios.post('http://localhost:3000/p', newPost)
        setPosts(p.data)
    }

    const deletePost = async (id) => {
        const p = await axios.delete(`http://localhost:3000/p/${id}`)
        setPosts(p.data)
    }

    const getComments = async (postId) => {
        const coms = await axios.get(`http://localhost:3000/c/p/${postId}`)
        setComments(coms.data)
    }

    const createComment = async (text, postId) => {
        const newComment = {
            text,
            userId,
            postId
        }

        await axios.post(`http://localhost:3000/c`, newComment)
        await getComments(postId)
    }

    const deleteComment = async (commentId) => {
        const coms = await axios.delete(`http://localhost:3000/c/${commentId}`)
        setComments(coms.data)
    }

    const updateComment = async (text, commentId, comment) => {
        comment.text = text
        delete comment.username
        const coms = await axios.put(`http://localhost:3000/c/${commentId}`, comment)
        setComments(coms.data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <PostContext.Provider value={
            { 
                posts, createPost, deletePost,
                comments, getComments, createComment, deleteComment, updateComment }
        }>
            {props.children}
        </PostContext.Provider>
    )
}