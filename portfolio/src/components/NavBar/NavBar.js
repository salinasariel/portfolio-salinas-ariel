import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar-style '>
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item"><Link className='navbar-link' to="/">Home</Link></li>
                    <li className="navbar-item"><Link className='navbar-link' to="/aboutme">About Me</Link></li>
                    <li className="navbar-item"><Link className='navbar-link' to="/proyects">Proyects</Link></li>
                    <li className="navbar-item"><Link className='navbar-link' to="/contact">Contact</Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar