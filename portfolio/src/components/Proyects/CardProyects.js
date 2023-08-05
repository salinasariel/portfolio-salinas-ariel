import React from 'react'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';


function CardProyects(props) {
  const repositoryurl = props.repositoryurl
  const videourl = props.videourl
  const deployteurl = props.deployurl

  const redirectToCertificate = () => {

    if (repositoryurl == ""){
      toast.dark("⏳ Available soon!");
    } else{
      window.open(repositoryurl, '_blank');
    }
      
  }
  const redirectToVideo = () => {

    if (videourl == ""){
      toast.dark("⏳ Available soon!");
    } else{
      window.open(videourl, '_blank');
    }
      
  }
  const redirectToDeploy = () => {

    if (deployteurl == ""){
      toast.dark("⏳ Available soon!");
    } else{
      window.open(deployteurl, '_blank');
    }
      
  }
  return (
    <div className='backplate'>
      <h3>{props.name}</h3>
      <h5>{props.tittle}</h5> <br></br>
      <p>{props.about}</p>
      
      <div className='button-container'>
        <button onClick={redirectToDeploy} className='btn btn-dark btn-sm'>Deploy</button>
        <button onClick={redirectToCertificate} className='btn btn-dark btn-sm'>Repository</button>
        <button onClick={redirectToVideo} className='btn btn-dark btn-sm'>Post</button>
      </div>
    </div>
  )
}

export default CardProyects