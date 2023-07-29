import React, { useState, useEffect } from 'react';
import '../Home/Home.css';
import Navbar from '../NavBar/NavBar';
 // Importa Atropos.js

import 'atropos/css'

function Home() {
  return (
    <div >
      <Navbar/>
      <div className=' scale-up-center onbody'>
        <div className='present '>
            
            <h1>Hi! 👋<br></br> My name is Ariel!</h1>
            <h3>I'm Software Developer</h3>
        </div>
        <div className='aboutme'>
          <p>I'm student of University Technical Degree in Programming in U.T.N.<br></br>
          Since I was little, I have been fascinated by technology and its ways of using it. Today,
          I am fulfilling my dream of learning how to use it to build new tools that will someday help the community.</p>
        </div>
        
      </div>
    </div>
  )
}


export default Home;
