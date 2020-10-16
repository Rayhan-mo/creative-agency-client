import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
           <img style={{width:'10em', marginLeft:'6.5vw'}} src={logo} alt="main-logo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navbar-brand" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-dark" href="/portfolio">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-dark" href="/team">Our team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-dark" href="/contact">Contact Us</a>
                    </li>
                    <button type="button" class="btn btn-dark"><Link to="/client">Login</Link></button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;