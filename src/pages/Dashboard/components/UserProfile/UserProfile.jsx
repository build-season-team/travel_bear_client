import React from 'react'
import classes from './UserProfile.module.css'


import Maria from '../../../../assets/images/maria.jpg'
import ShortletIcon from '../../../../assets/icons/shortlet.svg'
import EmailIcon from '../../../../assets/icons/email.svg'
import PhoneIcon from '../../../../assets/icons/phone.svg'

const UserProfile = () => {
  return (
      <>
    <div className={classes.user_container}>
        <img className={classes.user_image} src={ Maria } alt="User" />

        <div className={classes.user_details}>
            <p>Maria Nnanna</p>
            <div className={classes.user_shortlet_container}>
                <div className={classes.user_shortlet}>
                    <img src={ShortletIcon} alt="shortlet" />
                    <p>Shortlets: <span> 1</span></p>
                </div>

                <div className={classes.user_shortlet}>
                    <img src={EmailIcon} alt="shortlet" />
                    <p>Email: <span> ojereAdupkeMaria@gmail.com </span> </p>
                </div>

                <div className={classes.user_shortlet}>
                    <img src={PhoneIcon} alt="shortlet" />
                    <p>Phone: <span> 09086775456 </span> </p>
                </div>
            </div>
        </div>

    </div>

    </>
  )
}

export default UserProfile