import React, { Component } from 'react'
import PostItem from './PostItem';

class ListPost extends Component {
    constructor(props) {
      super(props)
      this.state = {
        posts: []
      }
    }

    async componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({posts})
    }

    render() {
        return (
            <>
                <h1>List of Posts</h1>
                {this.state.posts.map(post => <PostItem key={post.id} post={post} />)}
            </>
        )
    }
}

export default ListPost