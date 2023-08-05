import React from 'react'
import NavBar from '../NavBar/NavBar';
import '../Contact/Contact.css'
import linkedin from '../../assets/img/linkedin-button.png';
import github from '../../assets/img/github-button.png';
import email from '../../assets/img/email-button.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clipboardCopy from 'clipboard-copy';




function Contact() {

  const handleButtonEmail = () => {
    // Texto que se copiará al portapapeles
    const emailToCopy = 'salinas.ariel02@gmail.com';
    clipboardCopy(emailToCopy)
      .then(() => {
        toast.dark('✅ Email copied to clipboard!');
      })
      .catch((error) => {
        toast.error('Error copying email to clipboard ');
      });
  };
  const handleButtonLinkedin = () => {
    window.open('https://www.linkedin.com/in/salinasariel/', '_blank');
  };
  const handleButtonGithub = () => {
    window.open('https://github.com/salinasariel', '_blank');
  };
  
  return (
    <div>
      
      
        
      <div className='content scale-up-center'>
        <button onClick={handleButtonLinkedin} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <img className='imag ' src={linkedin} alt="Botón" />
        </button>
        <button onClick={handleButtonGithub} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <img className='imag ' src={github} alt="Botón" />
        </button>
        <button onClick={handleButtonEmail} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <img className='imag ' src={email} alt="Botón" />
        </button>
      </div>

      


      <ToastContainer />
    </div>
  )
}

export default Contact