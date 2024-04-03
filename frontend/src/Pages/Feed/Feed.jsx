import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import './feed.css';

function Feed() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get('https://tarea-1-ricardooviedo.onrender.com/posts');
          console.log('Publicaciones:', response.data)
          setPosts(response.data);
        } catch (error) {
          console.error('Error al obtener las publicaciones:', error);
        }
      };
  
      fetchPosts();
    }, []);
    console.log(posts);
  
    return (
    <div className='body'>
        <h2 className='titulo'>Feed de Publicaciones</h2>
        <div className='feed-container'>
            {posts.map(post => (
              console.log(post.image),
            <div key={post.id} className='post'>
            <Post post={post} /> 
            </div>
            ))}
        </div>
    </div>
    );
  }
  
  export default Feed;