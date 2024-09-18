import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../App.css';
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
  background-color: #121212;
  color: #ffffff;
  padding: 2rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
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
  text-align: center; // Centramos el título
`;


const Description = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  max-width: 800px;
  text-align: center;
  white-space: pre-line; 
`;


const DetailSection = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  
  border: 2px solid transparent; // Borde transparente para el borde animado
  border-image: linear-gradient(90deg, #00c853, #b2ff59);
  border-image-slice: 1;
  background-size: 200% 200%;
  text-align: center; // Centramos el contenido del detalle
`;

const Achievements = styled(DetailSection)`
  text-align: center; // Centramos el contenido de los logros
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: -1rem;
  text-align: center; // Centramos el título de la sección
`;

const Technologies = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  li {
    background-color: #333;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    color: #00c853;
    flex: 1 1 100px;
    text-align: center;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center; // Asegura que los elementos estén centrados
`;

const GalleryItem = styled.div`
  position: relative;
  width: 100%; // Ajustar para pantallas más pequeñas
  max-width: 300px; // Máximo ancho para pantallas más grandes
  height: auto; // Ajustar altura automáticamente
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageDescription = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  color: #00c853;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;


const AchievementTitle = styled.h2`
  margin-top: 20px;  
  font-size: 1.8rem;
  margin-bottom: 1rem;
  margin-top: -1rem;
  text-align: center; 
  white-space: pre-line; 
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 1500px;
  background: #000;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ff4d4d;
  border: none;
  font-size: 2rem;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff1a1a;
  }
`;

const ProjectDetail = ({ project }) => {
  const { title, description, details, technologies, images, liveLink, achievements } = project;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Technologies>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </Technologies>

      <DetailSection>
        <SectionTitle>Detalles del proyecto</SectionTitle>
        <Description>{details}</Description>
      </DetailSection>

      <Achievements>
        <AchievementTitle>Desafios y logros</AchievementTitle>
        <Description>{achievements}</Description>
      </Achievements>

      <DetailSection>
        <SectionTitle>Galeria</SectionTitle>
        <Gallery>
          {images.map((img, index) => (
            <GalleryItem key={index} onClick={() => openModal(img)}>
              <GalleryImage src={img.src} alt={img.alt} />
              <ImageDescription>{img.description}</ImageDescription>
            </GalleryItem>
          ))}
        </Gallery>
      </DetailSection>

      {liveLink && (
        <Link href={liveLink} target="_blank" rel="noopener noreferrer">
          View Live Project <FaExternalLinkAlt />
        </Link>
      )}

      {modalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={selectedImage.src} alt={selectedImage.alt} />
            <CloseButton onClick={closeModal}>&times;</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default ProjectDetail;
