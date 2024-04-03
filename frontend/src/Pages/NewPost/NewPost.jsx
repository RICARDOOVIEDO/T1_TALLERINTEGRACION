import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './newpost.css'; 

function NewPost() {
  const [title, setTitulo] = useState('');
  const [content, setContenido] = useState('');
  const [image, setFoto] = useState('');
  const [username, setNombreUsuario] = useState('');
  const [users, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('https://tarea-1-ricardooviedo.onrender.com/users');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const selectedUser = users.find(user => user.username === username);
      const UserId = selectedUser ? selectedUser.id : null;

      if (!UserId) {
        console.error('No se pudo encontrar el UserId correspondiente al nombre de usuario seleccionado');
        return;
      }

      console.log('Valores del formulario:', title, content, image, UserId);

      const postData = {
        title: title,
        content: content,
        image: image,
        UserId: UserId
      };

      console.log('Datos del post:', postData);

      await axios.post('http://localhost:3000/posts', postData);

      console.log('Solicitud POST realizada con éxito');

      // Restablecer campos del formulario después de enviar
      setTitulo('');
      setContenido('');
      setFoto('');
      setNombreUsuario('');
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

  return (
    <div className="new-post-container">
      <h2 className="new-post-heading">Crear Post</h2>
      <form onSubmit={handleSubmit} className="new-post-form">
        <div className="form-group">
          <label className='username' htmlFor="nombreUsuario">Nombre de Usuario:</label>
          <select
            id="nombreUsuario"
            value={username}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
          >
            <option value="">Selecciona un usuario</option>
            {users.map((usuario) => (
              <option className='option' key={usuario.id} value={usuario.username}>{usuario.username}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            placeholder='Título del post'
            value={title}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contenido">Contenido:</label>
          <textarea
            id="contenido"
            value={content}
            placeholder='Escribe lo que quieras en tu post aquí...'
            onChange={(e) => setContenido(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="foto">Foto:</label>
          <input
            type="text"
            id="foto"
            placeholder='URL de la imagen'
            value={image}
            onChange={(e) => setFoto(e.target.value)}
            required
          />
        </div>
        <div className="image-preview">
          {image && <img src={image} alt="Imagen previa" />}
        </div>
        <button type="submit" className="submit-button">Publicar</button>
      </form>
    </div>
  );
}

export default NewPost;
