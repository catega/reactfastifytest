import { useState, useContext } from "react"
import { PostContext } from "../../contexts/postContext"

export const CommentForm = ({postId}) => {
    const [commentText, setCommentText] = useState('')
    const {createComment} = useContext(PostContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createComment(commentText, postId)
        setCommentText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
            onChange={e => setCommentText(e.target.value)}
            value={commentText}
            />
            <button>Comment</button>
        </form>
    )
}