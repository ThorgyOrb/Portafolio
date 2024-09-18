import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const shineAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  50% {
    background-position: 200%;
  }
  100% {
    background-position: -200%;
  }
`;

const meteorShower = keyframes`
  0% {
    transform: translate(100vw, -100vh) rotate(45deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate(-100vw, 100vh) rotate(45deg);
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Cambiado de height a min-height */
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  overflow: hidden; /* Puede ser ajustado si es necesario */
  position: relative;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.3) 25%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.3) 75%
  );
  background-size: 200% auto;
  animation: ${shineAnimation} 20s linear infinite; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Helvetica Neue'; 
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 1rem;
`;

const Meteor = styled.div`
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0));
  ${({ delay, left }) => css`
    animation: ${meteorShower} 12s linear infinite;
    animation-delay: ${delay}s;
    left: ${left}%;
  `}
  opacity: 0;
`;

const Projects = () => {
  const projectList = [
    { title: 'Administración de Facturas', description: 'Mejora significativa en el rendimiento y eficiencia de una aplicación web para la administración de facturas', link: '/Portafolio/#/invoicescontrol' },
    { title: 'Control de Salida de Materiales', description: 'Desarrollo de una aplicación web para gestionar la salida de materiales en múltiples plantas.', link: 'https://github.com/username/project2' },
    { title: 'Escaneo de Facturas', description: 'Implementación de una solución web para escanear y procesar facturas de manera automatizada.', link: 'https://github.com/username/project3' },
    { title: 'Gestión de Solicitudes de Tiempo Extra', description: 'Diseño de una página web para gestionar solicitudes de tiempo extra y coordinar transporte.', link: 'https://github.com/username/project4' },
  ];

  const meteors = Array.from({ length: 20 }, (_, i) => (
    <Meteor key={i} delay={Math.random() * 10} left={Math.random() * 100} />
  ));

  return (
    <Container>
      {meteors}
      <Title>Mis proyectos</Title>
      <ProjectGrid>
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectGrid>
    </Container>
  );
};

export default Projects;
