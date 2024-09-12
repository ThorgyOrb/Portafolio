import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import Button from '@mui/material/Button';
import '../App.css';

// Animación de brillo
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 98.3vh;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
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
  href={`${process.env.PUBLIC_URL}/assets/attachments/Edgar_Ulises_Martinez_Tovar.pdf`} 
  download="Edgar_Ulises_Martinez_Tovar.pdf"
  startIcon={<FaDownload />}
>
  Descargar CV
</Button>
        <Button 
          variant="contained" 
          color="secondary" 
          href="/Portafolio/#/contact"
          startIcon={<FaEnvelope />}
        >
          Contacto
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Home;
