import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFilePdf } from 'react-icons/fa';
import Modal from 'react-modal';

// Estilos para el contenedor de la tarjeta de certificación
const CardContainer = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

// Estilos para la vista previa
const PreviewIcon = styled(FaFilePdf)`
  font-size: 4rem;
  color: #e74c3c;
  margin-bottom: 1rem;
`;

// Estilos para el título de la certificación
const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
`;

// Estilos para el modal
const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: #e74c3c;
`;

const CertificationCard = ({ title, pdf }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <CardContainer onClick={openModal}>
        <PreviewIcon />
        <Title>{title}</Title>
      </CardContainer>

      {/* Modal que muestra el PDF */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{ content: { maxWidth: '900px', margin: 'auto' } }}
        ariaHideApp={false}
      >
        <ModalContent>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <embed src={pdf} type="application/pdf" width="100%" height="600px" />
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertificationCard;
