import React, { useContext, useState } from 'react'
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom';
import '../Header/nav.css'
import Close from '../../../assets/icons/cancel.svg'
import Button from '../Button';

import HeaderLogo from '../../../assets/icons/logo.svg'
import BuildingIcon from '../../../assets/images/building.svg'
import TravelIcon from '../../../assets/images/plane.svg'
import HeartIcon from '../../../assets/images/heart.svg'
import HouseIcon from '../../../assets/images/house.svg'
import DropDownIcon from '../../../assets/images/drop-down.svg'
import Avatar from '../../../assets/images/avatar2.jpeg'
import Divider from '../Divider';
import { AuthContext } from '../../../store/authContext/AuthProvider';
import {ReactComponent as DropDown} from '../../../assets/images/drop-down.svg'

const Nav = ({ dropMenuIsVisible,setDropMenuIsVisible })=> {
     const [select, setSelect]=useState();
     const {authState: {isLoggedIn}} = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();
    const handleClick = ()=> setSelect({});


    // const navigate = useNavigate();
   const onclick = (link) => {
        navigate(link)
   }

    const closeDropMenu = ()=> {
        setDropMenuIsVisible(false);
    }
    

    return (
        <nav className="nav">
            <div className={dropMenuIsVisible ? "show-drop-menu-container" : "drop-menu-container"}>
                <div className={dropMenuIsVisible ? "drop-menu show-drop-menu mini" : "drop-menu mini"}>
                    <div >

                        <div className="main-header">
                            <div className="logo-mini-container">
                                <span className="logo-mini"><img src={ HeaderLogo } alt="Logo" /></span>
                            </div>
                                    
                            <div className="close" onClick={closeDropMenu}> <img src={Close} alt=" close drop nav button" /> </div>
                        </div>
                        {isLoggedIn && <div className='profile__pic'>
                            <div className='profile__img'>
                                <img src={Avatar} alt="profile image" />
                            </div>
                            <div className='profile__text'>Hi, Code_max</div>
                        </div>}
                        {isLoggedIn && <Divider />}
                        {location.pathname == '/' ?  <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About Us</Link></li>
                            <li><Link to='/'>Partnership</Link></li>
                        </ul>
                        :
                         <div className='search_box_options3'>
                            <div className='search_box_options1 accomo' onClick={()=> onclick()}>
                                <img src={ BuildingIcon } alt="an icon representing a building" />
                                <p>Book Accomodation</p>
                                <img src={DropDownIcon} alt=" a dropdown icon" />
                            </div>

                            <div className='search_box_options1 travel'>
                                <img src={TravelIcon} alt="a airplane icon" />
                                <p>Travel</p>
                            </div>

                            <div className='search_box_options1 trips'>
                                <img src={HeartIcon} alt="a heart icon" />
                                <p>Trips</p>
                            </div>

                            <div className='search_box_options1 house' onClick={() => onclick('/upload')}>
                                <img src={HouseIcon} alt="a house icon" />
                                <p>Lease Shortlets</p>
                            </div>
                        </div>}
                    </div>
                    <div className="right mini_btn ">
                        {!isLoggedIn ? 
                            <>
                                <Button name='Sign Up' bigCard onClick={() => onclick('/signup')} navBtn primary link='/auth' />           
                                <Button name='Log In' bigCard onClick={() => onclick('/login')} navBtn secondary link='/login' />
                            </>
                            :
                            <Button name='Log Out' bigCard onClick={() => onclick('/login')} navBtn secondary link='/login' />}
                    </div>
                </div>
            </div>
            <div className='nav_Style'>
                <div className='desktop_nav'>
                    <span className='desktop_nav_logo' ><img src={ HeaderLogo } alt="Logo" /></span>
                    
                    
                    {location.pathname == '/' ? <ul className="macro">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                        <li><Link to='#'>Partnership</Link></li>
                    </ul>
                    :
                    <div className='search_box_options2'>
                        <div className='search_box_options1 accomo2' onClick={()=> handleClick}>
                            <img src={ BuildingIcon } alt="an icon representing a building" />
                            <p>Book Accomodation</p>
                            <img src={DropDownIcon} alt=" a dropdown icon" />
                        </div>

                        
                        <div className='search_box_options1 travel2'>
                            <img src={TravelIcon} alt="a airplane icon" />
                            <p>Travel</p>
                        </div>

                        <div className='search_box_options1 trips2'>
                            <img src={HeartIcon} alt="a heart icon" />
                            <p>Trips</p>
                        </div>

                        <div className='search_box_options1 house2'>
                            <img src={HouseIcon} alt="a house icon" />
                            <p>Lease Shortlets</p>
                        </div>
                    </div>}
                    <div className="right macro btn-class"> 
                    {!isLoggedIn ? 
                        <>
                            <Button name='Sign Up' onClick={() => onclick('/signup')} navBtn primary link='/auth'/>           
                            <Button name='Log In' onClick={() => onclick('/login')} navBtn secondary link='/login' />
                        </>
                        :
                        <div className='landing__profile'>
                            <p>Hi, CodeMax </p>
                            <DropDown />
                            <img src={Avatar} alt="profile" />
                        </div>
                    }

                    </div>
                

                </div>
            </div>
            
                
        </nav>
        
    )
}

export default Nav
