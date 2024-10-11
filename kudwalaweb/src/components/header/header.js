// src/components/Header/Header.js
import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={logo} alt="Kudwala" className="logo" />
        <ul className="nav-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobrenos">Sobre Nós</a></li>
          <li><a href="#services">Servicos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
