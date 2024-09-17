import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al inicio
  }, [pathname]); // Ejecuta cada vez que cambie la ruta

  return null;
};

export default ScrollToTop;
