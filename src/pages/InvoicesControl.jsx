import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

const projectData = {
  title: 'Administración de Facturas',
  description: 'Optimización de una aplicación de administración de facturas con un rendimiento de carga mejorado en un 96.88% y un uso de recursos reducido en un 18.91%.',
  details: 'Detailed description of how it was created, the technologies used, and any challenges faced.',
  images: [
    { src: '/Portafolio/assets/pictures/invoices1.png', alt: 'Screenshot 1', description: 'Main screen showing the dashboard.' },
    { src: '/Portafolio/assets/pictures/invoices2.png', alt: 'Screenshot 1', description: 'Main screen showing the dashboard.' },
    { src: '/Portafolio/assets/pictures/invoices3.png', alt: 'Screenshot 1', description: 'Main screen showing the dashboard.' },
    { src: '/Portafolio/assets/pictures/invoices4.png', alt: 'Screenshot 1', description: 'Main screen showing the dashboard.' },
    { src: '/Portafolio/assets/pictures/invoices5.png', alt: 'Screenshot 1', description: 'Main screen showing the dashboard.' },
    { src: '/Portafolio/assets/pictures/invoices6.png', alt: 'Screenshot 1', description: 'Main screen showing the dashboard.' },

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
