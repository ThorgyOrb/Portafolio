import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

// Estilos para el contenedor de la tarjeta de certificación
const CardContainer = styled.div`
  width: 300px;
  height: auto; /* Ajusta la altura automáticamente según el contenido */
  border: 1px solid #444;
  border-radius: 12px;
  padding: 0.5rem; /* Reduce el padding general */
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: #2c3e50; /* Fondo oscuro para la tarjeta */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }
`;

// Estilos para la imagen en la tarjeta
const Image = styled.img`
  width: 100%;
  height: auto; /* Deja que la imagen ajuste su altura de forma proporcional */
  object-fit: cover; /* Asegura que la imagen cubra el contenedor sin recortarse */
  border-radius: 8px;
  margin-bottom: 0.3rem; /* Reduce el espacio entre la imagen y el título */
`;

// Estilos para el título de la certificación
const Title = styled.h3`
  font-size: 1rem; /* Disminuye el tamaño de la fuente para ahorrar espacio */
  color: #ecf0f1; /* Color claro para el texto en fondo oscuro */
  text-align: center;
  margin: 0;
  padding: 0.3rem 0; /* Reduce el espaciado */
  width: 100%; /* Ocupa el ancho completo del contenedor */
  background: rgba(0, 0, 0, 0.7); /* Fondo oscuro translúcido para el título */
  border-radius: 0 0 12px 12px; /* Esquinas redondeadas en la parte inferior */
`;

const ModalContent = styled.div`
  background-color: #1e1e1e; /* Fondo oscuro para el modal */
  padding: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
`;

// Botón para cerrar el modal
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #e74c3c; /* Color rojo para el botón de cerrar */
  transition: color 0.3s;

  &:hover {
    color: #c0392b; /* Rojo más oscuro en el hover */
  }
`;

const CertificationCard = ({ title, image, pdf }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el tamaño de pantalla según tus necesidades
    };

    handleResize(); // Inicializa el estado
    window.addEventListener('resize', handleResize); // Actualiza el estado en el cambio de tamaño

    return () => window.removeEventListener('resize', handleResize); // Limpieza del evento
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <CardContainer onClick={openModal}>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
      </CardContainer>

      {/* Modal que muestra el PDF */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{ content: { maxWidth: '90vw', maxHeight: '90vh', margin: 'auto', backgroundColor: '#1e1e1e' } }}
        ariaHideApp={false}
      >
        <ModalContent>
          <CloseButton onClick={closeModal}>X</CloseButton>
          {isMobile ? (
            <a href={pdf} target="_blank" rel="noopener noreferrer">Ver PDF</a>
          ) : (
            <iframe src={pdf} width="100%" height="780px" frameBorder="0" />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertificationCard;
