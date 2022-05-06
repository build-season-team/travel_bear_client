import React from 'react'
import classes from './VerificationPage.module.css'


import VerifyApartment from '../../components/VerifyApartment/VerifyApartment'
import Button from '../../../../components/UI/Button'

import NotificationBell from '../../../../assets/icons/notification.svg'
import BankIcon from '../../../../assets/icons/bank.svg'
import ShortletIcon from '../../../../assets/icons/shortlet.svg'

const VerificationPage = () => {
  return (

    <div className={classes.full_container}>
    
    
    <section className={classes.dashboard_home}>
      <div className={classes.apartment_profile}> <VerifyApartment title='Hotel Gunawangsa MERR' name='Kachi Afudoh' description='Clean 3 bedroom apartment with seperate toilets but shared kitchen.' button={ <Button primary authBtn name='Accept' /> } btn1={ <Button danger authBtn name='Decline' /> } /></div>

      <div className={classes.apartment_profile}> <VerifyApartment title='Teneway Richmond Street' name='Kalu Emmanuel' description='Fully furnished 2 bedroom apartment in the choicest area.' button={ <Button primary authBtn name='Accept' /> } btn1={ <Button danger authBtn name='Decline' /> } /></div>

      {/* <p className={classes.dash_p}>Edit Profile</p> */}
    </section>

    {/* <section className={classes.big_container}>
        <div className={classes.medium_container}>
          <div className={classes.bank_summary_container}>
              <div className={classes.bank_summary}>
                  <div className={classes.bank_summary_title}>
                    <img src={BankIcon} alt="" />
                    <p>Banks</p>
                  </div>

                  <span>See All</span>
              </div>
              <div className={classes.bank_boxes}>
                  <div className={classes.small_box}>

                  </div>
                  <div className={classes.small_box}>

                  </div>
              </div>
               
          </div>
            
          <div className={classes.bank_summary_container1}>
              <div className={classes.bank_summary}>
                  <div className={classes.bank_summary_title}>
                    <img src={ShortletIcon} alt="" />
                    <p>Shortlets</p>
                  </div>
                  <span>See All</span>
                </div>

                dsdsdsds
          </div>
            
        </div>
        
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
    </section> */}

    </div>
  )
}

export default VerificationPage;