import React, { useState } from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  width: ${props => (props.open ? '250px' : '0')};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1f1f1f; /* Color oscuro para coincidir con el fondo del Home */
  overflow-x: hidden;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  z-index: 1000;
  border-right: 1px solid #333; /* Añadir un borde para un mejor contraste */
`;

const SidebarTitle = styled.h2`
  color: #ffffff; /* Color blanco para el título */
  margin-bottom: 30px;
  text-align: center;
  font-size: 2rem; /* Ajustar el tamaño del texto */
`;

const SidebarLink = styled.a`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  color: #ffffff; /* Color blanco para el texto del enlace */
  display: block;
  transition: 0.3s;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.$active ? '#333' : 'transparent')}; /* Color de fondo para el enlace activo */
  
  &:hover {
    background-color: #444; /* Color de fondo al pasar el ratón */
  }
`;

const MainContent = styled.div`
  margin-left: ${props => (props.open ? '250px' : '0')};
  transition: margin-left 0.3s ease;
  flex-grow: 1;
  overflow: auto;
  background-color: #121212; /* Color de fondo oscuro para el contenido principal */
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: ${props => (props.open ? '250px' : '10px')};
  transition: left 0.3s ease;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1100;
  border-radius: 5px; /* Bordes redondeados para el botón */
  
  &:hover {
    background-color: #444;
  }
`;

const Layout = styled.div`
  display: flex;
`;

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <Layout>
      <Sidebar open={sidebarOpen}>
        <SidebarTitle>MyPortfolio</SidebarTitle>
        <SidebarLink href="/" onClick={handleLinkClick} $active={window.location.pathname === '/'}>
          Home
        </SidebarLink>
        <SidebarLink href="/projects" onClick={handleLinkClick} $active={window.location.pathname === '/projects'}>
          Projects
        </SidebarLink>
        <SidebarLink href="/contact" onClick={handleLinkClick} $active={window.location.pathname === '/contact'}>
          Contact
        </SidebarLink>
      </Sidebar>
      <MainContent open={sidebarOpen}>
        <ToggleButton open={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)} aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}>
          {sidebarOpen ? '✖' : '☰'}
        </ToggleButton>
        {/* Aquí va el contenido de las páginas */}
      </MainContent>
    </Layout>
  );
};

export default App;
