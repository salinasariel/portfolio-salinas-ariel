// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home/Home.js';
// import NavBar from './components/NavBar/NavBar.js';

// function App() {
//   return (
    
//     <div>
      
//       <Home />
//       <NavBar />
//     </div>
//   );
// }

// export default App;
import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js'
import AboutMe from './components/AboutMe/AboutMe.js';
import Proyects from './components/Proyects/Proyects.js';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;