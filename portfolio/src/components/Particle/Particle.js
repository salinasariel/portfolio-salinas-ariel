import React, { useEffect, useState } from 'react';
import '../Particle/Particle.css';

const Particle = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      // Función que se ejecuta cuando se mueve el mouse
      const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
  
      // Agrega el evento de escucha para el movimiento del mouse
      document.addEventListener('mousemove', handleMouseMove);
  
      // Limpia el evento de escucha cuando el componente se desmonta
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div
        className="interactive-background"
        style={{
          backgroundPositionX: `${-mousePosition.x / 10}px`,
          backgroundPositionY: `${-mousePosition.y / 10}px`
        }}
      />
    );
  };
  

export default Particle;
