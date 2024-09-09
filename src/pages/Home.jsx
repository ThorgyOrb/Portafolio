import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import Button from '@mui/material/Button';

// Animación de degradado
const gradientAnimation = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 98.3vh;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  overflow: hidden; /* Evita barras de desplazamiento */
  position: relative;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, rgba(255, 105, 180, 1), rgba(0, 191, 255, 1), rgba(138, 43, 226, 1), rgba(255, 105, 180, 1));
  background-size: 600% 600%;
  animation: ${keyframes`
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  `} 10s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem; /* Espacio entre botones */
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

// Estilos para los meteoros
const Meteor = styled.div`
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0));
  animation: ${meteorShower} 12s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%; /* Posición horizontal aleatoria */
  opacity: 0; /* Inicialmente invisible */
`;

const Home = () => {
  // Generar un array de meteoros
  const meteors = Array.from({ length: 20 }, (_, i) => (
    <Meteor key={i} delay={Math.random() * 10} left={Math.random() * 100} />
  ));

  return (
    <Container>
      {meteors}
      <Title>Edgar Ulises Martinez Tovar</Title>
      <Description>Desarrollador Full Stack.</Description>
      <ButtonWrapper>
        <Button 
          variant="contained" 
          color="primary" 
          href="/assets/attachments/Edgar_Ulises_Martinez_Tovar.pdf" 
          download="Edgar_Ulises_Martinez_Tovar.pdf"
          startIcon={<FaDownload />}
        >
          Descargar CV
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          href="/contact"
          startIcon={<FaEnvelope />}
        >
          Contacto
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Home;
