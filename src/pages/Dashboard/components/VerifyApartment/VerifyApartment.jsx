import { useState } from 'react'
import classes from './VerifyApartment.module.css'
import Button from '../../../../components/UI/Button'

import ShortletImage from '../../../../assets/images/house1.jpg'
import LocationIcon from '../../../../assets/icons/location.svg'






const VerifyApartment = ({statustitle, name, status, rating, title, amount, unverified, verifiedhome, disableBtn, removeBtn, button, btn1, houseOwner, description}) => {

    const [verified, setVerified] = useState();
    
      return (
    
        <>
            <div className={classes.verify_container}>
            <div className={classes.shortlet_data}>
                <div className={classes.shortlet_cover}>
                    <img className={classes.shortlet_image} src={ShortletImage} alt="" />
    
                    
                    
                </div>
                
                <div className={classes.shortlet_details}>
                    <div className={classes.admin_details}>
                        <span></span>
                        <p>{name}</p>
                    </div>
                    <p className={classes.shortlet_title}> {title} </p>
                    <p className={classes.shortlet_desc}> {description} </p>
                    <span> {amount}</span>
                    <p> {statustitle} <span>{status}</span></p>
                    {/* Status: <span>Public</span> */}
                    
                    <div className={classes.dash_button}>
                        
                        { !houseOwner ?<div className={classes.checkoutBtn}>
                           <div className={classes.acceptBtn}> {button} </div> 
                           <div className={classes.acceptBtn}> {btn1} </div>  
                        </div>
                        :
                        <>
                        <span className={classes.disable_btn}>
                            Disable
                        </span>
                        <span className={classes.remove_btn}>
                            Remove
                        </span>
                        </>}
                        
                    </div>
                </div>
                
            </div>
            <div className={classes.house_address}>
                <img src={ LocationIcon } alt="an icon representing location for the shortlet address" />
                <p><span>Location:</span> 1. Okpara avenue, Enugu Enugu, Nigeria Coordinate: 6.4401961, 7.48643789 ; Chime Avenue, New Haven Enugu. Enugu, Nigeria</p>
            </div>
            </div>
        </>
      )
}

export default VerifyApartment