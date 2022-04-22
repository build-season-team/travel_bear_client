import React from 'react'
import classes from './Home.module.css'

import UserProfile from '../../components/UserProfile/UserProfile'

import NotificationBell from '../../../../assets/icons/notification.svg'
import BankIcon from '../../../../assets/icons/bank.svg'

const Home = () => {
  return (

    <>
    
    
    <div className={classes.dashboard_home}>
      <div className={classes.user_profile}><UserProfile /></div>

      <p className={classes.dash_p}>Edit Profile</p>
    </div>

    <section className={classes.big_container}>
        <div className={classes.medium_container}>
            <div className={classes.bank_summary}>
              <div className={classes.bank_summary_title}>
                <p>Bank</p>
                <img src={BankIcon} alt="" />
              </div>
              
                <span>See all</span>
            </div>
        </div>
        <div className={classes.small_container}>
            <div className={classes.notification}>
                <p> Notification</p>
                <span>See all</span>
            </div>

            <div className={classes.notification_body}>
                  <img src={NotificationBell} alt=" notification bell" />
                  <p>No notifcation</p>
            </div>
        </div>
    </section>

    </>
  )
}

export default Home