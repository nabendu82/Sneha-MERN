import React from 'react'
import './PostItem.css'

const h1Styled = {
  backgroundColor: 'lightpink',
  color: 'darkblue'
}

const PostItem = ({ post }) => {
  return (
    <div className='container'>
        <h1 style={h1Styled}>ID: {post.id}</h1>
        <h3 style={{ backgroundColor: 'lightgray', color: 'darkmagenta'}}>
          Title: {post.title}
        </h3>
        <p>Body: {post.body}</p>
    </div>
  )
}

export default PostItem