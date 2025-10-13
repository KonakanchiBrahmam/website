import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Rhyno EV Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="About.html">About Us</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="SE03 Lite.html">SE03 Lite</a>
                            <a className="dropdown-item" href="SE03.html">SE03</a>
                            <a className="dropdown-item" href="SE03 Max.html">SE03 Max</a>
                            <a className="dropdown-item" href="Compare.html">Compare All</a>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="Contact.html">Contact Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="Pre-book.html">Pre-Book Now</a></li>
                </ul>
                <div className="social-icons">
                    <a href="https://instagram.com/rhyno" target="_blank" aria-label="Instagram" className="nav-link" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com/company/rhyno" target="_blank" aria-label="LinkedIn" className="nav-link" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
