import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Policies</h5>
                        <ul className="list-unstyled">
                            <li><a href="private policy.html" className="text-white">Privacy Policy</a></li>
                            <li><a href="Refundpolicy.html" className="text-white">Refund Policy</a></li>
                            <li><a href="#" className="text-white">Website Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Contact Us</a></li>
                            <li><a href="#" className="text-white">Products</a></li>
                            <li><a href="#" className="text-white">Rentals</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Social</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.linkedin.com/company/rhyno-ev" className="text-white">Career (LinkedIn)</a></li>
                            <li><a href="https://www.instagram.com/rhyno-ev" className="text-white">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/rhyno-ev" className="text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="https://instagram.com/rhyno" target="_blank" aria-label="Instagram" className="nav-link" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com/company/rhyno" target="_blank" aria-label="LinkedIn" className="nav-link" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="text-center pt-3">
                <p>&copy; 2024 Rhyno EV. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
