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
import { ReactComponent as DropDown } from '../../../assets/images/drop-down.svg'
import logout from '../../../store/authContext/actionCreators/logout';
import Drop from '../DropDown/DropDown'

const Nav = ({ dropMenuIsVisible, setDropMenuIsVisible, hideNav }) => {
    const [select, setSelect] = useState();
    const { authDispatch, authState: { isLoggedIn, user } } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [isSeen, setISeen] = useState(false)
    const handleClick = () => setSelect({});
    console.log(location.pathname)


    // const navigate = useNavigate();
    const onclick = (link) => {
        navigate(link)
    }

    const closeDropMenu = () => {
        setDropMenuIsVisible(false);
    }

    const signout = () => {
        console.log('signed out')
        logout()(authDispatch)(() => setTimeout(() => {
            navigate('/')
        }, 1000))
    }


    return (
        <nav className="nav">
            <div className={dropMenuIsVisible ? "show-drop-menu-container" : "drop-menu-container"}>
                <div className={dropMenuIsVisible ? "drop-menu show-drop-menu mini" : "drop-menu mini"}>
                    <div >

                        <div className="main-header">
                            <div className="logo-mini-container">
                                <span onClick={() => navigate('/')} className="logo-mini"><img src={HeaderLogo} alt="Logo" /></span>
                            </div>

                            <div className="close" onClick={closeDropMenu}> <img src={Close} alt=" close drop nav button" /> </div>
                        </div>
                        {!hideNav &&
                            <>

                                {isLoggedIn && <div onClick={signout} className='profile__pic'>
                                    <div className='profile__img'>
                                        <img src={Avatar} alt="profile image" />
                                    </div>
                                    <div className='profile__text'>Hi, {user?.firstName}</div>
                                </div>}
                                {isLoggedIn && <Divider />}
                                {location.pathname == '/' ? <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/'>About Us</Link></li>
                                    <li><Link to='/'>Partnership</Link></li>
                                </ul>
                                    :
                                    <div className='search_box_options3'>
                                        <div className='search_box_options1 accomo' onClick={() => navigate('/shortlets')}>
                                            <img src={BuildingIcon} alt="an icon representing a building" />
                                            <p>Book Accomodation</p>
                                            <img src={DropDownIcon} alt=" a dropdown icon" />
                                        </div>

                                        <div className='search_box_options1 travel'>
                                            <img src={TravelIcon} alt="a airplane icon" />
                                            <p>Travel</p>
                                        </div>

                                    <div onClick={() => navigate('/reservation')}  className='search_box_options1 trips'>
                                            <img src={HeartIcon} alt="a heart icon" />
                                            <p>Reservations</p>
                                        </div>

                                        <div className='search_box_options1 house' onClick={() => onclick('/terms')}>
                                            <img src={HouseIcon} alt="a house icon" />
                                            <p>Lease Shortlets</p>
                                        </div>
                                    </div>}
                            </>

                        }
                    </div>
                    {!hideNav &&
                        <div className="right mini_btn ">
                            {!isLoggedIn ?
                                <>
                                    <Button name='Sign Up' bigCard onClick={() => onclick('/signup')} navBtn primary link='/auth' />
                                    <Button name='Log In' bigCard onClick={() => onclick('/login')} navBtn secondary link='/login' />
                                </>
                                :
                                <Button name='Log Out' bigCard onClick={() => onclick('/login')} navBtn secondary link='/login' />}
                        </div>
                    }
                </div>
            </div>
            <div className='nav_Style'>
                <div className='desktop_nav'>
                    <span onClick={() => navigate('/')} className='desktop_nav_logo' ><img src={HeaderLogo} alt="Logo" /></span>

                    {!hideNav &&
                        <>
                            {location.pathname == '/' ? <ul className="macro">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>About Us</Link></li>
                                <li><Link to='#'>Partnership</Link></li>
                            </ul>
                                :
                                <div className='search_box_options2'>
                                    <div className='search_box_options1 accomo2' onClick={() => navigate('/shortlets')}>
                                        <img src={BuildingIcon} alt="an icon representing a building" />
                                        <p>Book Accomodation</p>
                                        <img src={DropDownIcon} alt=" a dropdown icon" />
                                    </div>


                                    <div className='search_box_options1 travel2'>
                                        <img src={TravelIcon} alt="a airplane icon" />
                                        <p>Travel</p>
                                    </div>

                                <div onClick={() => navigate('/reservation')}  className='search_box_options1 trips2'>
                                        <img src={HeartIcon} alt="a heart icon" />
                                        <p>Reservations</p>
                                    </div>

                                    <div onClick={() => navigate('/terms')} className='search_box_options1 house2'>
                                        <img src={HouseIcon} alt="a house icon" />
                                        <p>Lease Shortlets</p>
                                    </div>
                                </div>}
                            <div className="right macro btn-class">
                                {!isLoggedIn ?
                                    <>
                                        <Button name='Sign Up' onClick={() => onclick('/signup')} navBtn primary link='/auth' />
                                        <Button name='Log In' onClick={() => onclick('/login')} navBtn secondary link='/login' />
                                    </>
                                    :
                                    <div onClick={() => setISeen(!isSeen)} className='landing__profile'>
                                        <p>Hi, {user?.firstName} </p>
                                        <DropDown />
                                        <img src={Avatar} alt="profile" />
                                        {isSeen && <Drop logout={signout} style={{transform: `translateY(${isSeen ? 0 : '-100%'})`}} setISeen={setISeen} />}
                                    </div>

                                }

                            </div>

                        </>
                    }




                </div>
            </div>


        </nav>

    )
}

export default Nav
