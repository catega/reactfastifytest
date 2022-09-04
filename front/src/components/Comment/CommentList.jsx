import { useContext } from "react"
import { PostContext } from "../../contexts/postContext"
import { CommentCard } from "./CommentCard"

export const CommentList = () => {
    const {comments} = useContext(PostContext)

    if (comments.length === 0){
        return <p>No hay comentarios</p>
    }

    return (
        <div className="comments-list">
            <h3>{`Comments (${comments.length})`}</h3>
            {comments.map((comment) => {
                return (
                    <div key={comment._id}>
                        <CommentCard comment={comment}/>
                    </div>
                )
            })}
        </div>
    )
}