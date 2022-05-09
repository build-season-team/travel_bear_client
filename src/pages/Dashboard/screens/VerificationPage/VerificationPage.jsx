import React, { useContext, useEffect, useState } from 'react'
import classes from './VerificationPage.module.css'


import VerifyApartment from '../../components/VerifyApartment/VerifyApartment'
import Button from '../../../../components/UI/Button'

import NotificationBell from '../../../../assets/icons/notification.svg'
import BankIcon from '../../../../assets/icons/bank.svg'
import ShortletIcon from '../../../../assets/icons/shortlet.svg'
import {AdminContext} from '../../../../store/adminContext/AdminProvider';
import getApartments from '../../../../store/adminContext/actionCreator/getApartment'
import verifyApartment from '../../../../store/adminContext/actionCreator/verifyApartment'
import Toast from '../../../../components/UI/Toast'

const VerificationPage = () => {
  
  const [isVerify, setIsVerify] = useState(false)

  const { adminDispatch, adminState: { apartments, loading, error, message } } = useContext(AdminContext)
  console.log(apartments)

  useEffect(() => {
    console.log('iran')
    getApartments()(adminDispatch);
  },[isVerify])

  console.log('i didnt ran')

  const verify = (id) => {
    verifyApartment(id)(adminDispatch)(() => {
      setIsVerify(!isVerify)
    });
  }

  return (

    <div className={classes.full_container}>
      {message && <Toast emoji='🤗' message={message} success />}
      {error && <Toast emoji='😱' message={error} danger />}
    
    
    <section className={classes.dashboard_home}>
      
      {apartments.filter(item => item.isVerified === false).map((item, i) => (
        
        <div className={classes.apartment_profile}> <VerifyApartment title={item.houseTitle} image={item.image[0]} name={item.user?.firstName + " " + item.user?.lastName} description={item.description?.substring(0, 36) + "...."} state={item.state} address={item.address} city={item.city} button={<Button onClick={() => verify(item._id)} primary authBtn name={`${loading ? 'loading...' : 'Accept'}`} />} btn1={<Button danger authBtn name={`${loading ? 'loading...' : 'Decline'}`} />} /></div>
      ))}

      {/* <p className={classes.dash_p}>Edit Profile</p> */}
    </section>

   

    </div>
  )
}

export default VerificationPage;