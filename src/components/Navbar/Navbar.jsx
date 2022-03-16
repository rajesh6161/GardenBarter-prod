import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar d-flex p-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">BarterGarden</a>
                <a className='contact-btn' href="#footer">Contact Us</a>
            </div>
        </nav>
    )
}
export default Navbar