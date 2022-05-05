import React, { useContext } from 'react'
import classes from './Home.module.css'

import UserProfile from '../../components/UserProfile/UserProfile'
import Shortlet from '../../components/Shortlet/Shortlet'

import NotificationBell from '../../../../assets/icons/notification.svg'
import BankIcon from '../../../../assets/icons/bank.svg'
import ShortletIcon from '../../../../assets/icons/shortlet.svg'

const Home = ({user}) => {

  console.log(user)

  return (

    <div className={classes.full_container}>
    
    
    <div className={classes.dashboard_home}>
      <div className={classes.user_profile}><UserProfile user={user} /></div>

      <p className={classes.dash_p}>Edit Profile</p>
    </div>

    <section className={classes.big_container}>
        <div className={classes.medium_container}>
          
            
          <div className={classes.bank_summary_container1}>
              <div className={classes.bank_summary}>
                  <div className={classes.bank_summary_title}>
                    <img src={ShortletIcon} alt="Shortlet icons " />
                    <p>Shortlets</p>
                  </div>
                  <span>See All</span>
              </div>
                <div className={classes.bank_summary_content}>{user.apartments.map((apartment, i) => (<Shortlet key={i} isenabled={apartment.isEnabled} verified={apartment.isVerified} image={apartment.image[0]} title={apartment.houseTitle} description={apartment.description } amount={apartment.amount} verifiedhome />))}
              
                 
                </div>
                
          </div>
            
        </div>
        {/* </div> */}
        <div className={classes.small_container}>
            <div className={classes.notification}>
                <p> Notification</p>
                <span>See all</span>
            </div>

            <div className={classes.notification_body}>
                  <img src={NotificationBell} alt="notification bell" />
                  <p>No notification</p>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Home