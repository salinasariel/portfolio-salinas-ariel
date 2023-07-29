import React from 'react'
import './AboutMe.css'
import Button from '@mui/material/Button';

function CardEducation(props) {
    const certificateurl = props.certificateurl
    const redirectToCertificate = () => {
        window.open(certificateurl, '_blank');
    };
  return (
    <div className='backplate scale-up-horizontal-center'>
        <h3>{props.name}</h3>
        <h5>{props.tittle}</h5> <br></br>
        <p>{props.about}</p>
        <Button size="small" variant="outlined" onClick={redirectToCertificate} className='btn btn-outline-success btn-sm'>Certificate</Button>
    </div>
  )
}

export default CardEducation