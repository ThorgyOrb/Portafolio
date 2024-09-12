import React from 'react';
import styled, { keyframes } from 'styled-components'; // Asegúrate de importar keyframes
import { FaExternalLinkAlt } from 'react-icons/fa';

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

// Estilos para la página de detalle del proyecto
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
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  max-width: 800px;
  text-align: center;
`;

const DetailSection = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const GalleryItem = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

const ProjectDetail = ({ project }) => {
  const { title, description, details, images, liveLink } = project;

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DetailSection>
        <SectionTitle>Project Details</SectionTitle>
        <Description>{details}</Description>
      </DetailSection>
      <DetailSection>
        <SectionTitle>Gallery</SectionTitle>
        <Gallery>
          {images.map((img, index) => (
            <GalleryItem key={index}>
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
    </Container>
  );
};

export default ProjectDetail;
