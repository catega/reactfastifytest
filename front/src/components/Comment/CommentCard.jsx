import { Link } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from '../../contexts/mainContext'
import { PostContext } from "../../contexts/postContext"
import { useState } from "react"

export const CommentCard = ({comment}) => {
    const {userId} = useContext(MainContext)
    const {deleteComment, updateComment} = useContext(PostContext)
    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState(comment.text)

    return (
        <>
            <small>By: 
                <Link to={`/u/${comment.userId}`}>{comment.username}</Link>
            </small>
            {
                !editMode
                ? <p>{text}</p>
                : <textarea onChange={e => setText(e.target.value)} value={text} />
            }
            {comment.userId === userId 
            ? 
            <>
                <button onClick={
                    !editMode 
                    ? () => setEditMode(!editMode)
                    : () => {
                                updateComment(text, comment._id, comment)
                                setEditMode(!editMode)
                            }
                }>{editMode ? 'Guardar' : 'Editar'}</button>
                <button onClick={() => deleteComment(comment._id)}>Eliminar</button>
            </>
            : ''}
        </>
    )
}