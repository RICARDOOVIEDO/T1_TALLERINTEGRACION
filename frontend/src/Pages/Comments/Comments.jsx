import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './comments.css';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

function formatTime(created) {
  const date = new Date(created);
  return `${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
}

function Comments() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://tarea-1-ricardooviedo.onrender.com/comments/${postId}`);
        setComments(response.data.comments);
      } catch (error) {
        console.error('Error al obtener los comentarios:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://tarea-1-ricardooviedo.onrender.com/users');
        setUsers(response.data);
        console.log('Usuarios:', response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchComments();
    fetchUsers();
  }, [postId]);

  const handleAddComment = async () => {
    try {
      console.log('Agregando comentario:', newComment, selectedUser);
      // Realizar una solicitud POST al backend para agregar el nuevo comentario
      await axios.post(`https://tarea-1-ricardooviedo.onrender.com/comments/${postId}`, {
        content: newComment,
        userId: selectedUser
      });
      setNewComment('');
      setSelectedUser(null);
      // Ocultar el formulario después de agregar un comentario
      setShowForm(false);
    } catch (error) {
      console.error('Error al agregar el comentario:', error);
    }
  };
  const getUserName = (userId) => {
    const user = _.find(users, { 'id': userId });
    return user ? user.username : 'Usuario desconocido';
  };

  return (
    <div className="comments-container">
      <h2>Comentarios</h2>
      <div className='comment-list'>
        {comments.map(comment => (
          <div key={comment.id} className='comment-box'>
            <div className="comment-header">
              <NavLink to={`/perfil/${comment.userId}`} className="comment-author">{getUserName(comment.userId)}</NavLink>
              <span className="comment-time">{formatTime(comment.created)}</span>
            </div>
            <p className="comment-content">{comment.content}</p>
          </div>
        ))}
      </div>
      {showForm ? (
        <div className="comment-form">
          <textarea
            placeholder="Escribe tu comentario aquí"
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          ></textarea>
          <select
            value={selectedUser}
            onChange={e => setSelectedUser(e.target.value)}
          >
            <option value="">Selecciona un usuario</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.username}</option>
            ))}
          </select>
          <button onClick={handleAddComment}>Enviar</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>Agregar Comentario</button>
      )}
    </div>
  );
}

export default Comments;
