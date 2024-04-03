import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://tarea-1-ricardooviedo.onrender.com/users/${id}`);
        setUser(response.data.user);
        setPosts(response.data.posts);
        console.log('Perfil del usuario:', response.data.user);
        console.log('Publicaciones del usuario:', response.data.posts);
      } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!user) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div>
      <h2>Perfil de {user.username}</h2>
      <img src={user.avatar} alt={`Avatar de ${user.username}`} />
      <p>Nombre de usuario: {user.username}</p>
      <p>Fecha de creación: {user.created}</p>

      <h3>Publicaciones</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <img src={post.image} alt={`Imagen de ${user.username}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
