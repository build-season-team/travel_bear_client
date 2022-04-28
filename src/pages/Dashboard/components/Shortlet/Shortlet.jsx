import { useState } from 'react'
import classes from './Shortlet.module.css'
import Button from '../../../../components/UI/Button'

import ShortletImage from '../../../../assets/images/house3.jpg'



const Shortlet = () => {

    const [verified, setVerified] = useState();
  return (

    <>
        <div className={classes.shortlet_data}>
            <div className={classes.shortlet_cover}>
                <img className={classes.shortlet_image} src={ShortletImage} alt="" />
                { verified
                
                ?
                <span className={classes.unverified}>Unverified</span> 

                :
                <span className={classes.verified}>Verified</span>
                    
                }
                
                
            </div>
            
            <div className={classes.shortlet_details}>
                <p className={classes.shortlet_title}>Hotel Gunawangsa MERR</p>
                <p className={classes.shortlet_desc}>Clean 3bedrorom apartment with seperate toilets but shared kitchen.</p>
                <span> N16,700</span>
                <p>Status: <span>Public</span></p>
                
                <div className={classes.dash_button}>
                    <span className={classes.disable_btn}>
                        Disable
                    </span>
                    <span className={classes.remove_btn}>
                        Remove
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shortlet