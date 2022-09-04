import { useContext } from 'react'
import '../App.css'
import { PostContext } from '../contexts/postContext'
import { PostList } from '../components/Post/PostList'
import { PostForm } from '../components/Post/PostForm'

function Posts() {
  const {posts, createPost, deletePost} = useContext(PostContext)

  return (
    <div className="App">
      <PostForm createPost={createPost}/>
      {
        posts === null ? 'Cargando...' : <PostList posts={posts} deletePost={deletePost}/>
      }
    </div>
  )
}

export default Posts
