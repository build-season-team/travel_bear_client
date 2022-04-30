import React from 'react'
import classes from './ReservationPage.module.css'

import { Link, Navigate } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";


import Header from '../../components/UI/Header'
import FooterWrap from '../../components/UI/Footer'
import Shortlet from '../Dashboard/components/Shortlet/Shortlet';
import Button from '../../components/UI/Button';

import InfoCircle from '../../assets/icons/info-circle.svg'
import LocationIcon from '../../assets/icons/location.svg'




const ReservationPage = () => {


  return (
        <>
        <Header />
            <div className={classes.reservation_container}>
                <div className={classes.reservation_header}>
                    <div className={classes.reservation__text}>
                        <p className={classes.reservation_info}>Reservations</p>
                        <p className={classes.shortlet_sub_info}>You have “2” reservations.</p>
                    </div>
                    <div className={classes.link_to}>
                        <Link className={classes.link_to_link} to='#' > <span className={classes.upload__icon}><FaAngleLeft  size={24}   /> </span> <span className={classes.upload__text}>Back</span> </Link>
                    </div>
                </div>

                <div className={classes.reservation_content}>
                    <div className={classes.reservation_content_one}>
                        <Shortlet button={<Button authBtn primary name='Checkout'  />} />
                    </div>

                    <div className={classes.house_address}>
                        <img src={ LocationIcon } alt="an icon representing location for the shortlet address" />
                        <p><span>Location:</span> 1. Okpara avenue, Enugu Enugu, Nigeria Coordinate: 6.4401961, 7.48643789 ; Chime Avenue, New Haven Enugu. Enugu, Nigeria</p>
                    </div>
                </div>

                <div className={classes.shortTip}>
                    <img src={ InfoCircle } alt="an icon for tips to Travel bear users" />
                    <p className={classes.tip_text}>You can always return to your <span> reservation </span> page from the <span> Trips </span>  menu to access your booked apartments and also check-out when ready to exit the apartment.</p>
                </div>
            </div>
        <FooterWrap />
        </>
    
  )
}

export default ReservationPage