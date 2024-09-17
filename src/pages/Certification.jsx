import React from 'react';
import styled from 'styled-components';
import CertificationCard from '../components/CertificationCard';

const CertificationsContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  justify-content: center;
  background-color: #121212;
  min-height: 100vh;
`;

const CertificationsPage = () => {
  const certifications = [
    { title: 'Essentials in Python', pdf: `${process.env.PUBLIC_URL}/assets/attachments/Essentials in Python.pdf`},
    { title: 'Certificación 2', pdf: '/certifications/cert2.pdf' },
    { title: 'Certificación 3', pdf: '/certifications/cert3.pdf' },

  ];

  return (
    <CertificationsContainer>
      {certifications.map((cert, index) => (
        <CertificationCard key={index} title={cert.title} pdf={cert.pdf} />
      ))}
    </CertificationsContainer>
  );
};

export default CertificationsPage;
