import { useState } from 'react'
import classes from './Shortlet.module.css'
import Button from '../../../../components/UI/Button'

import ShortletImage from '../../../../assets/images/house3.jpg'



const Shortlet = ({statustitle, status, rating, amount, unverified, verifiedhome, disableBtn, removeBtn, button, houseOwner,}) => {

const [verified, setVerified] = useState();

  return (

    <>
        <div className={classes.shortlet_data}>
            <div className={classes.shortlet_cover}>
                <img className={classes.shortlet_image} src={ShortletImage} alt="" />
                
                
                { verified
                
                ?
                <span className={classes.unverified}> {unverified} </span> 
                            // Unverified
                :
                <span className={classes.verified}>{verifiedhome}</span>
                    
                // Verified
                }

                
                
            </div>
            
            <div className={classes.shortlet_details}>
                <p className={classes.shortlet_title}>Hotel Gunawangsa MERR</p>
                <p className={classes.shortlet_desc}>Clean 3bedrorom apartment with seperate toilets but shared kitchen.</p>
                <span> {amount}</span>
                <p> {statustitle} <span>{status}</span></p>
                {/* Status: <span>Public</span> */}
                
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