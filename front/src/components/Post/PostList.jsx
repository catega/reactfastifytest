import React from 'react'
import { PostCard } from './PostCard'

export const PostList = ({posts, deletePost}) => {
    if (posts.length === 0){
        return (
            <div className='post-list'>
                No hay post
            </div>
        )
    }

    return (
        <div className='posts-list'>
            {posts.map((post) => {
              return (
                <div key={post._id}>
                  <PostCard post={post} deletePost={deletePost} />
                </div>
                )
              })}
        </div>
    )
}