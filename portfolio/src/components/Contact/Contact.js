import React from 'react'
import NavBar from '../NavBar/NavBar';
import '../Contact/Contact.css'
import linkedin from '../../assets/img/linkedin-button.png';
import github from '../../assets/img/github-button.png';
import github2 from '../../assets/img/github-access.png';
import email from '../../assets/img/email-button.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clipboardCopy from 'clipboard-copy';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you have imported react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



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
    <Container className='content scale-up-center'>
      <Row className='d-flex justify-content-center'>
        <Col xs='auto'>
          <button onClick={handleButtonLinkedin} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <img className='imag' src={linkedin} alt="Botón" />
          </button>
        </Col>
        <Col xs='auto'>
          <button onClick={handleButtonGithub} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <img className='imag' src={github2} alt="Botón" />
          </button>
        </Col>
        <Col xs='auto'>
          <button onClick={handleButtonEmail} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <img className='imag' src={email} alt="Botón" />
          </button>
        </Col>
      </Row>
    </Container>
  );
};


export default Contact