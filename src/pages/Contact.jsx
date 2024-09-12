import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// Animación de brillo del título
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
  height: 98.3vh;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
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

const ContactPage = () => {
  const meteors = Array.from({ length: 20 }, (_, i) => (
    <Meteor key={i} delay={Math.random() * 10} left={Math.random() * 100} />
  ));

  return (
    <Container>
      {meteors}
      <Title>Contacto</Title>
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
    </Container>
  );
};

export default ContactPage;
