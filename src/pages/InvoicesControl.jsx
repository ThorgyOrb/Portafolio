import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

// Datos del proyecto (aquí puedes reemplazar con datos reales o dinámicos)
const projectData = {
  title: 'My Awesome Project',
  description: 'A brief overview of what this project is about.',
  details: 'Detailed description of how it was created, the technologies used, and any challenges faced.',
  images: [
    { src: '/path/to/image1.jpg', alt: 'Screenshot 1', description: 'Main screen showing the dashboard.' },
    { src: '/path/to/image2.jpg', alt: 'Screenshot 2', description: 'Detail view of user profile.' }
  ],
  liveLink: 'https://example.com'
};

const InvoicesControl = () => {
  return (
    <div>
      <ProjectDetail project={projectData} />
    </div>
  );
};

export default InvoicesControl;
