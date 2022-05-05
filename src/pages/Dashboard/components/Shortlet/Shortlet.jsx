import { useState } from 'react'
import classes from './Shortlet.module.css'
import Button from '../../../../components/UI/Button'

import ShortletImage from '../../../../assets/images/house3.jpg'
import { BASE_SHORTLET_URL_DEV } from '../../../../constants/base'



const Shortlet = ({image, amount, isenabled, unverified, verified, disableBtn, removeBtn, button, houseOwner, title, description}) => {



  return (

    <>
        <div className={classes.shortlet_data}>
            <div className={classes.shortlet_cover}>
                <img className={classes.shortlet_image} src={BASE_SHORTLET_URL_DEV + image} alt="" />
                
                
                { !verified
                
                ?
                <span className={classes.unverified}> not-verified </span> 
                            // Unverified
                :
                <span className={classes.verified}>verified</span>
                    
                // Verified
                }

                
                
            </div>
            
            <div className={classes.shortlet_details}>
                <p className={classes.shortlet_title}>{title}</p>
                  <p className={classes.shortlet_desc}>{description?.substring(0, 40) + '...'}</p>
                <span> {amount}</span>
                <span>status: <span style={{color: `${isenabled ? 'green': 'grey'}`}}>{isenabled ? 'public' : "private"}</span></span>
                
                <div className={classes.dash_button}>
                    
                    { !houseOwner ?<div className={classes.checkoutBtn}>
                        {button}
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
    </>
  )
}

export default Shortlet