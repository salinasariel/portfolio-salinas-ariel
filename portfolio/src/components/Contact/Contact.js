import React from 'react'
import NavBar from '../NavBar/NavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  return (
    <div>
        <NavBar />
            <div className='content scale-up-center'>
                <h1>Contact me 📪</h1>
                
                
                
            </div>
            
            <ToastContainer />
    </div>
  )
}

export default Contact