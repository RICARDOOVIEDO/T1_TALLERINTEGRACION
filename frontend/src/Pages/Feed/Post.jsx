import React from 'react';
import { NavLink } from 'react-router-dom'; // Importa Link para enlaces entre páginas
import './post.css';

function Post({ post }) {
  return (
    <div className="post-card">
      <h3>
        <NavLink className="navlink"to={`/perfil/${post.UserId}`}>{post.UserId}</NavLink>
      </h3>
      {post.image && <img className= 'post-image'src={post.image} alt="Foto de la publicación" />}
      <p className='post-title'>{post.title}</p>
      <p className='post-content'>{post.content}</p>
      <NavLink to={`/comments/${post.id.toString()}`} className='post-comments slide_down' onClick={() => console.log('Ver comentarios:', `/comments/${post.id.toString()}`)}>Ver Comentarios</NavLink>
      <p className='post-fecha'>Fecha de creación: {post.created}</p>
    </div> 
  );
}

export default Post;

