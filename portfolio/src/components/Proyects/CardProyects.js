import React from 'react'
import Button from '@mui/material/Button';

function CardProyects(props) {
    const certificateurl = props.certificateurl
    const redirectToCertificate = () => {
        window.open(certificateurl, '_blank');
    };
  return (
    <div className='backplate scale-up-horizontal-center'>
        <h3>{props.name}</h3>
        <h5>{props.tittle}</h5> <br></br>
        <p>{props.about}</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZXOKuJA2XCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Button variant="outlined" onClick={redirectToCertificate} className='btn btn-outline-success btn-sm'>Certificate</Button>
    </div>
  )
}

export default CardProyects