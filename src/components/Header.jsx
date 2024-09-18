import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaChevronDown } from 'react-icons/fa'; // Importa iconos de react-icons

const Header = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  border-bottom: 1px solid #333;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const HeaderTitle = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 1.5rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }
`;

const NavLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  font-size: 1rem;
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    color: #00c853;
  }

  &.active {
    border-bottom: 2px solid #00c853;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;
  }
`;

const MainContent = styled.div`
  margin-top: 60px;
  padding: 20px;
  background-color: #121212;
  min-height: 100vh;
`;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el estado del menú
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Función para cerrar el menú
  };

  return (
    <>
      <Header>
        <HeaderTitle>Mi Portfolio</HeaderTitle>
        {/* Icono de menú para pantallas pequeñas */}
        <MenuIcon onClick={toggleMenu}>
          {isMenuOpen ? <FaChevronDown /> : <FaBars />}
        </MenuIcon>
        {/* Links de navegación */}
        <NavLinks isOpen={isMenuOpen}>
          <NavLink 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''} 
            onClick={closeMenu}  /* Cierra el menú al hacer clic */
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''} 
            onClick={closeMenu} /* Cierra el menú al hacer clic */
          >
            Proyectos
          </NavLink>
          <NavLink 
            to="/certification" 
            className={location.pathname === '/certification' ? 'active' : ''} 
            onClick={closeMenu} /* Cierra el menú al hacer clic */
          >
            Certificaciones
          </NavLink>
          <NavLink 
            to="/languagechart" 
            className={location.pathname === '/languagechart' ? 'active' : ''} 
            onClick={closeMenu} /* Cierra el menú al hacer clic */
          >
            Lenguajes
          </NavLink>
        </NavLinks>
      </Header>
    </>
  );
};

export default App;
