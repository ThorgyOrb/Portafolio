import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 60px; /* Altura del encabezado */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1f1f1f; /* Color oscuro para el fondo del encabezado */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  border-bottom: 1px solid #333; /* Borde inferior para contraste */
  box-sizing: border-box; /* Incluye padding y border en el cálculo del width */
`;

const HeaderTitle = styled.h1`
  color: #ffffff; /* Color blanco para el título */
  margin: 0;
  font-size: 1.5rem; /* Tamaño del texto */
  flex-grow: 1; /* Permite que el título se expanda y ocupe el espacio disponible */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  padding: 10px;
  text-decoration: none;
  font-size: 1rem;
  color: #ffffff; /* Color blanco para el texto del enlace */
  transition: 0.3s;
  
  &:hover {
    color: #00c853; /* Color verde para el hover */
  }

  &.active {
    border-bottom: 2px solid #00c853; /* Subrayado para el enlace activo */
  }
`;

const MainContent = styled.div`
  margin-top: 60px; /* Altura del encabezado para evitar superposición */
  padding: 20px;
  background-color: #121212; /* Color de fondo oscuro para el contenido principal */
  min-height: 100vh; /* Asegura que el contenido principal ocupe toda la altura de la página */
`;

const App = () => {
  const [activePage, setActivePage] = useState('/');

  const handleLinkClick = (path) => {
    setActivePage(path);
  };

  return (
    <>
      <Header>
        <HeaderTitle>MyPortfolio</HeaderTitle>
        <NavLinks>
          <NavLink 
            href="/Portafolio/" 
            onClick={() => handleLinkClick('/')}
            className={activePage === '/' ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink 
            href="/Portafolio/#/projects" 
            onClick={() => handleLinkClick('/projects')}
            className={activePage === '/projects' ? 'active' : ''}
          >
            Projects
          </NavLink>
          <NavLink 
            href="/Portafolio/#/contact" 
            onClick={() => handleLinkClick('/contact')}
            className={activePage === '/contact' ? 'active' : ''}
          >
            Contact
          </NavLink>
        </NavLinks>
      </Header>
    </>
  );
};

export default App;
