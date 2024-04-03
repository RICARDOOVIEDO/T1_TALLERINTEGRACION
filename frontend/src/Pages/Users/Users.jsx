import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './users.css';

function Users() {
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

  return (
    <div className="lista-usuarios">
      <h2>Lista de Usuarios</h2>
      <div className="usuarios-container">
        {users.map((usuario) => (
          <div key={usuario.id} className="usuario-card">
              <img src={usuario.avatar} alt={`Avatar de ${usuario.username}`} className="usuario-avatar" />
              <Link to={`/perfil/${usuario.id.toString()}`} className="usuario-link">
              <p className="usuario-nombre slide-down">{usuario.username}</p>
            </Link>
            <p className='ID'>
                ID: {usuario.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;