import { useState, useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { CommentList } from "../components/Comment/CommentList"
import { CommentForm } from "../components/Comment/CommentForm"
import { PostContext } from "../contexts/postContext"

const SinglePost = () => {
    const [post, setPost] = useState(null)
    const {comments, getComments} = useContext(PostContext)
    const {postId} = useParams()

    const getPost = async () => {
        const post = await axios.get(`http://localhost:3000/p/${postId}`)
        setPost(post.data)
    }

    useEffect(() => {
        getPost()
        getComments(postId)
    }, [])

    if (!post) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <div className="singlePost">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <small>by: 
                <Link to={`/u/${post.userId}`}>{post.userId}</Link>
            </small>
            <CommentForm postId={postId}/>
            {comments === null ? 'Cargando...' : <CommentList />}
        </div>
    )
}

export default SinglePost