import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import '../App.css';
const projectData = {
  title: 'Control de Salida de Materiales',
  description: 'Desarrollo de una aplicación para gestionar el control y registro de materiales entre distintas plantas, optimizando el flujo de aprobaciones y el seguimiento de solicitudes. La solución implementa un sistema de notificaciones y un proceso de validación de materiales que mejora la eficiencia en la gestión y registro, incluyendo una adaptación para permitir el acceso de usuarios sin cuenta mediante el atributo [AllowAnonymous] en ASP.NET Core. en Daikin.',
  details: 'La aplicación ofrece una solución integral para el seguimiento y control de los materiales que se trasladan entre plantas. Mediante un sistema de solicitudes y aprobaciones, garantiza que cada salida de material esté debidamente autorizada y registrada, proporcionando una visión clara del flujo de materiales en todo momento. La integración de notificaciones por correo electrónico asegura que los responsables sean informados de manera oportuna, facilitando un proceso de aprobación eficiente.',
  technologies: ['ASP.NET MVC', 'HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'Bootstrap', 'SQL Server', 'Visual Studio', 'Git', 'Email Service (SMTP)' ],
  achievements: 'Uno de los principales desafíos fue que los guardias no contaban con cuentas en la empresa. Para solucionar esto, se tuvo que crear un registro separado en la base de datos para los usuarios sin cuenta y se utilizó el atributo [AllowAnonymous] en ASP.NET Core para permitirles acceder a sus secciones específicas para aprobar solicitudes sin necesidad de autenticación previa. Esta solución garantizó que los guardias pudieran desempeñar su función sin comprometer la seguridad de otras partes de la aplicación.\n\nLa implementación de esta solución permitió una gestión eficiente del flujo de materiales entre las plantas y el seguimiento detallado de cada solicitud. El sistema automatizado mejoró significativamente la eficiencia operativa al reducir el tiempo de procesamiento de solicitudes y al garantizar que todos los pasos del flujo de aprobación fueran seguidos correctamente. La adaptación del sistema para permitir el acceso de los guardias sin cuentas contribuyó a una integración fluida y eficaz del personal en el proceso de gestión de materiales.',
  images: [
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime1.png', alt: 'Captura de Pantalla 1', description: 'Pantalla principal panel de control.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime2.png', alt: 'Captura de Pantalla 2', description: 'Vista detallada de facturas administrador.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime3.png', alt: 'Captura de Pantalla 3', description: 'Dashboard' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime4.png', alt: 'Captura de Pantalla 4', description: 'Pantalla de configuración.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime5.png', alt: 'Captura de Pantalla 5', description: 'Vista de facturación usuarios.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime6.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime7.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime8.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime9.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime10.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime11.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime12.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime13.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime14.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime15.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime16.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime17.png', alt: 'Captura de Pantalla 6', description: 'Modal de creación de factura.' },
    
  ],
};

const OvetimeRequest = () => {
  return (
    <div>
      <ProjectDetail project={projectData} />
    </div>
  );
};

export default OvetimeRequest;