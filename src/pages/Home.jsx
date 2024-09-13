import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
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

// Animación de meteoros
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

// Forzar el ajuste del contenedor para evitar scrolls adicionales
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: auto;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden; /* Elimina el scroll innecesario */
  scroll-behavior: smooth; /* Para la transición suave al hacer scroll */
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

// Meteoros individuales
const Meteor = styled.div`
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0));
  animation: ${meteorShower} 12s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%; /* Posición horizontal aleatoria */
  top: ${props => props.top}%; /* Posición vertical aleatoria */
  opacity: 0;
  pointer-events: none; /* Evitar interacción con meteoros */
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: auto;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden; /* Para eliminar scrolls innecesarios */
  scroll-margin-top: 100px;  /* Espaciado al desplazarse */
`;

const ContactTitle = styled.h1`
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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: #00c853; /* Color verde para el hover */
  }
`;

const Home = () => {
  const meteors = Array.from({ length: 40 }, (_, i) => (
    <Meteor key={i} delay={Math.random() * 10} left={Math.random() * 100} top={Math.random() * 100} />
  ));

  return (
    <>
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
            onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
            startIcon={<FaEnvelope />}
          >
            Contacto
          </Button>
        </ButtonWrapper>
      </Container>

      {/* Sección de Contacto */}
      <ContactSection id="contact-section">
        {meteors}
        <ContactTitle>Contacto</ContactTitle>
        <InfoWrapper>
          <InfoItem href="https://api.whatsapp.com/send/?phone=4443235062">
            <FaPhone /> +52 444 323 5062
          </InfoItem>
          <InfoItem href="mailto:edgarulises0808@gmail.com">
            <FaEnvelope /> edgarulises0808@gmail.com
          </InfoItem>
          <InfoItem href="https://www.linkedin.com/in/edgar-martinez-a54625257/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </InfoItem>
          <InfoItem href="https://github.com/ThorgyOrb" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </InfoItem>
        </InfoWrapper>
      </ContactSection>
    </>
  );
};

export default Home;
