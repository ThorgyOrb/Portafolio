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
    { src: '/Portafolio/assets/pictures/MaterialControl/material1.png', alt: 'Captura de Pantalla 1', description: 'Pantalla principal de usuarios.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material2.png', alt: 'Captura de Pantalla 2', description: 'Formulario de solicitud.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material4.png', alt: 'Captura de Pantalla 4', description: 'Pantalla principal de solicitudes pendientes.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material5.png', alt: 'Captura de Pantalla 5', description: 'Pantalla principal de guardados y cancelados.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material6.png', alt: 'Captura de Pantalla 6', description: 'Página principal del Administrador del sistema.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material7.png', alt: 'Captura de Pantalla 7', description: 'Historial de solicitudes.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material9.png', alt: 'Captura de Pantalla 9', description: 'Login para usuarios de seguridad.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material10.png', alt: 'Captura de Pantalla 10', description: 'Pantalla de materiales pendientes de retornar.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material11.png', alt: 'Captura de Pantalla 11', description: 'Pantalla de materiales pendientes de salida.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material12.png', alt: 'Captura de Pantalla 12', description: 'Menú principal.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material13.png', alt: 'Captura de Pantalla 13', description: 'Página principal de finanzas.' },
    { src: '/Portafolio/assets/pictures/MaterialControl/material14.png', alt: 'Captura de Pantalla 14', description: 'Página principal del manager.' },
  ],
};

const MaterialControl = () => {
  return (
    <div>
      <ProjectDetail project={projectData} />
    </div>
  );
};

export default MaterialControl;