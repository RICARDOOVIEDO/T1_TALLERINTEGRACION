import React, { useState } from 'react';
import './newuser.css'; 
import axios from 'axios';

function NewUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = async (event) => {
    try{
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar el post al servidor
    console.log('Nombre de usuario:', username);
    console.log('Título:', password);
    console.log('Contenido:', avatar);

    const userData = {
        username: username,
        password: password,
        avatar: avatar,
    };

    console.log('Datos del post:', userData);

    await axios.post('https://tarea-1-ricardooviedo.onrender.com/users', userData);

    console.log('Solicitud POST realizada con éxito');

    setAvatar('');
    setPassword('');
    setUsername('');
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  return (
    <div className="new-post-container">
      <h2 className="new-post-heading">Crear Nuevo Usuario</h2>
      <form onSubmit={handleSubmit} className="new-post-form">
        <div className="form-group">
          <label htmlFor="nombreUsuario">Username</label>
          <input
            type="text"
            id="nombreUsuario"
            placeholder='Username'
            className='username-input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="titulo">password:</label>
          <input
            type="password"
            id="titulo"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="foto">Foto:</label>
          <input
            type="text"
            id="foto"
            placeholder='URL de la imagen'
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
          />
        </div>
        <div className="image-preview">
          {avatar && <img src={avatar} alt="Imagen previa" />}
        </div>
        <button type="submit" className="submit-button">Crear</button>
      </form>
    </div>
  );
}

export default NewUser;