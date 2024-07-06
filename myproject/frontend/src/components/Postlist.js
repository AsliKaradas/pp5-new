// frontend/src/components/PostList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostList.css'; 

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('ERROR', error);
            });
    }, []);

    return (
        <div className="post-list">
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <h2>{post.author}</h2>
                    <p>{post.content}</p>
                    <div className="post-actions">
                        <button>Like ({post.likes.length})</button>
                        <button>Comments ({post.comments.length})</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostList;
