import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
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
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const HeaderTitle = styled.h1`
  color: #ffffff; /* Color blanco para el título */
  margin: 0;
  font-size: 1.5rem; /* Tamaño del texto */
  white-space: nowrap; /* Evita que el texto se rompa */
  
  @media (max-width: 768px) {
    font-size: 1.2rem; /* Tamaño del texto para pantallas pequeñas */
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* Permite que los enlaces se envuelvan en pantallas pequeñas */
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.5rem; /* Reduce el espacio entre enlaces en pantallas pequeñas */
  }
`;

const NavLink = styled(Link)`
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

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Tamaño del texto para pantallas pequeñas */
  }
`;

const MainContent = styled.div`
  margin-top: 60px; /* Altura del encabezado para evitar superposición */
  padding: 20px;
  background-color: #121212; /* Color de fondo oscuro para el contenido principal */
  min-height: 100vh; /* Asegura que el contenido principal ocupe toda la altura de la página */
`;

const App = () => {
  const location = useLocation();
  console.log(location)
  return (
    <>
      <Header>
        <HeaderTitle>MyPortfolio</HeaderTitle>
        <NavLinks>
          <NavLink 
            to="../" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </NavLink>
        </NavLinks>
      </Header>


    </>
  );
};

export default App;
