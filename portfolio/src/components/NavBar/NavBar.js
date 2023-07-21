import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar-style scale-up-vertical-top'>
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item">Home</li>
                    <li className="navbar-item">About Me</li>
                    <li className="navbar-item">Projects</li>
                    <li className="navbar-item">Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar