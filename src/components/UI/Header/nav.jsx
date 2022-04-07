import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../Header/nav.css'
import Close from '../../../assets/images/cancel.svg'
import Button from '../Button';

import HeaderLogo from '../../../assets/icons/logo.svg'

const Nav = ({ dropMenuIsVisible,setDropMenuIsVisible })=> {

    // const navigate = useNavigate();
   

    const closeDropMenu = ()=> {
        setDropMenuIsVisible(false);
    }
    

    return (
        <nav className="nav">
            <div className={dropMenuIsVisible ? "show-drop-menu-container" : "drop-menu-container"}>
                <div className={dropMenuIsVisible ? "drop-menu show-drop-menu mini" : "drop-menu mini"}>
                    <div className="main-header">
                        <div className="logo-mini-container">
                            <span className="logo-mini"><img src={ HeaderLogo } alt="Logo" /></span>
                        </div>
                                
                        <div className="close" onClick={closeDropMenu}> <img src={Close} alt=" close drop nav button" /> </div>
                    </div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                        <li><Link to='/'>Partnership</Link></li>
                    </ul>
                    <div className="right mini_btn">
                        <Button name='Sign Up' primary link='/auth' />
                        <Button name='Log In' secondary link='/login' />
                    </div>
                </div>
            </div>
            <div className='nav_Style'>
                <div className='desktop_nav'>
                    <span className='desktop_nav_logo' ><img src={ HeaderLogo } alt="Logo" /></span>
                    
                    <ul className="macro">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                        <li><Link to='#'>Partnership</Link></li>
                        
                    </ul>
                    <div className="right macro">
                        <Button name='Sign Up' primary link='/auth' />
                        <Button name='Log In' secondary link='/login' />
                    </div>
                

                </div>
            </div>
            
                
        </nav>
    )
}

export default Nav
