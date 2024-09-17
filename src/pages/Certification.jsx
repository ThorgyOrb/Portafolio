import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import CertificationCard from '../components/CertificationCard';

// Animación de brillo para el título
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
// Contenedor principal para las certificaciones
const CertificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  justify-content: center;
  min-height: 100vh; /* Cambiado de height a min-height */
  color: #ffffff;
  padding: 2rem;
  min-height: 100vh;
  overflow: hidden; /* Puede ser ajustado si es necesario */
  position: relative;
`;

// Título de la página
const PageTitle = styled.h1`
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

// Contenedor de tarjetas de certificación
const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  /* Centrando el contenido de la grid en su contenedor */
  justify-content: center;
  justify-items: center;
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

const CertificationsPage = () => {
  const certifications = [
    { title: 'Essentials in Python', image: `${process.env.PUBLIC_URL}/assets/pictures/cer1.png`, pdf: `${process.env.PUBLIC_URL}/assets/attachments/Essentials in Python.pdf` },
    { title: 'Certificación 2', pdf: '/certifications/cert2.pdf' },
    { title: 'Certificación 3', pdf: '/certifications/cert3.pdf' },
  ];
  const meteors = Array.from({ length: 20 }, (_, i) => (
    <Meteor key={i} delay={Math.random() * 10} left={Math.random() * 100} />
  ));
  return (
    <CertificationsContainer>
        {meteors}
      <PageTitle>Certifications</PageTitle>
      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificationCard key={index} title={cert.title} image={cert.image} pdf={cert.pdf} />
        ))}
      </CertificationsGrid>
    </CertificationsContainer>
  );
};

export default CertificationsPage;
