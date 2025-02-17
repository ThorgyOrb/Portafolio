import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import '../App.css';
const projectData = {
  title: 'Escaneo de Facturas',
  description: 'Separador de facturas',
  details: 'Aplicación web diseñada para cargar un compendio de facturas en formato PDF, analizar cada página de forma individual y separar automáticamente cada factura. Al finalizar el proceso, genera un archivo ZIP con todas las facturas organizadas por separado.',
  technologies: ['ASP.NET MVC', 'HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'Bootstrap', 'Visual Studio', 'Git' ],
  achievements: 'El desafío principal de este proyecto consistió en encontrar una forma efectiva de leer los archivos PDF y, al mismo tiempo, extraer los códigos QR presentes en ellos. Además, debido a que algunos documentos tenían una calidad deficiente, se implementó un sistema de mejora de contraste para optimizar la legibilidad de los QR, asegurando que pudieran ser correctamente detectados incluso en condiciones de mala calidad.',
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