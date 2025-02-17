import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import '../App.css';
const projectData = {
  title: 'Escaneo de Facturas',
  description: 'Separador de facturas',
  details: 'Aplicación web diseñada para cargar un compendio de facturas en formato PDF, analizar cada página de forma individual y separar automáticamente cada factura. Al finalizar el proceso, genera un archivo ZIP con todas las facturas organizadas por separado.',
  technologies: ['ASP.NET MVC', 'HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'Bootstrap', 'SQL Server', 'Visual Studio', 'Git', 'AJAX' ],
  achievements: 'El principal reto del proyecto fue superar las limitaciones de escalabilidad de la aplicación original. Aunque la aplicación existente ofrecía las funcionalidades necesarias, no era capaz de adaptarse a las crecientes demandas de gestión de facturas en diversas plantas. \n\n  Para superar estos desafíos, se emprendió una reestructuración completa de la aplicación. El nuevo diseño no solo abordó los problemas de escalabilidad, sino que también integró capacidades mejoradas para manejar la gestión de facturas de manera más eficiente. Esta renovación resultó en una mejora del rendimiento del sistema, con una optimización en los tiempos de carga y una reducción en el uso de recursos, superando las expectativas y estableciendo una base sólida para futuros desarrollos.',
  images: [
    { src: '/Portafolio/assets/pictures/PDFSplit/pdf1.png', alt: 'Captura de Pantalla 1', description: 'Pantalla principal, descargar el archivo.' },
    { src: '/Portafolio/assets/pictures/PDFSplit/pdf2.png', alt: 'Captura de Pantalla 2', description: 'Pantalla principal, cargar el archivo.' },
  ],
};

const PDFSplit = () => {
  return (
    <div>
      <ProjectDetail project={projectData} />
    </div>
  );
};

export default PDFSplit;