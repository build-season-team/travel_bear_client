import React, { useContext, useEffect } from 'react'
import classes from './ReservationPage.module.css'

import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";


import Header from '../../components/UI/Header'
import FooterWrap from '../../components/UI/Footer'
import Shortlet from '../Dashboard/components/Shortlet/Shortlet';
import Button from '../../components/UI/Button';

import InfoCircle from '../../assets/icons/info-circle.svg'
import LocationIcon from '../../assets/icons/location.svg'
import { ShortletContext } from '../../store/shortletContext/ShortletProvider';
import { New_BOOKING } from '../../constants/actionTypes';
import getBookings from '../../store/shortletContext/actionCreators/getBooking';
import Toast from '../../components/UI/Toast';




const ReservationPage = () => {

    const [searchParams] = useSearchParams()
    const {shortletDispatch, shortletState: {bookings, message, loading}} = useContext(ShortletContext);

    useEffect(() => {
        if(searchParams.get('success') && searchParams.get('success') == 'true') {
            console.log('yaay');
            shortletDispatch({
                type: New_BOOKING
            });
        }
        getBookings()(shortletDispatch);
    }, [])

    console.log(bookings)


  return (
        <>
          {message && <Toast emoji='🤗' message={message} success />}
        <Header />
            <div className={classes.reservation_container}>
                <div className={classes.reservation_header}>
                    <div className={classes.reservation__text}>
                        <p className={classes.reservation_info}>Reservations</p>
                        <p className={classes.shortlet_sub_info}>You have {bookings.length} reservations.</p>
                    </div>
                    <div className={classes.link_to}>
                        <Link className={classes.link_to_link} to='#' > <span className={classes.upload__icon}><FaAngleLeft  size={24}   /> </span> <span className={classes.upload__text}>Back</span> </Link>
                    </div>
                </div>

                {
                    bookings.map((curr, i) => (
                        <div key={i} className={classes.reservation_content}>
                            <div className={classes.reservation_content_one}>
                                <Shortlet description={curr.apartment?.description.substring(0, 40) + "..."} title={curr.apartment?.houseTitle} amount={curr.apartment?.amount} image={curr.apartment?.image[0]}  button={<Button authBtn primary name='Checkout' />} />
                            </div>

                            <div className={classes.house_address}>
                                <img src={LocationIcon} alt="an icon representing location for the shortlet address" />
                                <p><span>Location: </span>{`${curr.apartment?.address}, ${curr.apartment?.city}, ${curr.apartment?.state}.`}</p>
                            </div>
                        </div>
                    ))
                }

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