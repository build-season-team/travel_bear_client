import React, { useState } from 'react'
import Nav from './nav'

import HeaderLogo from '../../../assets/icons/header-logo.svg'

const Header = ()=> {

    const [dropMenuIsVisible, setDropMenuIsVisible] = useState(false);

    const showDropMenu = ()=> {
        setDropMenuIsVisible(true);
    }

    return (

        <>
            {/* Header for smaller devices (devices other than a desktop) */}
        <div className="main-header-mini mini">
            <div className="container main-header">
                <div className="logo-mini-container">
                    <span className="logo-mini"><img src={ HeaderLogo } alt="Logo" /></span>
                </div>
                        
                <div className="hamburger-menu hamburger-mini mini" onClick={showDropMenu}>
                    <span style={{"--w": 1}}></span>
                    <span style={{"--w": .75}}></span>
                    <span style={{"--w": .5}}></span>
                </div>
            </div>
            <Nav dropMenuIsVisible={dropMenuIsVisible} setDropMenuIsVisible={setDropMenuIsVisible} />
        </div>
        
        <header className="header macro">
            <div className="container main-header">
                <span className="logo logo-desk">resource edge</span>

                {/* Navigation component belongs here */}
                <Nav />
            </div>  
        </header>
        
        </>
    )
}

export default Header
