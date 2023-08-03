import React from 'react'
import './AboutMe.css'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function CardEducation(props) {
    const certificateurl = props.certificateurl
    const redirectToCertificate = () => {

      if (certificateurl == ""){
        toast("Available soon!");
      } else{
        window.open(certificateurl, '_blank');
      }
        
        
    };
  return (
    <div className='backplate scale-up-horizontal-center'>
        <h3>{props.name}</h3>
        <h5>{props.tittle}</h5> <br></br>
        <p>{props.about}</p>
        <button  onClick={redirectToCertificate} className='btn btn-outline-secondary btn-sm'>Certificate</button>
        
    </div>
  )
}

export default CardEducation