import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #cccccc;
  margin-bottom: 1.5rem;
`;

const ProjectLink = styled.a`
  font-size: 1rem;
  color: #00c853;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ title, description, link }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
        Ver Proyecto <FaExternalLinkAlt />
      </ProjectLink>
    </Card>
  );
};

export default ProjectCard;
