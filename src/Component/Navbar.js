
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" id='mainNav'>
                    <Link className="navbar-brand mx-5" to={"/"} id='navlogo'>
                        <span className='one'>K</span>
                        <span className='two'>V</span>
                        <span className='three'>R</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id='toggle2'>
                        <span className="navbar-toggler-icon" id='toggle2'></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbar'>
                            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/About' ? 'active' : ''}`}>
                                <Link className="nav-link" to={"/About"}>About us</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/Services' ? 'active' : ''}`}>
                                <Link className="nav-link" to={"/Services"}>Services</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/Contact' ? 'active' : ''}`}>
                                <Link className="nav-link" to={"/Contact"}>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
