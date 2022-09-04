import {useState} from 'react'

export const PostForm = ({createPost}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(title, description)
        setTitle('')
        setDescription('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
            onChange={(e) => setTitle(e.target.value)} 
            type="text" 
            value={title}/>

            <textarea 
            onChange={(e) => setDescription(e.target.value)}
            value={description}/>

            <button>Post</button>
        </form>
    )
}