import React from "react";
import { Link } from "react-router-dom";

import logo from "./assets/logo.png";


const Header = () => {
    return (
        <nav className="header-color">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to={'/'} className="brand-logo"><img src={logo} /></Link>
                    <ul id="nav-mobile"  className="right hide-on-med-and-down">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/shop'}>Shop</Link></li>
                        <li><Link to={'/about'}>About us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;