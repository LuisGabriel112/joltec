import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Reinicializar AOS cuando hay cambios en el DOM (útil para navegación)
    const handlePageLoad = () => {
      AOS.refresh();
    };

    window.addEventListener('astro:page-load', handlePageLoad);

    return () => {
      window.removeEventListener('astro:page-load', handlePageLoad);
    };
  }, []);

  return null;
}
