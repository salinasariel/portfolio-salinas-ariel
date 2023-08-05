import React, { useState, useEffect, useRef } from 'react';
import '../Home/Home.css';
import Navbar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';
import Particle from '../Particle/Particle';
import Proyects from '../Proyects/Proyects';
import Contact from '../Contact/Contact';



function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      setCursorPosition({ x: posX, y: posY });


      cursorDotRef.current && (cursorDotRef.current.style.left = `${posX}px`);
      cursorDotRef.current && (cursorDotRef.current.style.top = `${posY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

   
    return () => {
      
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  return (
    <div>
      <div
        className='cursor-dot'
        ref={cursorDotRef}
        data-cursor-dot
      ></div>

      <div className='app-container'>
        <Navbar />
        <div className='scale-up-center onbody'>
          <div className='present'>
            <h1>Hi! 👋<br></br> My name is Ariel!</h1>
            <h3>I'm Software Developer</h3>
          </div>
          <div className='aboutme'>
            <p>I'm student of University Technical Degree in Programming in U.T.N.<br></br>
              Since I was little, I have been fascinated by technology and its ways of using it. Today,
              I am fulfilling my dream of learning how to use it to build new tools that will someday help the community.</p>
          </div>
        </div>
        <AboutMe />
        <Proyects />
        <Contact />
        <Particle />
      </div>
      <div className='message-for-mobile'>
        <h1>¡Lo sentimos!</h1>
        <h3>Este portfolio no es compatible con dispositivos móviles.</h3>
      </div>
    </div>
  );
}

export default Home;
