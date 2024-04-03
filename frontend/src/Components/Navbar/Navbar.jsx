import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

// Componente de barra de navegación
function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link name" : "navbar-link"}>
                <img src="src/assets/img/integram.jpg" alt="logo-image" className="logo-image"/>
            </NavLink>
            <ul className='navbar-links-container '>
                <li className='navbar-element'>
                <NavLink to="/feed" className="button_slide slide_down">
                    Feed
                </NavLink>
                </li>
                <li className='navbar-element'>
                <NavLink to="/newpost" className="button_slide slide_down">
                    Crear Post
                </NavLink>
                </li>
                <li className='navbar-element'>
                <NavLink to="/newuser" className="button_slide slide_down">
                    Crear Usuario
                </NavLink>
                </li>
                <li className='navbar-element'>
                <NavLink to="/users" className="button_slide slide_down">
                    Lista de Usuarios
                </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;
