import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../Header/nav.css'
import Button from '../Button';

import HeaderLogo from '../../../assets/icons/logo.svg'

const Nav = ({ dropMenuIsVisible,setDropMenuIsVisible })=> {

    // const navigate = useNavigate();
   

    const closeDropMenu = ()=> {
        setDropMenuIsVisible(false);
    }
    

    return (
        <nav className="nav">
             <div className={dropMenuIsVisible ? "drop-menu-container show-drop-menu-container" : "drop-menu-container"}>
                <div className={dropMenuIsVisible ? "drop-menu show-drop-menu mini" : "drop-menu mini"}>
                    <div className="main-header">
                        <div className="logo-mini-container">
                            <span className="logo-mini"><img src={ HeaderLogo } alt="Logo" /></span>
                        </div>
                                
                        <div className="close" onClick={closeDropMenu}>&times;</div>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Partnership</a></li>
                    </ul>
                    <div className="right">
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login" className="btn" >Sign In</Link>
                    </div>
                </div>
             </div>
            

            <ul className="macro">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Partnership</a></li>
            </ul>
            <div className="right macro">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login" className="btn" >Sign In</Link>
            </div>
        </nav>
    )
}

export default Nav
