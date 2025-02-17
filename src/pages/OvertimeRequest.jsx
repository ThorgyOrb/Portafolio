import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import '../App.css';
const projectData = {
  title: 'Gestion de Transportes',
  description: 'Desarrollo de una aplicación para gestionar las solicitudes de transporte de personal en Daikin',
  details: 'Esta aplicación permite a los supervisores registrar a los trabajadores que solicitan tiempo extra. Los supervisores pueden buscar a los empleados manualmente o escanear el código de su tarjeta para obtener automáticamente la información del trabajador. Además, la aplicación notifica al jefe del empleado, al departamento de finanzas y a los encargados del transporte sobre la cantidad de usuarios que utilizarán el transporte, desglosado por rutas, tipos de transporte y costos. Esto proporciona mayor visibilidad sobre los gastos, y se envían notificaciones por correo electrónico a los encargados sobre el estado de las solicitudes en todo momento.',
  technologies: ['ASP.NET MVC', 'HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'Bootstrap', 'SQL Server', 'Visual Studio', 'Git', 'Email Service (SMTP)' ],
  achievements: 'El desafío al desarrollar esta aplicación fue la automatización de la información, ya que era crucial asegurar que los costos y las rutas se calcularan correctamente, sumando el total de usuarios y enviando los detalles por correo electrónico. Además, se requería que esta información estuviera disponible antes de las 2 p.m. cada día para poder gestionar las solicitudes de transporte de manera oportuna.',
  images: [
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime1.png', alt: 'Captura de Pantalla 1', description: 'Agregar usuarios a la solicitud.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime2.png', alt: 'Captura de Pantalla 2', description: 'Detalles de la solicitud.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime3.png', alt: 'Captura de Pantalla 3', description: 'Modal para aceptar la solicitud.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime4.png', alt: 'Captura de Pantalla 4', description: 'Modal para eliminar la solicitud.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime17.png', alt: 'Captura de Pantalla 5', description: 'Modal para editar factura.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime6.png', alt: 'Captura de Pantalla 6', description: 'Formulario de solicitud.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime7.png', alt: 'Captura de Pantalla 7', description: 'Pantalla principal del panel de control.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime8.png', alt: 'Captura de Pantalla 8', description: 'Modal para editar la solicitud.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime9.png', alt: 'Captura de Pantalla 9', description: 'Historial de facturas.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime10.png', alt: 'Captura de Pantalla 10', description: 'Modal informativo para agregar usuarios.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime11.png', alt: 'Captura de Pantalla 11', description: 'Modal informativo de facturas.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime12.png', alt: 'Captura de Pantalla 12', description: 'Página para aceptar solicitudes.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime13.png', alt: 'Captura de Pantalla 13', description: 'Enviar solicitud para aprobación.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime16.png', alt: 'Captura de Pantalla 14', description: 'Historial de solicitudes por usuario.' },
    { src: '/Portafolio/assets/pictures/OvertimeRequest/overtime18.png', alt: 'Captura de Pantalla 15', description: 'Dashboard.' },
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