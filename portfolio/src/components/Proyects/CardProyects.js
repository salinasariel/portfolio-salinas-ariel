import React from 'react'
import Button from '@mui/material/Button';

function CardProyects(props) {
    const certificateurl = props.certificateurl
    const redirectToCertificate = () => {
        window.open(certificateurl, '_blank');
    };
  return (
    <div className='backplate'>
        <h3>{props.name}</h3>
        <h5>{props.tittle}</h5> <br></br>
        <p>{props.about}</p>
        <button  onClick={redirectToCertificate} className='btn btn-dark btn-sm'>Deploy</button>
        <button  onClick={redirectToCertificate} className='btn btn-dark btn-sm'>Repository</button>
        <button  onClick={redirectToCertificate} className='btn btn-dark btn-sm'>Video</button>
    </div>
  )
}

export default CardProyects