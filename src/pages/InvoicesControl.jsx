import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import '../App.css';
const projectData = {
  title: 'Administración de Facturas',
  description: 'Recreación de una aplicación de administración de facturas para mejorar el rendimiento en un 96.88% y reducir el uso de recursos en un 18.91%, facilitando la escalabilidad y gestión de facturas para múltiples plantas en Daikin.',
  details: 'La aplicación web original cumplía con su propósito de gestión de facturas, pero enfrentaba serios problemas de escalabilidad, lo que dificultaba su adaptación a nuevas necesidades. Para abordar estos desafíos, se tomó la decisión de rehacer completamente la aplicación. Este rediseño permitió no solo solucionar los problemas de escalabilidad, sino también incorporar funcionalidades avanzadas que facilitaran la gestión de facturas en múltiples plantas.',
  technologies: ['ASP.NET MVC', 'HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'Bootstrap', 'SQL Server', 'Visual Studio', 'Git', 'AJAX' ],
  achievements: 'El principal reto del proyecto fue superar las limitaciones de escalabilidad de la aplicación original. Aunque la aplicación existente ofrecía las funcionalidades necesarias, no era capaz de adaptarse a las crecientes demandas de gestión de facturas en diversas plantas. \n\n  Para superar estos desafíos, se emprendió una reestructuración completa de la aplicación. El nuevo diseño no solo abordó los problemas de escalabilidad, sino que también integró capacidades mejoradas para manejar la gestión de facturas de manera más eficiente. Esta renovación resultó en una mejora del rendimiento del sistema, con una optimización en los tiempos de carga y una reducción en el uso de recursos, superando las expectativas y estableciendo una base sólida para futuros desarrollos.',
  images: [
    { src: '/Portafolio/assets/pictures/InvoicesControl/invoices1.png', alt: 'Captura de Pantalla 1', description: 'Pantalla principal panel de control.' },
    { src: '/Portafolio/assets/pictures/InvoicesControl/invoices2.png', alt: 'Captura de Pantalla 2', description: 'Vista detallada de facturas administrador.' },
    { src: '/Portafolio/assets/pictures/InvoicesControl/invoices3.png', alt: 'Captura de Pantalla 3', description: 'Dashboard.s' },
    { src: '/Portafolio/assets/pictures/InvoicesControl/invoices4.png', alt: 'Captura de Pantalla 4', description: 'Pantalla de configuración.' },
    { src: '/Portafolio/assets/pictures/InvoicesControl/invoices5.png', alt: 'Captura de Pantalla 5', description: 'Vista de facturación usuarios.' },
    { src: '/Portafolio/assets/pictures/InvoicesControl/invoices6.png', alt: 'Captura de Pantalla 62', description: 'Modal de creación de factura.' },
  ],
};

const InvoicesControl = () => {
  return (
    <div>
      <ProjectDetail project={projectData} />
    </div>
  );
};

export default InvoicesControl;
