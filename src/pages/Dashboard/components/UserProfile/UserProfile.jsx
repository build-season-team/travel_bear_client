import React from 'react'

import classes from './UserProfile.module.css'
import Avatar from '../../../../assets/images/avatar2.jpeg'
import ShortletIcon from '../../../../assets/icons/shortlet.svg'
import EmailIcon from '../../../../assets/icons/email.svg'
import PhoneIcon from '../../../../assets/icons/phone.svg'

const UserProfile = ({user}) => {
  return (
      <>
        <div className={classes.user_container}>
            <img className={classes.user_image} src={ Avatar } alt="User" />
            <div className={classes.user_details}>
                <p>{user.firstName + " " + user.lastName}</p>
                <div className={classes.user_shortlet_container}>
                    <div className={classes.user_shortlet}>
                        <img src={ShortletIcon} alt="shortlet" />
                        <p>Shortlets: <span> {user.apartments.length}</span></p>
                    </div>
                    <div className={classes.user_shortlet}>
                        <img src={EmailIcon} alt="shortlet" />
                        <p>Email: <span> {user.email} </span> </p>
                    </div>
                    <div className={classes.user_shortlet}>
                        <img src={PhoneIcon} alt="shortlet" />
                        <p>Phone: <span> {user.phone} </span> </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile