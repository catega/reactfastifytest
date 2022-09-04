import { PostList } from "../components/Post/PostList"
import { useContext } from "react"
import { UserContext } from "../contexts/userContext"

const User = () => {
    const {posts, userId, deleteUserPost} = useContext(UserContext)

    return (
        <div className="user-profile">
            <h1>{`${userId} posts`}</h1>
            {
                posts === null ? 'Cargando...' : <PostList posts={posts} deletePost={deleteUserPost}/>
            }
        </div>
    )
}

export default User