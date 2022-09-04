import { useContext } from "react"
import {Link} from 'react-router-dom'
import { MainContext } from "../../contexts/mainContext"

export const PostCard = ({post, deletePost}) => {
    const {userId} = useContext(MainContext)

    return (
        <>
            <h3>
                <Link to={`/p/${post._id}`}>{post.title}</Link>
            </h3>
            <p>{post.description}</p>
            <small>by: 
                <Link to={`/u/${post.userId}`}>{post.userId}</Link>
            </small>
            {post.userId === userId ? <button onClick={() => deletePost(post._id)}>Eliminar</button> : ''}
        </>
    )
}